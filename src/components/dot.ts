import { El } from "$src/components/element";

class DotComponent {
  create() {
    return El.create({ type: "div", classes: "dot" });
  }
}

export const Dot = new DotComponent();