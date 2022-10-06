import { Product } from './Product';
import { Discount } from './Discount';
import list from '../../public/list.json';

//orders interface
interface OrderHandler {
  add: (number: number, quantity: number) => void;
  getTotal: () => number;
}

// let list = JSON.parse('./list.json');
console.log('lista', list);
const discounts: Discount[] = list['discounts'];
const products: Product[] = list['products'];

export default class MyOrderHandler implements OrderHandler {
  totalPrice: number; //total price for order
  constructor() {
    this.totalPrice = 0; //set start amount as 0
  }
  add(number: number, quantity: number) {
    let product, discount;
    let sum = 0;
    // get product
    for (let i = 0; i < products.length; i++) {
      if (products[i].number === number) product = products[i];
    }
    //check if any discount is applied on that product
    for (let i = 0; i < discounts.length; i++) {
      if (discounts[i].active && discounts[i].number === number)
        discount = discounts[i];
    }
    //apply 2x1 discount
    if (discount && discount.discount === '2x1') {
      quantity % 2 === 0
        ? (quantity = quantity / 2)
        : (quantity = (quantity - 1) / 2 + 1);
    }
    sum = quantity * product.price;

    //set total
    this.totalPrice = this.totalPrice + sum;
  }
  getTotal() {
    //apply Spend X to save Y
    for (let i = 0; i < discounts.length; i++) {
      if (discounts[i].active && discounts[i].discount === '5€')
        if (this.totalPrice > 20) this.totalPrice = this.totalPrice - 5;
    }
    return this.totalPrice;
  }
}
