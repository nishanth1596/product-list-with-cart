import styles from "./Cart.module.css";
import emptyCartImg from "../../assets/images/illustration-empty-cart.svg";

function Cart() {
  return (
    <section className={styles.container}>
      <h3 className={styles.h3}>Your Cart (X)</h3>

      <article>
        <div className={styles.emptyCart}>
          <img
            src={emptyCartImg}
            alt="A cake representing no cart right currently"
          />
          <p>Your added items will appear here</p>
        </div>
      </article>
    </section>
  );
}

export default Cart;
