import styles from "./EmptyCart.module.css";
import emptyCartImg from "../../../assets/images/illustration-empty-cart.svg";

function EmptyCart() {
  return (
    <div className={styles.emptyCart}>
      <img
        src={emptyCartImg}
        alt="A cake representing no cart right currently"
      />
      <p>Your added items will appear here</p>
    </div>
  );
}

export default EmptyCart;
