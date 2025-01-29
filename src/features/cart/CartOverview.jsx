import { Link } from "react-router-dom";

import { FaShoppingBasket } from "react-icons/fa";
import { formatNumber } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview({ openMenu, alert }) {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrie = useSelector(getTotalCartPrice);

  return (
    <div
      className={`flex items-center justify-between bg-amber-100 px-4 text-gray-700 drop-shadow-[0_15px_15px_rgba(0,0,0,.3)] ${openMenu || alert ? "blur-sm" : ""}`}
    >
      {" "}
      <p className="font-vaziri text-black lgdesktop:text-2xl">
        <span> {formatNumber(totalCartQuantity)} عدد قهوه </span>
        <span> {formatNumber(totalCartPrie)} تومان </span>
      </p>
      <Link
        className={`transition-colors duration-300 ${alert ? "" : "hover:text-yellow-300"}`}
        to={alert ? "//" : "/cart"}
      >
        <FaShoppingBasket className="text-2xl lgdesktop:text-4xl" />
      </Link>
    </div>
  );
}

export default CartOverview;
