import React, { ChangeEvent, useState } from 'react';
import { ICart } from './../../../shared/interfaces/cart';
import { useGlobalContext } from '../../../shared/contexts/cart.context';
interface ICartItemProps {
  cartItem: ICart;
}

interface changeCart {
  add: () => void;
  minus: () => void;
}

const CartItem = ({ cartItem }: ICartItemProps) => {
  const { cart, setCart } = useGlobalContext();
  const [quantity, setQuantity] = useState<number>(cartItem.quantity);

  const changeQuantityOfCart = (action: string) => {
    const cartIndex: number = cart.findIndex((item) => item.id === cartItem.id);
    const changeCart = {
      add: (): void => {
        cart[cartIndex].quantity += 1;
        setCart([...cart]);
        setQuantity(cartItem.quantity);
      },
      minus: (): void => {
        if (cart[cartIndex].quantity - 1 > 0) {
          cart[cartIndex].quantity -= 1;
          setCart([...cart]);
          setQuantity(cartItem.quantity);
        } else {
          setCart([...cart.filter((item) => item.id !== cartItem.id)]);
        }
      },
      change: (): void => {
        if(quantity) {
          cart[cartIndex].quantity = quantity;
          setCart([...cart]);
        } else {
          setCart([...cart.filter((item) => item.id !== cartItem.id)]);
        }
      }
    };
    changeCart[action as keyof changeCart]();
  };

  const deleteProductInCart = () => {
    setCart([...cart.filter((item) => item.id !== cartItem.id)]);
  };

  const totalPriceOfCart = (): string => {
    return ((cartItem.price - (cartItem.price * cartItem.discount) / 100) * cartItem.quantity).toFixed(2);
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(+e.target.value);
  };

  const handleKeyUpQuantity = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      changeQuantityOfCart('change');
    }
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
            ${cartItem.price - (cartItem.price * cartItem.discount) / 100}
          </span>
          {cartItem.discount && (
            <span className="txt-regular cart-discount">${cartItem.price}</span>
          )}
        </div>
      </div>
      <div className="cart-buttons">
        <button
          className="cart-btn"
          id="minus"
          onClick={() => changeQuantityOfCart("minus")}
        >
          <i className="bx bx-minus"></i>
        </button>
        <input
          type="text"
          className="cart-quantity"
          value={quantity}
          onChange={handleChangeQuantity}
          onKeyDown={handleKeyUpQuantity}
        />
        <button
          className="cart-btn"
          id="add"
          onClick={() => changeQuantityOfCart("add")}
        >
          <i className="bx bx-plus"></i>
        </button>
      </div>
      <p className="txt-center cart-total">${totalPriceOfCart()}</p>
      <button
        id="cart-close"
        className="cart-btn cart-close"
        onClick={() => deleteProductInCart()}
      >
        <i className="bx bx-x"></i>
      </button>
    </li>
  );
};

export default CartItem;
