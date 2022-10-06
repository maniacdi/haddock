import MyOrderHandler from '../components/Orden';

export default function Home() {
  //creating order
  const orderHandler: MyOrderHandler = new MyOrderHandler();
  //adding products and quantity
  orderHandler.add(12, 4);
  orderHandler.add(21, 2);
  //getting total amount
  const total = orderHandler.getTotal();
  console.log('total: ', total, '€'); // 16.00€
  return (
    <div className='container'>
      <p>HELLO! Look the console (f12)</p>
      <p>I have added 4 units of product 12 and 2 units of product 21</p>
      <p>total price: {total}€</p>
    </div>
  );
}
