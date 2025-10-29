export type CreateElementProps = {
  type: string;
  id?: string;
  classes?: string;
  styles?: Record<string, string>;
  data?: Record<string, string | number>;
  variables?: Record<string, string>;
  content?: string | number;
  children?: HTMLElement | HTMLElement[];
}

export type GetElementProps = {
  id?: string;
  data?: {
    key: string;
    value: string | number;
  }
}

export type CustomNode<T = HTMLElement> = {
  element: T;
  children: HTMLElement[];
}

export class El {
  static create(props: CreateElementProps) {
    const node = document.createElement(props.type);

    if (props.id) node.id = props.id;

    if (props.classes) {
      props.classes
        .split(" ")
        .map(cls => cls.trim())
        .forEach(cls => cls && node.classList.add(cls));
    }

    if (props.styles) {
      Object.entries(props.styles).forEach(([key, value]) => {
        node.style.setProperty(key, value);
      });
    }

    if (props.data) {
      Object.entries(props.data).forEach(([key, value]) => {
        node.dataset[key] = value.toString();
      });
    }

    if (props.variables) {
      Object.entries(props.variables).forEach(([key, value]) => {
        node.style.setProperty(key, value);
      });
    }

    if (props.content) node.textContent = props.content.toString();

    if (props.children) {
      if (Array.isArray(props.children)) props.children.forEach((child) => this.append(node, child));
      else this.append(node, props.children);
    }

    return node;
  }

  static get<T extends HTMLElement>(props: GetElementProps): CustomNode<T> {
    if (props.id) {
      const element =  document.getElementById(props.id) as T;

      if(!element) throw new Error(`Element with id "${props.id}" not found`);

      return {
        element,
        children: this.children(element)
      };
    }

    if (props.data) {
      const element = document.querySelector(`[data-${props.data.key}="${props.data.value}"]`) as T;

      if(!element) throw new Error(`Element with data-${props.data.key}="${props.data.value}" not found`);

      return {
        element,
        children: this.children(element)
      };
    }

    throw new Error("Id or data attribute required to find an element.");
  }

  static append(node: HTMLElement | string, child: HTMLElement) {
    if (typeof node === "string") {
      const target = this.get({ id: node });

      target.element.appendChild(child);
    } else if (node instanceof HTMLElement) {
      node.appendChild(child);
    }
  }

  static children(node: HTMLElement) {
    return [...node.children] as HTMLElement[];
  }

  static property(node: HTMLElement, key: string, value: string | number) {
    node.style.setProperty(key, value.toString());
  }
}