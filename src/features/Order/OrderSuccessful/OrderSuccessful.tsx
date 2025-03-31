import { createPortal } from "react-dom";
import styles from "./OrderSuccessful.module.css";

import orderConfirmed from "../../../assets/images/icon-order-confirmed.svg";
import OrderOverview from "../OrderOverview/OrderOverview";
import { useDispatch } from "react-redux";
import { newOrder } from "../../cart/cartSlice";

function OrderSuccessful() {
  const dispatch = useDispatch();

  return createPortal(
    <div className={styles.container}>
      <div className={styles.orderConfirmation}>
        <img src={orderConfirmed} alt="Order Confirmed" />
        <h1 className={styles.h1}>Order Confirmed</h1>
        <p className={styles.p}>We hope you enjoy your food!</p>

        <OrderOverview />

        <button onClick={() => dispatch(newOrder())} className={styles.btn}>
          Start New Order
        </button>
      </div>
    </div>,
    document.getElementById("portal-root") as HTMLElement
  );
}

export default OrderSuccessful;
