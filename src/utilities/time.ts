import type { Time } from "$src/types/time";

export const now = (): Time => {
  const time = new Date().toLocaleTimeString("en-US", { 
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const string = time.split(" ")[0];

  const [hours, minutes, seconds] = string.split(":");

  return {
    hours,
    minutes,
    seconds
  }
}

export const equal = (a: Time, b: Time) => {
  return a.hours === b.hours && a.minutes === b.minutes && a.seconds === b.seconds;
}