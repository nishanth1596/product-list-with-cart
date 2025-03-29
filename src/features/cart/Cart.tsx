import styles from "./Cart.module.css";

import { useSelector } from "react-redux";
import { getCartData } from "./cartSlice";
import CartOverview from "./CartOverview/CartOverview";
import EmptyCart from "./EmptyCart/EmptyCart";

function Cart() {
  const cartdata = useSelector(getCartData);

  return (
    <section className={styles.container}>
      <h3 className={styles.h3}>Your Cart (X)</h3>

      <article>
        {cartdata.length > 0 ? (
          <CartOverview cartItems={cartdata} />
        ) : (
          <EmptyCart />
        )}
      </article>
    </section>
  );
}

export default Cart;
