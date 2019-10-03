/**
 * Clamps a given value between a min an max
 * @param value the value to clamp
 * @param min the minimum value
 * @param [max] the maxium value
 */

export function clamp(value: number, min: number, max: number) {
  // if (value < min) return min;
  // if (value > max) return max;
  // return value;
}

export function clampMax(value: number, max: number) {
  return value > max ? max : value;
}

export function clampMin(value: number, min: number) {
  return value < min ? min : value;
}
