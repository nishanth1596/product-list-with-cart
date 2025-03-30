import styles from "./CartButton.module.css";
import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import { MenuItemProps } from "../../features/Menu/MenuItem";

function CartButton({ menuData, onAddToCart }: MenuItemProps) {
  return (
    <button
      className={styles.button}
      aria-label="Add to Cart"
      onClick={() => onAddToCart(menuData)}
    >
      <img src={cartIcon} alt="" />
      <span className={styles.span}>Add to Cart</span>
    </button>
  );
}

export default CartButton;
