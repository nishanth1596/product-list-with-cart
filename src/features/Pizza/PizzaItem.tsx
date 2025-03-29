import CartButton from "../../ui/CartButton/CartButton";
import styles from "./PizzaItem.module.css";

type PizzaItemProps = {
  mobileImg: string;
  tabletImg: string;
  desktopImg: string;
  category: string;
  name: string;
  price: number;
};

function PizzaItem({
  mobileImg,
  tabletImg,
  desktopImg,
  category,
  name,
  price,
}: PizzaItemProps) {
  return (
    <article>
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileImg} />
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          srcSet={tabletImg}
        />
        <source media="(min-width: 1024px)" srcSet={desktopImg} />

        <div className={styles.picture}>
          <img src={mobileImg} alt={name} className={styles.img} />
          <CartButton />
        </div>
      </picture>

      <p className={styles.category}>{category}</p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>
        <span>&#36;</span>
        {price}
      </p>
    </article>
  );
}

export default PizzaItem;
