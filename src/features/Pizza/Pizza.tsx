import { useQuery } from "@tanstack/react-query";
import styles from "./Pizza.module.css";
import PizzaItem from "./PizzaItem";
import { fetchPizzaData } from "../../services/apiPizzas";
import LoadingSpinner from "../../ui/LoadingSpinner/LoadingSpinner";

type PizzaMapImageProps = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type PizzaMapProps = {
  image: PizzaMapImageProps;
  category: string;
  name: string;
  price: number;
};

function Pizza() {
  const { data: pizzasData, isLoading } = useQuery({
    queryKey: ["pizza"],
    queryFn: fetchPizzaData,
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <section>
      <h2 className={styles.h2}>Desserts</h2>

      <div className={styles.container}>
        {pizzasData.map((pizza: PizzaMapProps) => (
          <PizzaItem
            name={pizza.name}
            category={pizza.category}
            mobileImg={pizza.image.mobile}
            tabletImg={pizza.image.tablet}
            desktopImg={pizza.image.desktop}
            price={pizza.price}
            key={pizza.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Pizza;
