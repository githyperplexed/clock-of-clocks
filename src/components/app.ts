import { Clock } from "$src/components/clock";
import { El } from "$src/components/element";

import { equal, now } from "$src/utilities/time";

import type { Time } from "$src/types/time";

class App {
  time: Time = now();

  init() {
    El.append("app", Clock.create());

    this.tick();
  }

  tick() {
    Clock.tick(this.time);

    setInterval(() => {
      const time = now();

      if(!equal(time, this.time)) {
        this.time = Clock.tick(time);
      }
    }, 100);
  }
}

export const app = new App();