import { El } from "$src/components/element";

export class Hand {
  static create() {
    return El.create({ type: "div", classes: "hand" });
  }

  static tick(hand: HTMLElement, rotation: number) {
    hand.style.rotate = `${rotation}deg`;
  }
}