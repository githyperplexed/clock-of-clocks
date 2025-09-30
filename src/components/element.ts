export type CreateElementProps = {
  type: string;
  id?: string;
  classes?: string;
  data?: Record<string, string | number>;
  children?: HTMLElement[];
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

class ElementComponent {
  create(props: CreateElementProps) {
    const node = document.createElement(props.type);

    if (props.id) node.id = props.id;

    if (props.classes) node.classList.add(props.classes);

    if (props.data) {
      Object.entries(props.data).forEach(([key, value]) => {
        node.dataset[key] = value.toString();
      });
    }

    if (props.children) {
      props.children.forEach((child) => El.append(node, child));
    }

    return node;
  }

  get<T extends HTMLElement>(props: GetElementProps): CustomNode<T> {
    if (props.id) {
      const element =  document.getElementById(props.id) as T;

      if(!element) throw new Error(`Element with id "${props.id}" not found`);

      const children = Array.from(element.childNodes) as HTMLElement[];

      return {
        element,
        children
      };
    }

    if (props.data) {
      const element = document.querySelector(`[data-${props.data.key}="${props.data.value}"]`) as T;

      if(!element) throw new Error(`Element with data-${props.data.key}="${props.data.value}" not found`);

      const children = Array.from(element.childNodes) as HTMLElement[];

      return {
        element,
        children
      };
    }

    throw new Error("Id or data attribute required to find an element.");
  }

  append(node: HTMLElement | string, child: HTMLElement) {
    if (typeof node === "string") {
      const element = document.getElementById(node) as HTMLElement;

      element.appendChild(child);
    }
    
    if (node instanceof HTMLElement) {
      node.appendChild(child);
    }
  }

  children(node: HTMLElement) {
    return Array.from(node.childNodes) as HTMLElement[];
  }
}

export const El = new ElementComponent();