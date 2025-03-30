import styles from "./Cart.module.css";

import { useSelector } from "react-redux";
import { CartItem, getCartData } from "./cartSlice";
import CartOverview from "./CartOverview/CartOverview";
import EmptyCart from "./EmptyCart/EmptyCart";

function Cart() {
  const cartdata: CartItem[] = useSelector(getCartData);

  const orderAmount = cartdata
    .map((item) => item.unitTotalPrice)
    .reduce((cur, acc) => cur + acc, 0)
    .toFixed(2);

  return (
    <section className={styles.container}>
      <h3 className={styles.h3}>Your Cart (X)</h3>

      <article className={styles.article}>
        {cartdata.length > 0 ? (
          <CartOverview cartItems={cartdata} amount={orderAmount} />
        ) : (
          <EmptyCart />
        )}
      </article>
    </section>
  );
}

export default Cart;
