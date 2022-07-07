import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import TotalItem from './TotalItem';

const TotalList = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <ul className="order-list">
      {cart.length ? (
        cart.map((item) => <TotalItem key={item.id} item={item} />)
      ) : (
        <li>Không có sản phẩm trong giỏ hàng</li>
      )}
    </ul>
  );
};

export default TotalList;
