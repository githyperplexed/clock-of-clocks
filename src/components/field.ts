import { Digit } from "$src/components/digit";
import { El } from "$src/components/element";

class FieldComponent {
  create(field: string) {
    return El.create({ 
      type: "div", 
      classes: "pair", 
      data: { field },
      children: [Digit.create(0), Digit.create(1)]
    });
  }

  tick(name: string, value: string) {
    El.get({ data: { key: "field", value: name } })
      .children
      .map((digit, index) => Digit.tick(digit, value[index]));
  }
}

export const Field = new FieldComponent();