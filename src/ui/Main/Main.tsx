import { useSelector } from "react-redux";
import Cart from "../../features/cart/Cart";
import Menu from "../../features/Menu/Menu";
import OrderSuccessful from "../../features/Order/OrderSuccessful/OrderSuccessful";
import { getIsOrderConfirmed } from "../../features/cart/cartSlice";

function Main() {
  const isOrdered = useSelector(getIsOrderConfirmed);

  return (
    <main>
      <Menu />
      {isOrdered ? <OrderSuccessful /> : <Cart />}
    </main>
  );
}

export default Main;
