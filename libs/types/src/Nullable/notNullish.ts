export type NotNullish<T> = Exclude<T, null | undefined>;

export type NotNullishObj<T extends Record<string, unknown>> = {
  [Item in keyof Required<T>]: NotNullish<T[Item]>;
};
