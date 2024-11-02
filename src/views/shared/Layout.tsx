import { html } from "hono/html";

const doctype = () => html`<!DOCTYPE html>`;

type LayoutProps = {
    children: any,
    title:string
}

export const Layout = ({ children, title }: LayoutProps) => 
<>
    <doctype/>{/*intégration du doctype HTML*/}
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"></link>
            <link rel="stylesheet" href="/static/css/styles.css"></link>
            <title>{title} | Pizza's Paradise</title>
        </head>
        <body>
                <div class="container">
                <header>
                        <p class="main-title"><a href="/" title="Pizzas">Pizza's Paradise</a></p>
                        <img src="/static/images/logo.png" width="200px"/>
                </header>
                <h1>{title}</h1>
                {children}
                <footer>
                    <hr />
                    <p>
                        <a title="Pizzas" href="/"><strong>Pizza's Paradise</strong></a>
                    </p>
                    <p class="credits">
                        Programmation Web - L3 MIASHS - IDMC - {new Date().getFullYear()}
                    </p>
                    <p class="credits">
                        Alexandre Leroux (alex@shrp.dev)
                    </p>
                </footer>
            </div>
        </body>
    </html>
</>
