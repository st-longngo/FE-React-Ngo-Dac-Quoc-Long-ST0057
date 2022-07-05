import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decreseQuantityCart, increseQuantityCart, deleteCart } from '../cart.actions';
import { ICart } from '../../../shared/interfaces/cart';
import { Button } from '../../../shared/components/partials/index';
import { formatFixed } from '../../../shared/common/common';

interface ICartItemProps {
  cartItem: ICart;
}

interface changeCart {
  add: () => void;
  minus: () => void;
}

const CartItem = ({ cartItem }: ICartItemProps) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(cartItem.quantity);
  const changeQuantityOfCart = (action: string) => {
    const changeCart = {
      add: (): void => {
        dispatch(increseQuantityCart(cartItem));
        setQuantity(cartItem.quantity);
      },
      minus: (): void => {
        dispatch(decreseQuantityCart(cartItem));
        setQuantity(cartItem.quantity);
      }
    };
    changeCart[action as keyof changeCart]();
  };

  const deleteProductInCart = () => {
    dispatch(deleteCart(cartItem.id));
  };

  const totalPriceOfCart = (): string => {
    return formatFixed((cartItem.price - (cartItem.price * cartItem.discount) / 100) * cartItem.quantity);
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(+e.target.value);
  };

  return (
    <li className="cart">
      <div className="cart-body">
        <div className="cart-image">
          <img src={cartItem.image} alt={cartItem.name} />
        </div>
        <div className="cart-content">
          <h4 className="typo-2 txt-light cart-name">{cartItem.name}</h4>
          <span className="txt-regular cart-price">
            ${formatFixed(cartItem.price - (cartItem.price * cartItem.discount) / 100)}
          </span>
          {cartItem.discount !== 0 && (
            <span className="txt-regular cart-discount">${cartItem.price}</span>
          )}
        </div>
      </div>
      <div className="cart-buttons">
        <Button title="-" customClass="cart-btn" onClick={() => changeQuantityOfCart("minus")}/>
        <input
          type="text"
          className="cart-quantity"
          value={quantity}
          onChange={handleChangeQuantity}
        />
        <Button title="+" customClass="cart-btn" onClick={() => changeQuantityOfCart("add")}/>
      </div>
      <p className="txt-center cart-total">${totalPriceOfCart()}</p>
      <Button title="x" customClass="cart-btn cart-close" onClick={deleteProductInCart}/>
    </li>
  );
};

export default CartItem;
