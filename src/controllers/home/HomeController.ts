import { createFactory } from "hono/factory";
import { HomeView } from "../../views/home/HomeView";

const factory = createFactory();

export const HomeController = factory.createHandlers((c) => {
  return c.html(HomeView());
});
