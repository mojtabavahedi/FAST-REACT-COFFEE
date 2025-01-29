// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { formatDate, formatNumber } from "../../utils/helpers";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    estimatedDelivery,
    deliveryPrice,
    totalProductPrice,
    address,
    delivery,
  } = order;

  return (
    <div className="flex justify-center">
      <div className="my-8 w-[95%] rounded-md bg-slate-800 px-3 py-5 text-[#ffff] ipadmini:w-[50%]">
        <h2 className="mb-4 font-vaziri">مشخصات سفارش</h2>
        <ul className="divide-y-[2px] ring-1 ring-[#ffff]">
          <li className="p-2">
            <span className="font-vaziri">آدرس : </span>
            <span>{address}</span>
          </li>
          <li className="p-2">
            {estimatedDelivery > new Date() ? (
              <>
                <span className="font-vaziri">وضعیت سفارش : </span>
                <span>در حال آماده سازی است</span>
              </>
            ) : (
              <>
                <span className="font-vaziri">وضعیت سفارش : </span>
                <span> تحویل داده شده است </span>
              </>
            )}
          </li>
          <li className="p-2">
            <span className="font-vaziri"> زمان تحویل : </span>
            <span>{formatDate(estimatedDelivery)}</span>
          </li>
          <li className="p-2">
            {" "}
            <span className="font-vaziri"> جمع کل محصولات : </span>
            <span>{formatNumber(totalProductPrice)} تومان </span>
          </li>{" "}
          <li className="p-2">
            {" "}
            <span className="font-vaziri"> هزینه ارسال : </span>
            <span>
              {delivery ? formatNumber(deliveryPrice) : formatNumber(0)} تومان{" "}
            </span>
          </li>
          <li className="p-2">
            {" "}
            <span className="font-vaziri"> مبلغ کل : </span>
            <span>
              {formatNumber(totalProductPrice + (delivery ? deliveryPrice : 0))}{" "}
              تومان{" "}
            </span>
          </li>
        </ul>
      </div>{" "}
    </div>
  );
}
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  console.log(order);

  return order;
}
export default Order;
