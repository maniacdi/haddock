import MyOrderHandler from '../components/Orden';

export default function Home() {
  const orderHandler: MyOrderHandler = new MyOrderHandler();
  orderHandler.add(12, 4);
  orderHandler.add(21, 2);
  const total = orderHandler.getTotal();
  console.log('total: ', total); // 16.00€
  return (
    <div>
      <p>HELLO! Look the console (f12)</p>
      <p>total price: {total}</p>
    </div>
  );
}
