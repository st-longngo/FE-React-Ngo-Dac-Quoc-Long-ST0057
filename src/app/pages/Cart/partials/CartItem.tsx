import React from 'react';
import { ICart } from './../../../shared/interfaces/cart';

interface ICartItemProps {
  item: ICart;
}

const CartItem = ({ item }: ICartItemProps) => {
  return (
    <li className="cart">
      <div className="cart-body">
        <div className="cart-image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="cart-content">
          <h4 className="typo-2 txt-light cart-name">{item.name}</h4>
          <span className="txt-regular cart-price">
            ${item.price - (item.price * item.discount) / 100}
          </span>
          {item.discount && (
            <span className="txt-regular cart-discount">${item.price}</span>
          )}
        </div>
      </div>
      <div className="cart-buttons">
        <button className="cart-btn js-minus-cart" id="minus">
          <i className="bx bx-minus"></i>
        </button>
        <input type="text" className="cart-quantity" value={item.quantity} />
        <button className="cart-btn js-add-cart" id="add">
          <i className="bx bx-plus"></i>
        </button>
      </div>
      <p className="txt-center cart-total">
        $
        {(
          (item.price - (item.price * item.discount) / 100) *
          item.quantity
        ).toFixed(2)}
      </p>
      <button id="cart-close" className="cart-btn cart-close">
        <i className="bx bx-x"></i>
      </button>
    </li>
  );
};

export default CartItem;
