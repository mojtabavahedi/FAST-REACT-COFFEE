import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "../cart/cartSlice";

function Counter({ id, currentQuantity }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <div
      className={
        pathname === "/cart"
          ? "w-20 rounded-md border bg-[#ffff] ipadmini:w-36"
          : "w-44 rounded-md border bg-[#ffff]"
      }
    >
      <button
        onClick={() => dispatch(increaseItemQuantity(id))}
        className={
          pathname === "/cart"
            ? "w-[22px] border-l ipadmini:w-[31px]"
            : "w-[22px] border-l"
        }
      >
        +
      </button>
      <input
        value={currentQuantity}
        className={
          pathname === "/cart"
            ? "w-[34px] appearance-none text-center focus:outline-none ipadmini:w-[80px] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            : "w-[130px] appearance-none text-center focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        }
        type="number"
      />
      <button
        onClick={() => dispatch(decreaseItemQuantity(id))}
        className={
          pathname === "/cart"
            ? "w-[22px] border-r ipadmini:w-[31px]"
            : "w-[22px] border-r"
        }
      >
        -
      </button>
    </div>
  );
}

export default Counter;
