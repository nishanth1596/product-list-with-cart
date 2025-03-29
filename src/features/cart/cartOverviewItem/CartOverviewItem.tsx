import styles from "./CartOverviewItem.module.css";

import deleteIcon from "../../../assets/images/icon-remove-item.svg";

type CartOverviewItemProps = {
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

function CartOverviewItem({
  name,
  quantity,
  unitPrice,
  totalPrice,
}: CartOverviewItemProps) {
  return (
    <div className={styles.container}>
      <div>
        <h4 className={styles.h4}>{name}</h4>
        <p className={styles.p}>
          <span className={styles.quantity}>{quantity}x</span>
          <span className={styles.unitPrice}>@ {unitPrice}</span>
          <span className={styles.totalPrice}>{totalPrice}</span>
        </p>
      </div>

      <button
        aria-label="Click to delete this item from the cart"
        className={styles.btn}
      >
        <img src={deleteIcon} alt="" />
      </button>
    </div>
  );
}

export default CartOverviewItem;
