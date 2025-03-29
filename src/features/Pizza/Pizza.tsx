import { useQuery } from "@tanstack/react-query";
import styles from "./Pizza.module.css";
import PizzaItem from "./PizzaItem";
import { fetchPizzaData } from "../../services/apiPizzas";

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
  const {
    data: pizzasData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pizza"],
    queryFn: fetchPizzaData,
  });

  return (
    <section className="">
      {/* test */}
      {/* <PizzaItem
        img="image-waffle-mobile.jpg"
        category="Waffle"
        name="Waffle with Berries"
        price={6.5}
      /> */}
      {/* test */}

      {pizzasData?.map((pizza: PizzaMapProps) => (
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
    </section>
  );
}

export default Pizza;
// Waffle with Berries
//
// 6.50
// Add to Cart
