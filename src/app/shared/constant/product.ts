import Image from "../../../assets/images";
import { IProduct } from './../interfaces/product';

export const productList: IProduct[] = [
  {
    id: '1',
    name: 'T-Shirt Summer Vibes',
    image: Image.ProductItem1,
    price: 119.99,
    discount: 30,
  },
  {
    id: '2',
    name: 'Loose Knit 3/4 Sleeve',
    image: Image.ProductItem2,
    price: 119.99,
    discount: 0,
  },
  {
    id: '3',
    name: 'Basic Slim Fit T-Shirt',
    image: Image.ProductItem3,
    price: 79.99,
    discount: 0,
  },
  {
    id: '4',
    name: 'Loose Textured T-Shirt',
    image: Image.ProductItem4,
    price: 119.99,
    discount: 0,
  },
];
