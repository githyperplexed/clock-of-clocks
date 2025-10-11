# Multi-stage build for clock-of-clocks project

# Stage 1: Build the application
FROM oven/bun:1-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Stage 2: Production runtime
FROM oven/bun:1-alpine AS runtime

# Set working directory
WORKDIR /app

# Copy package files for production dependencies
COPY package.json bun.lockb* ./

# Install only production dependencies
RUN bun install --production --frozen-lockfile

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Create non-root user for security
RUN addgroup -g 100000 -S bunjs && \
    adduser -S bunuser -u 100000 -G bunjs

# Change ownership of the app directory
RUN chown -R bunuser:bunjs /app
USER bunuser

# Expose port (Railway will set PORT environment variable)
EXPOSE ${PORT:-3000}

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:${PORT:-3000}/ || exit 1

# Start the application
CMD ["bun", "run", "start"]