import React from "react";
import { ICart } from './../../../shared/interfaces/cart';

interface ITotalItemProps  {
  item: ICart
}

const TotalItem = ({item}: ITotalItemProps) => {
  return (
    <li className="order-item">
      <h4 className="txt-light order-name">{item.name}</h4>
      <div className="txt-bold order-quantity">x{item.quantity}</div>
    </li>
  );
};

export default TotalItem;
