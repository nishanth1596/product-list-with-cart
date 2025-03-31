import { CartItem, confirmOrder, deleteItem } from "../cartSlice";
import styles from "./CartOverview.module.css";
import carbonNeutralIcon from "../../../assets/images/icon-carbon-neutral.svg";

import CartOverviewItem from "../cartOverviewItem/CartOverviewItem";
import { useDispatch } from "react-redux";

type CartOverviewProps = {
  cartItems: CartItem[];
  amount: string;
};

function CartOverview({ cartItems, amount }: CartOverviewProps) {
  const dispatch = useDispatch();

  function handleDeleteItem(name: string) {
    dispatch(deleteItem(name));
  }

  function handleConfirmOrder() {
    dispatch(confirmOrder());
  }

  return (
    <>
      {cartItems.map((cart) => (
        <CartOverviewItem
          name={cart.name}
          quantity={cart.quantity}
          unitTotalPrice={cart.unitTotalPrice}
          unitPrice={cart.unitPrice}
          key={cart.name}
          onDelete={handleDeleteItem}
        />
      ))}

      <h4 className={styles.h4}>
        Order Total <span className={styles.span}>&#36;{amount}</span>
      </h4>

      <div className={styles.carbonNeutral} role="note">
        <img
          src={carbonNeutralIcon}
          alt="Carbon Neutral Icon"
          aria-hidden="true"
        />
        <p className={styles.p}>
          This is a <span className={styles.bold}>carbon-neutral</span> delivery
        </p>
      </div>

      <button onClick={handleConfirmOrder} className={styles.btn}>
        Confirm Order
      </button>
    </>
  );
}

export default CartOverview;
