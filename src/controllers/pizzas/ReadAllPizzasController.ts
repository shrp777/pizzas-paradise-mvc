import { createFactory } from "hono/factory";
import { ReadAllPizzasView } from "../../views/pizzas/ReadAllPizzas";
import { pizzas } from "../../data/staticDatabase";

const factory = createFactory();

export const ReadAllPizzasController = factory.createHandlers((c) => {
  return c.html(ReadAllPizzasView({ pizzas: pizzas }));
});
