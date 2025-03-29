import styles from "./CartButton.module.css";
import cartIcon from "../../assets/images/icon-add-to-cart.svg";

function CartButton() {
  return (
    <button className={styles.button} aria-label="Add to Cart">
      <img src={cartIcon} alt="" />
      <span className={styles.span}>Add to Cart</span>
    </button>
  );
}

export default CartButton;
