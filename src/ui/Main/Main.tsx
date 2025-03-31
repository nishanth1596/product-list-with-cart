import { useSelector } from "react-redux";
import Cart from "../../features/cart/Cart";
import Menu from "../../features/Menu/Menu";
import OrderSuccessful from "../../features/Order/OrderSuccessful/OrderSuccessful";
import { getIsOrderConfirmed } from "../../features/cart/cartSlice";
import styles from "./Main.module.css";

function Main() {
  const isOrdered = useSelector(getIsOrderConfirmed);

  return (
    <main className={styles.main}>
      <Menu />
      {isOrdered ? <OrderSuccessful /> : <Cart />}
    </main>
  );
}

export default Main;
