import Pizza from "../models/Pizza";

type PizzaSelection = {
  pizza: Pizza;
  quantity: number;
};

type PizzaSelectionAndIndex = { item: PizzaSelection; index: number };

export default class CartService {
  private _items: Array<PizzaSelection> = [];

  constructor() {}

  add(pizza: Pizza, quantity: number = 1) {
    if (quantity <= 0) {
      throw new Error(`Quantity must be >= 1`);
    }

    const existing: PizzaSelectionAndIndex | null =
      this.searchItemAndIndex(pizza);
    if (!existing) {
      this._items.push({ pizza: pizza, quantity: quantity });
    } else {
      existing.item.quantity += quantity;
      this._items[existing.index] = existing.item;
    }
  }

  remove(pizza: Pizza) {
    const existing: PizzaSelectionAndIndex | null =
      this.searchItemAndIndex(pizza);
    if (!existing) {
      throw new Error(`Cart does not include Pizza "${pizza.name}"`);
    } else {
      delete this._items[existing.index];
    }
  }

  removeAll() {
    this._items = [];
  }

  searchItemAndIndex(pizza: Pizza): PizzaSelectionAndIndex | null {
    const index: number = this._items.findIndex((i) => i.pizza.id === pizza.id);

    if (index === -1) {
      return null;
    } else {
      return { item: this._items[index], index: index };
    }
  }

  calculateTotal(): number {
    return this._items.reduce(
      (prev: number, curr: PizzaSelection) =>
        prev + curr.pizza.price * curr.quantity,
      0
    );
  }

  getItems(): ReadonlyArray<PizzaSelection> {
    return this._items;
  }
}
