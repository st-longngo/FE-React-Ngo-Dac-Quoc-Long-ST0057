import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import Image from '../../../../assets/images/index';
import { ButtonLink } from '../../../shared/components/partials/index';
import CartItem from './CartItem';

const CartList = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <ul className="cart-list">
      <div className="cart-row">
        <span className="txt-bold cart-body">PRODUCT</span>
        <span className="txt-bold cart-buttons">QUANTITY</span>
        <span className="txt-center txt-bold cart-total">TOTAL</span>
        <span className="cart-close"></span>
      </div>
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
