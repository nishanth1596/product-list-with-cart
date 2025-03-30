import styles from "./CartOverviewItem.module.css";

import deleteIcon from "../../../assets/images/icon-remove-item.svg";

type CartOverviewItem = {
  name: string;
  quantity: number;
  unitPrice: number;
  unitTotalPrice: number;
  onDelete: (name: string) => void;
};

function CartOverviewItem({
  name,
  quantity,
  unitPrice,
  unitTotalPrice,
  onDelete,
}: CartOverviewItem) {
  return (
    <div className={styles.container}>
      <div>
        <h4 className={styles.h4}>{name}</h4>
        <p className={styles.p}>
          <span className={styles.quantity}>{quantity}x</span>
          <span className={styles.unitPrice}>@ {unitPrice}</span>
          <span className={styles.totalPrice}>{unitTotalPrice}</span>
        </p>
      </div>

      <button
        aria-label="Click to delete this item from the cart"
        className={styles.btn}
        onClick={() => onDelete(name)}
      >
        <img src={deleteIcon} alt="" />
      </button>
    </div>
  );
}

export default CartOverviewItem;
