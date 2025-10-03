import { Cell } from "$src/components/cell";
import { El } from "$src/components/element";

import { cell } from "$src/utilities/digit";

class DigitComponent {
  create(index: number) {
    const children = Array.from({ length: 24 }, (_, i) => Cell.create(i));

    return El.create({ 
      type: "div", 
      classes: "digit", 
      data: { index },
      children 
    });
  }

  tick(digit: HTMLElement, value: string) {
    El.children(digit)
      .map((node, index) => Cell.tick(node, cell(value, index)));
  }
}

export const Digit = new DigitComponent();