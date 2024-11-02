import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { trimTrailingSlash } from "hono/trailing-slash";
import pizzasRoutes from "./routes/pizzasRoutes";
import { HomeController } from "./controllers/home/HomeController";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));
app.use(trimTrailingSlash()); //retire le slash inutile en fin d'URI (ex: /pizzas/ devient /pizzas)

app.get("/", ...HomeController);

app.route("/pizzas", pizzasRoutes);

export default app;
