import { createFactory } from "hono/factory";
import { pizzas } from "../../data/staticDatabase";
import { HTTPException } from "hono/http-exception";

const factory = createFactory();

export const ReadOnePizzaController = factory.createHandlers((c) => {
  const { id } = c.req.param();
  const existingPizza = pizzas.find((p) => p.id === id);

  if (!existingPizza) {
    throw new HTTPException(404, { message: `Pizza does not exist` });
  } else {
    return c.html(`<h1>${existingPizza.name}</h1>`);
  }
});
