import { describe, expect, test, beforeEach } from "bun:test";
import CartService from "../src/services/CartService";
import { margherita } from "../src/data/staticDatabase";

let cart: CartService;

beforeEach(() => {
  cart = new CartService();
});

describe("CartService", () => {
  test("getItems should be empty by default", () => {
    expect(cart.getItems().length).toEqual(0);
  });

  test("calculateTotal should return 6", () => {
    cart.add(margherita);
    expect(cart.calculateTotal()).toEqual(6);
  });

  test("add should add 1 pizza selection with correct pizza and quantity", () => {
    cart.add(margherita);
    expect(cart.getItems()[0].pizza).toEqual(margherita);
    expect(cart.getItems()[0].quantity).toEqual(1);
  });

  test("getItems should return 1 pizza selection", () => {
    cart.add(margherita);
    cart.add(margherita);
    expect(cart.getItems().length).toEqual(1);
  });

  test("getItems should return 1 pizza selection with quantity wich equal 2", () => {
    cart.add(margherita);
    cart.add(margherita);
    expect(cart.getItems().at(0)?.quantity).toEqual(2);
  });

  test("removeAll should return remove all pizza selections", () => {
    cart.add(margherita);
    cart.removeAll();
    expect(cart.getItems().length).toEqual(0);
  });
});
