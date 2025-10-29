import { Dot } from "$src/components/dot";
import { El } from "$src/components/element";
import { Hand } from "$src/components/hand";

export class Cell {
  static create(index: number) {
    return El.create({ 
      type: "div", 
      classes: "cell", 
      data: { index },
      children: [Hand.create(), Hand.create(), Dot.create()]
    });
  }

  static tick(cell: HTMLElement, rotation: number[]) {
    El.children(cell)
      .map((hand, index) => Hand.tick(hand, rotation[index]));
  }
}