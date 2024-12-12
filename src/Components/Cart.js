import { useDispatch, useSelector } from "react-redux";
import MenuItemCard from "./MenuItemCard";
import { clearCart } from "../utils/Store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log({ cartItems });

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    // console.log("Cart cleared");
  };

  return (
    <div className="flex flex-col w-[60%] justify-self-center">
      <h1 className="text-center m-7 font-bold text-xl">Cart</h1>
      {cartItems.length > 0 ? <button onClick={handleClearCart}>Clear</button> : ""}
      
      <div className="border border-black">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <MenuItemCard key={item?.card?.card?.info?.id} card={item?.card} />
          ))
        ) : (
          <p className="text-center p-4">Your cart is empty.</p> 
        )}
      </div>
    </div>
  );
};

export default Cart;
