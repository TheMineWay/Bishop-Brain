type Route = (params: never) => string;

export const routes = {
  HOME: () => `/`,
} satisfies Record<string, Route>;
