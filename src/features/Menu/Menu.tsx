import { useQuery } from "@tanstack/react-query";
import styles from "./Menu.module.css";

import LoadingSpinner from "../../ui/LoadingSpinner/LoadingSpinner";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
import { fetchMenuData } from "../../services/apiMenu";
import MenuItem from "./MenuItem";

type MenuMapImageProps = {
  mobile: string;
  tablet: string;
  desktop: string;
  thumbnail: string;
};

export type MenuMapProps = {
  image: MenuMapImageProps;
  category: string;
  name: string;
  price: number;
};

function Menu() {
  const { data: menuData, isLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: fetchMenuData,
  });

  const dispatch = useDispatch();

  function handleAddToCart(menuData: MenuMapProps) {
    dispatch(addItem(menuData));
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <section>
      <h2 className={styles.h2}>Desserts</h2>

      <div className={styles.container}>
        {menuData.map((menuItem: MenuMapProps) => (
          <MenuItem
            menuData={menuItem}
            key={menuItem.name}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
