type Route = (params: never) => string;

export const routes = {
  HOME: () => `/`,
  ABOUT: () => "/about",
} satisfies Record<string, Route>;
