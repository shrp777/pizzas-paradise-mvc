import { PizzaBase } from "./enums/PizzaBase";
import { v4 as uuidv4 } from "uuid";

export default class Pizza {
  private _id: string;
  private _name: string;
  private _price: number;
  private _base: PizzaBase;
  private _ingredients: Array<string> = [];

  constructor(
    name: string,
    price: number,
    base: PizzaBase,
    ingredients: Array<string> = [],
    id?: string
  ) {
    if (id) {
      this._id = id;
    } else {
      this._id = uuidv4();
    }

    if (price <= 0) {
      throw new Error(`Price must be > to 0`);
    }
    if (name === "") {
      throw new Error(`Name must not be empty`);
    }

    this._base = base;
    this._name = name;
    this._price = price;
    this._ingredients = ingredients;
  }

  priceToString(): string {
    return this._price.toFixed(2) + "€";
  }

  ingredientsToString(): string {
    return this._ingredients.join(", ");
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get base(): PizzaBase {
    return this._base;
  }

  get price(): number {
    return this._price;
  }
}
