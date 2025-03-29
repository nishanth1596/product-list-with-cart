import CartOverviewItem from "../cartOverviewItem/CartOverviewItem";

type FullCartItem = {
  name: string;
  quantity: number;
  totalPrice: number;
  unitPrice: number;
};

type CartOverviewProps = {
  cartItems: FullCartItem[];
};

function CartOverview({ cartItems }: CartOverviewProps) {
  return (
    <div className="">
      {cartItems.map((cart) => (
        <CartOverviewItem
          name={cart.name}
          quantity={cart.quantity}
          totalPrice={cart.totalPrice}
          unitPrice={cart.unitPrice}
          key={cart.name}
        />
      ))}
    </div>
  );
}

export default CartOverview;
