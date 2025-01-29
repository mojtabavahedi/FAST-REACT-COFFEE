import { Link, useOutlet, useOutletContext } from "react-router-dom";
import Button from "../../ui/Button";
import Counter from "../counter/Counter";

import Alert from "../user/Alert";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getCurrentQuantityById,
  getTotalCartPrice,
} from "./cartSlice";
import CartItem from "./CartItem";
import { formatNumber } from "../../utils/helpers";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalCartPrice);
  const [alert, setAlert] = useOutletContext();

  return (
    <div className="relative flex flex-col items-center justify-center">
      {alert && <Alert setAlert={setAlert} />}
      <div
        className={
          alert
            ? "flex w-full flex-col items-center gap-5 blur-sm ipadmini:w-[70%] lgdesktop:w-[60%]"
            : "flex w-full flex-col items-center gap-5 ipadmini:w-[70%] lgdesktop:w-[60%]"
        }
      >
        <Link className="w-[97%]" to="/menu/hotcoffee">
          <Button type={"return"}> &larr; بازگشت به منو</Button>
        </Link>
        {cart.length > 0 ? (
          <div className="flex min-h-72 w-[97%] flex-col justify-between rounded-md bg-amber-100 p-2 py-[10%] shadow-xl ipadmini:py-[5%]">
            <h2 className="mb-[5%] font-vaziri ipadmini:pr-7 ipadpro:pr-24">
              سبد خرید شما
            </h2>
            <ul className="flex flex-col gap-10">
              {cart.map((x) => (
                <CartItem item={x} key={x.id} />
              ))}
            </ul>
            <div className="mt-[5%] flex justify-end ipadmini:pl-7 ipadpro:pl-24">
              <p className="font-vaziri">
                جمع کل : {formatNumber(totalPrice)} تومان
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-5 flex h-96 items-center justify-center px-4 py-8">
            {" "}
            <p className="font-vaziri lgdesktop:text-3xl">
              سبد خرید شما خالی است
            </p>
          </div>
        )}
        {cart.length > 0 ? (
          <div className="mb-7 flex gap-8">
            <Link to="/order/new">
              {" "}
              <Button type={"continue"}> ادامه </Button>
            </Link>
            <span onClick={() => setAlert((value) => !value)}>
              <Button type={"deletebasket"}>حذف سبد</Button>
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
