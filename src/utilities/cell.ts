import { digits } from "$src/utilities/digit";
import { rotation } from "$src/utilities/rotation";

import type { DigitKey } from "$src/types/digit";

export const cell = (value: string, index: number) => {
  return digits[value as DigitKey][index] || rotation[" "];
}