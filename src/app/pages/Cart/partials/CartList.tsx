import React from "react";
import { ICart } from "../../../shared/interfaces/cart";
import CartItem from "./CartItem";

interface ICartListProps {
  cart: ICart[];
  setCart: (cart: ICart[]) => void;
}

const CartList = ({ cart, setCart }: ICartListProps) => {
  return (
    <ul className="cart-list">
      <li className="cart-row">
        <span className="txt-bold cart-body">PRODUCT</span>
        <span className="txt-bold cart-buttons">QUANTITY</span>
        <span className="txt-center txt-bold cart-total">TOTAL</span>
        <span className="cart-close"></span>
      </li>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CartList;
