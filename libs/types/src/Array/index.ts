export type ArrayElement<T extends unknown[]> = T extends (infer R)[]
  ? R
  : never;
