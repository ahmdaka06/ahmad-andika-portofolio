/**
 * Animation stagger delay utility.
 * Each step adds 80ms of delay for cascading reveals.
 */

export const STAGGER_STEP_MS = 80;

export function staggerDelay(index: number): number {
  return index * STAGGER_STEP_MS;
}