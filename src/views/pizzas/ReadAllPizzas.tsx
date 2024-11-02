import Pizza from "../../models/Pizza";
import { Layout } from "../shared/Layout";

type ReadAllPizzasViewProps = {
    pizzas:Pizza[]
}

export const ReadAllPizzasView = ({ pizzas }: ReadAllPizzasViewProps) =>
    <Layout title="All pizzas">
        <div id="breadcrumb">
            <div>
                <a class="button" title="Home" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" /></svg>
                </a>
            </div>
            <div>|</div>
            <div>
                <a class="button button-clear" title="pizzas" href="/pizzas">pizzas</a>
            </div>
        </div>
        <ul>
            {
                pizzas.map(pizza =>
                    <li>
                        <a title={pizza.name} href={"/pizzas/" + pizza.id}>{pizza.name} - {pizza.priceToString()}</a>
                        <p>{ pizza.ingredientsToString()}</p>
                    </li>
                )
            }
        </ul>
    </Layout>