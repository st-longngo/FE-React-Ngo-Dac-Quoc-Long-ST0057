import React from 'react';
import { useGlobalContext } from '../../../shared/contexts/cart.context';
import CartList from './CartList';
import TotalList from './TotalList';

const SectionCart = () => {
  const { cart, setCart } = useGlobalContext();
  
  return (
    <section className="section section-store">
        <div className="container">
          <div className="row store-inner">
            <div className="col-8 col-sm-12">
              <h3 className="txt-bold txt-center cart-title">Shopping Cart</h3>
              <CartList cart={cart} setCart={setCart}/>
            </div>
            <div className="col-4 col-sm-12">
              <h3 className="txt-bold txt-center cart-title">Sub Total</h3>
              <TotalList cart={cart}/>
              <div className="order-total">
                <p className="txt-bold">TOTAL PRICE</p>
                <span className="total">
                  ${(cart.reduce((acc, item) => acc + ((item.price - (item.price * item.discount / 100)) * item.quantity), 0)).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SectionCart