import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div>
      <Link to="/menu">&larr; بازگشت به لیست محصولات</Link>

      <p>سبد خرید شما هنوز خالیه لطفا محصولی را انتخاب کنید :)</p>
    </div>
  );
}

export default EmptyCart;
