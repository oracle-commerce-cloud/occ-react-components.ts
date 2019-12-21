const resolvers: any = {
  string: (arg: string) => arg,
  number: (arg: number) => arg,
  array: (arg: any[]) => classNames.apply(null, arg),
  object: (arg: any) =>
    Array.isArray(arg) && arg.length
      ? resolvers.array(arg)
      : Object.entries(arg)
          .map(([key, value]: any) => (value ? key : ""))
          .join(" "),
};

export const classNames = (...props: any[]) => {
  return props
    .map((param) => (resolvers[typeof param] && !!param ? resolvers[typeof param].call(resolvers, param) : undefined))
    .join(" ");
};
