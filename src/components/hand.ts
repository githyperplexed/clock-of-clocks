import { El } from "$src/components/element";

class HandComponent {
  create() {
    return El.create({ type: "div", classes: "hand" });
  }

  tick(hand: HTMLElement, rotation: number) {
    hand.style.rotate = `${rotation}deg`;
  }
}

export const Hand = new HandComponent();