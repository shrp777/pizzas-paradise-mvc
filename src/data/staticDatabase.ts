import Pizza from "../models/Pizza";
import { PizzaBase } from "../models/enums/PizzaBase";

export const boscaiola = new Pizza(
  "Boscaiola",
  11,
  PizzaBase.CREME,
  ["Mozzarella", "Champignons", "Jambon cru"],
  "90bf0db3-c8f6-4234-8420-064d54f213b7"
);

export const rucola = new Pizza(
  "Boscaiola",
  12,
  PizzaBase.CREME,
  ["Mozzarella", "Copeaux de Parmesan", "Roquette", "Jambon cru"],
  "5c218af3-74fa-46ee-8341-803bf8da0e05"
);

export const margherita = new Pizza(
  "Margherita",
  6,
  PizzaBase.TOMATE,
  ["Mozzarella", "Basilic"],
  "0b589cb3-9b4a-418d-90f2-5ecb82039e57"
);

export const marinara = new Pizza(
  "Marinara",
  5,
  PizzaBase.TOMATE,
  ["Mozzarella", "Origan", "Ail"],
  "ce36ec18-de4a-43ed-827d-b15382455fdb"
);

export const quattroStagioni = new Pizza(
  "Quattro Stagioni",
  12,
  PizzaBase.TOMATE,
  ["Mozzarella", "Olives", "Jambon", "Coeurs d'artichaut", "Champignons"],
  "16b83e04-b666-462c-b8c4-ea82cd4148a1"
);

export const pizzas = [
  margherita,
  marinara,
  quattroStagioni,
  boscaiola,
  rucola
];
