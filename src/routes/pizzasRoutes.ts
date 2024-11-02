import { Hono } from "hono";
import { ReadAllPizzasController } from "../controllers/pizzas/ReadAllPizzasController";
import { ReadOnePizzaController } from "../controllers/pizzas/ReadOnePizzaController";

const route = new Hono();

route.get("/", ...ReadAllPizzasController);
route.get("/:id", ...ReadOnePizzaController);

export default route;
