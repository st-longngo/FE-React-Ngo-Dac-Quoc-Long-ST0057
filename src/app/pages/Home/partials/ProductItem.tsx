import React from "react";
import { IProduct } from "./../../../shared/interfaces/product";
import Badge from "./../../../shared/components/partials/Badge";
import Button from "./../../../shared/components/partials/Button";
import { Link } from "react-router-dom";
import { productList } from "../../../shared/constant/product";
import { ICart } from "./../../../shared/interfaces/cart";
import { useGlobalContext } from "../../../shared/contexts/cart.context";

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
    const newProduct: IProduct = productList.find(
      (item: IProduct) => item.id === product.id
    )!;
    const productCart: ICart = cart.find(
      (item: ICart) => item.id === product.id
    )!;
    if (!productCart) {
      const newProductCart: ICart = { ...newProduct, quantity: 1 };
      cart.push(newProductCart);
    } else {
      cart[cart.indexOf(productCart)].quantity += 1;
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
