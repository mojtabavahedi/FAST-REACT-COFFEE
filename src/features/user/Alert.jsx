import { Link, useLocation, useParams } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { clearCart } from "../cart/cartSlice";

function Alert({ setAlert }) {
  const { pathname } = useLocation();
  const { id } = useParams();
  const style = {
    signup:
      "absolute z-30 flex h-[25%] w-[80%] rounded-md   flex-col items-center justify-around gap-6 place-self-center bg-orange-300 ",
    comment:
      "z-30 flex h-[25%] w-[80%] flex-col rounded-md  items-center justify-around gap-6 place-self-center bg-orange-300 fixed top-[30%] ",
  };
  const dispatch = useDispatch();
  return (
    <div
      className={
        pathname === `/blog/${id}` ||
        pathname === `/contact` ||
        pathname === "/cart"
          ? style.comment
          : style.signup
      }
    >
      <p className="mt-0 h-5">
        {pathname === `/blog/${id}` || pathname === "/contact"
          ? "دیدگاه شما ثبت گردید"
          : pathname === `/signup`
            ? "ثبت نام شما با موفقیت انجام شد "
            : "آیا از حذف سبد خرید اطمینان دارید"}{" "}
      </p>
      <div>
        <Link
          onClick={() => setAlert((value) => !value)}
          to={pathname === "/signup" ? "/login" : ""}
          className="self-center"
        >
          <Button type="backtologin">
            {" "}
            {pathname === `/blog/${id}` || pathname === "/contact"
              ? "بستن"
              : pathname === "/signup"
                ? "رفتن به صفحه ورود "
                : "انصراف"}{" "}
          </Button>
        </Link>{" "}
        {pathname === "/cart" ? (
          <Link to={""} onClick={() => setAlert((value) => !value)}>
            {" "}
            <Button
              type={"deletebasketalert"}
              onClick={() => dispatch(clearCart())}
            >
              حذف سبد
            </Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Alert;
