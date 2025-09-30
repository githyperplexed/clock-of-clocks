import { digits } from "$src/utilities/digit";
import { rotation } from "$src/utilities/rotation";

export const cell = (value: string, index: number) => {
  const digit = digits.get(value)[index];

  if(digit) return digit;

  return rotation.get(" ");
}