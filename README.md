# Clock Made of Clocks (Recreation)

My recreation of u/EntropyReversed's CodePen called "Clock Made of Clocks".

Original Reddit post: https://www.reddit.com/r/webdev/comments/1nrx5n9/clock_made_of_clocks/

Original Pen: https://codepen.io/EntropyReversed/pen/QwybYEJ

## Setup

### Local Development

```bash
bun install
bun run dev
```

### Docker

#### Using Pre-built Image from GitHub Container Registry

```bash
# Pull and run the latest version
docker run -p 3000:3000 ghcr.io/ward-smeyers/clock-of-clocks:latest

# Pull and run a specific version
docker run -p 3000:3000 ghcr.io/ward-smeyers/clock-of-clocks:1.0.0
```

#### Building Locally

```bash
# Build the image
docker build -t clock-of-clocks .

# Run the container
docker run -p 3000:3000 clock-of-clocks
```

#### Docker Compose (Optional)

Create a `docker-compose.yml` file:

```yaml
services:
  clock-of-clocks:
    image: ghcr.io/ward-smeyers/clock-of-clocks:latest
    ports:
      - "3000:3000"
    environment:
      - PORT=3000 # Optional, defaults to 3000
```

Then run:
```bash
docker-compose up
```

The application will be available at http://localhost:3000