import { useSelector } from "react-redux";
import styles from "./ChangeQuantityButton.module.css";
import { getQuantity } from "../../features/cart/cartSlice";

type ChangeQuantityButtonProps = {
  name: string;
  onIncrease: (name: string) => void;
  onDecrease: (name: string) => void;
};

function ChangeQuantityButton({
  name,
  onIncrease,
  onDecrease,
}: ChangeQuantityButtonProps) {
  const quantity = useSelector(getQuantity(name));

  return (
    <div className={styles.container}>
      <button
        aria-label="click to decrease the quantity by one"
        className={styles.btnDecrease}
        onClick={() => onDecrease(name)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#c73b0f"
          viewBox="0 0 10 2"
        >
          <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>

      <p className={styles.value}>{quantity}</p>

      <button
        aria-label="click to Increase the quantity by one"
        className={styles.btnIncrease}
        onClick={() => onIncrease(name)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#fff"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default ChangeQuantityButton;
