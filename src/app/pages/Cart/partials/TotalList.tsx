import React from 'react';
import { ICart } from './../../../shared/interfaces/cart';
import TotalItem from './TotalItem';

interface ITotalListProps {
  cart: ICart[];
}

const TotalList = ({ cart }: ITotalListProps) => {
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
