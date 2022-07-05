import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/appReducer';
import CartList from './CartList';
import TotalList from './TotalList';
import { ICart } from '../../../shared/interfaces/cart';
import { formatFixed } from '../../../shared/common/common';

const SectionCart = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  const totalPrice = formatFixed(
    cart.reduce(
      (acc: number, item: ICart) =>
        acc + (item.price - (item.price * item.discount) / 100) * item.quantity,
      0
    )
  );

  return (
    <section className="section section-store">
      <div className="container">
        <div className="row store-inner">
          <div className="col-8 col-sm-12">
            <h3 className="txt-bold txt-center cart-title">Shopping Cart</h3>
            <CartList cart={cart} />
          </div>
          <div className="col-4 col-sm-12">
            <h3 className="txt-bold txt-center cart-title">Sub Total</h3>
            <TotalList cart={cart} />
            <div className="order-total">
              <p className="txt-bold">TOTAL PRICE</p>
              <span className="total">${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCart;
