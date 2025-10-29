import { Clock } from "$src/components/clock";
import { El } from "$src/components/element";

import { equal, now } from "$src/utilities/time";

import type { Time } from "$src/types/time";

export class App {
  static time: Time = now();

  static init() {
    El.append("app", Clock.create());

    this.tick();
  }

  static interval() {
    const time = now();

    if(!equal(time, this.time)) {
      this.time = Clock.tick(time);
    }
  }

  static tick() {
    Clock.tick(this.time);

    setInterval(() => this.interval(), 100);
  }
}