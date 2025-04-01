import CartButton from "../../ui/CartButton/CartButton";

import styles from "./MenuItem.module.css";

import ChangeQuantityButton from "../../ui/ChangeQuantityButton/ChangeQuantityButton";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCartData,
  increaseItemQuantity,
} from "../cart/cartSlice";
import { MenuMapProps } from "./Menu";

export type MenuItemProps = {
  menuData: MenuMapProps;
  onAddToCart: (menuData: MenuMapProps) => void;
};

function MenuItem({ menuData, onAddToCart }: MenuItemProps) {
  const { name, category, price, image } = menuData;
  const { desktop: desktopImg, mobile: mobileImg, tablet: tabletImg } = image;

  const cartData = useSelector(getCartData);

  const dispatch = useDispatch();

  function handleIncreaseItemQuantity(name: string) {
    dispatch(increaseItemQuantity(name));
  }

  function handleDecreaseItemQuantity(name: string) {
    dispatch(decreaseItemQuantity(name));
  }

  const isItemAddedtoCart = cartData.some((item) => item.name === name);

  return (
    <article>
      <picture className={styles.picture}>
        <source media="(max-width: 767px)" srcSet={mobileImg} />
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          srcSet={tabletImg}
        />
        <source media="(min-width: 1024px)" srcSet={desktopImg} />

        <img
          src={mobileImg}
          alt={name}
          className={isItemAddedtoCart ? styles.activeImg : styles.img}
        />

        {isItemAddedtoCart ? (
          <ChangeQuantityButton
            name={name}
            onIncrease={handleIncreaseItemQuantity}
            onDecrease={handleDecreaseItemQuantity}
          />
        ) : (
          <CartButton onAddToCart={onAddToCart} menuData={menuData} />
        )}
      </picture>

      <p className={styles.category}>{category}</p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>
        <span>&#36;</span>
        {price.toFixed(2)}
      </p>
    </article>
  );
}

export default MenuItem;
