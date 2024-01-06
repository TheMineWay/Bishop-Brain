import { Route } from "./router";
import { routes } from "./routes";

const routes_definition: Route[] = [
  {
    path: routes.HOME(),
    loader: () => import("../pages/home/home.page"),
  },
];

export default routes_definition;
