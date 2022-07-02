import React from 'react';
import { ICart } from '../../../shared/interfaces/cart';
import CartItem from './CartItem';
import Image from './../../../../assets/images/index';
import ButtonLink from '../../../shared/components/partials/Link';

interface ICartListProps {
  cart: ICart[];
}

const CartList = ({ cart }: ICartListProps) => {
  return (
    <ul className="cart-list">
      <li className="cart-row">
        <span className="txt-bold cart-body">PRODUCT</span>
        <span className="txt-bold cart-buttons">QUANTITY</span>
        <span className="txt-center txt-bold cart-total">TOTAL</span>
        <span className="cart-close"></span>
      </li>
      {cart.length ? (
        cart.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
      ) : (
        <div className="error">
          <div className="error-image">
            <img src={Image.ErrorImage} alt="Error 404" />
          </div>
          <ButtonLink title="Back home" customClass="btn btn-secondary" path="/"/>
        </div>
      )}
    </ul>
  );
};

export default CartList;
