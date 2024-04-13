export type Maybe<T> = T | null | undefined;

export type Theme = "light" | "dark";

export type ObjectFromUnion<T extends string> = {
  [key in T]: string;
};
