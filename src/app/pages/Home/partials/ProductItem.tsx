import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../shared/contexts/cart.context";
import { IProduct } from "./../../../shared/interfaces/product";
import { ICart } from "./../../../shared/interfaces/cart";
import Badge from "./../../../shared/components/partials/Badge";
import Button from "./../../../shared/components/partials/Button";

interface IProductItemProps {
  product: IProduct;
}

interface IProductDiscountProps {
  price: number;
  discount: number;
}

const calPriceDiscount = (price: number, discount: number): string => {
  return (price - (price * discount) / 100).toFixed(2);
};

const ProductDiscount = ({ price, discount }: IProductDiscountProps) =>
  discount ? (
    <>
      <span>${calPriceDiscount(price, discount)}</span>
      <span className="product-discount">${price}</span>
    </>
  ) : (
    <span>${price}</span>
  );

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
  const { name, image, price, discount } = product;
  const { cart, setCart } = useGlobalContext();

  const addToCart = (product: IProduct): void => {
    const cartIndex: number = cart.findIndex(
      (item: ICart) => item.id === product.id
    )!;
    if (cartIndex < 0) {
      cart.push({ ...product, quantity: 1 });
    } else {
      cart[cartIndex].quantity += 1;
    }
    setCart([...cart]);
  };

  return (
    <li className="col-3 col-sm-6">
      <div className={discount ? "product product-sale" : "product"}>
        {discount !== 0 && <Badge discount={discount} type="primary" />}
        <div className="product-thumnail">
          <Link to="/" className="product-link">
            <img src={image} alt={name} className="product-image" />
          </Link>
          <div className="product-cart">
            <Button
              title="add to cart"
              customClass="btn btn-secondary"
              onClick={() => {addToCart(product)}}
            />
          </div>
        </div>
        <div className="product-content">
          <h4 className="product-name">
            <Link to="/" className="typo-2 txt-light">
              {name}
            </Link>
          </h4>
          <div className="product-price">
            <ProductDiscount price={price} discount={discount} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
