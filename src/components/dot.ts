import { El } from "$src/components/element";

export class Dot {
  static create() {
    return El.create({ type: "div", classes: "dot" });
  }
}