import { formatCurrency, formatNumber } from "../../utils/helpers";

import { FaTrashAlt } from "react-icons/fa";
import Counter from "../counter/Counter";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCurrentQuantityById } from "./cartSlice";
function CartItem({ item }) {
  const { id, name, count, imageUrl, totalPrice } = item;
  const dispatch = useDispatch();
  return (
    <li className="relative flex items-center justify-between ipadmini:px-7 ipadpro:px-24">
      {" "}
      <div className="relative flex gap-5">
        <img
          alt={name}
          src={imageUrl}
          className="z-0 h-16 w-16 ipadmini:h-28 ipadmini:w-28"
        />
        <div className="absolute -right-[13%] top-[70%] z-10 ipadmini:-right-[14%] ipadmini:top-[85%]">
          <Counter currentQuantity={count} id={id} />
        </div>
        <h1 className="absolute -top-[6px] right-20 ipadmini:right-32">
          {name}
        </h1>
      </div>
      <div className="flex gap-3">
        <p className="text-sm">{formatNumber(totalPrice)} تومان </p>
        <Button type={"delete"} onClick={() => dispatch(deleteItem(id))}>
          <FaTrashAlt />
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
