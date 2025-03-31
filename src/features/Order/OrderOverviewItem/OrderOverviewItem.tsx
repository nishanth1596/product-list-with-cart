import { CartImages } from "../../cart/cartSlice";
import styles from "./OrderOverviewItem.module.css";

export type CartDataProps = {
  image: CartImages;
  name: string;
  quantity: number;
  unitPrice: number;
  unitTotalPrice: number;
};

type OrderOverviewItemProps = {
  cartData: CartDataProps;
};

function OrderOverviewItem({ cartData }: OrderOverviewItemProps) {
  const { image, name, quantity, unitPrice, unitTotalPrice } = cartData;

  const pricePerItem = unitPrice.toFixed(2);
  const itemAmount = unitTotalPrice.toFixed(2);

  return (
    <div className={styles.container}>
      <img className={styles.img} src={image.thumbnail} alt={name} />
      <div className={styles.orderDetails}>
        <div>
          <h4 className={styles.name}>{name}</h4>
          <div className={styles.quantityPrice}>
            <p className={styles.quantity}>{quantity}x</p>
            <p className={styles.pricePerItem}>@ {pricePerItem}</p>
          </div>
        </div>
        <p className={styles.itemAmount}>&#36;{itemAmount}</p>
      </div>
    </div>
  );
}

export default OrderOverviewItem;
