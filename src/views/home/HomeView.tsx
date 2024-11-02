import { Layout } from "../shared/Layout";

export const HomeView = () =>
    <Layout title="Welcome to Pizza's Paradise!">

        <nav>
            <ul>
                <li>    
                    <a title="All Pizzas" href="/pizzas">All Pizzas</a>
                </li>
            </ul>
        </nav>
    </Layout>