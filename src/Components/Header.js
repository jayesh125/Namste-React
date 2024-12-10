import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="sticky top-0 z-50 flex justify-between bg-gray-200 drop-shadow-xl">
      <div className="w-[120px] ml-24">
        <img
          className="mix-blend-normal h-[70px] p-2"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="mr-5">
        <ul className="flex items-center">
          <li className="p-2 m-2 text-xl font-bold text-black">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="p-2 m-2 text-xl font-bold text-black">
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
          </li>
          <li className="p-2 m-2 text-xl font-bold text-black">Menu</li>
          <li className="p-2 m-2 text-xl font-bold text-black">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button className="text-white font-bold m-2 w-16 h-10 rounded-tr-lg rounded-bl-lg bg-gradient-to-r from-blue-500 to-violet-800 hover:from-teal-400 hover:to-blue-500">
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
