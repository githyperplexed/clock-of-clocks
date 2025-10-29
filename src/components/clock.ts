import { El } from "$src/components/element";
import { Field } from "$src/components/field";

import type { Time } from "$src/types/time";

export class Clock {
  static create() {
    const children = [Field.create("hours"), Field.create("minutes"), Field.create("seconds")];

    return El.create({ type: "div", classes: "clock", children });
  }

  static tick(time: Time) {
    Field.tick("hours", time.hours);
    Field.tick("minutes", time.minutes);
    Field.tick("seconds", time.seconds);

    return time;
  }
}