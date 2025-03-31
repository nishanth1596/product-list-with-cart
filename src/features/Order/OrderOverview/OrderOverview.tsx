import { useSelector } from "react-redux";
import { getCartData } from "../../cart/cartSlice";
import OrderOverviewItem, {
  CartDataProps,
} from "../OrderOverviewItem/OrderOverviewItem";
import styles from "./OrderOverview.module.css";

function OrderOverview() {
  const cartdata: CartDataProps[] = useSelector(getCartData);

  const orderAmount = cartdata
    .map((item) => item.unitPrice)
    .reduce((cur, acc) => cur + acc, 0)
    .toFixed(2);

  return (
    <article className={styles.article}>
      {cartdata.map((item) => (
        <OrderOverviewItem cartData={item} key={item.name} />
      ))}

      <h5 className={styles.h5}>
        Order Total <span className={styles.span}>&#36;{orderAmount}</span>
      </h5>
    </article>
  );
}

export default OrderOverview;
