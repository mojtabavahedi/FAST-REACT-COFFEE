import { createOrder } from "../../services/apiRestaurant";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputePhoneNumber from "../number/InputePhoneNumber";
import Button from "../../ui/Button";
import { useEffect, useRef, useState } from "react";
import sleep from "sleep-promise";
import { MdOutlineCheck } from "react-icons/md";
import {
  json,
  Navigate,
  redirect,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { formatNumber } from "../../utils/helpers";
import store from "../../store";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress } from "../user/userSlice";

const schema = yup.object({
  name: yup
    .string()
    .required("نام گیرنده را وارد نمایید")
    .matches(/^[\u0600-\u06FF\s]+$/, "نام فقط باید شامل حروف فارسی باشد")
    .min(3, "طول نام وارد شده باید حداقل 3 کارکتر باشد"),
  address: yup
    .string()
    .required(" آدرس گیرنده را وارد نمایید")
    .matches(
      /^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F0-9\u0660-\u0669\s]+$/,
      "آدرس فقط باید شامل حروف فارسی باشد",
    )
    .min(3, "طول آدرس وارد شده باید حداقل 3 کارکتر باشد"),
  number: yup
    .string()
    .required("شماره موبایل گیرنده را وارد نمایید")
    .matches(/^(\+98|0)?9\d{9}$/, "شماره موبایل وارد شده اشتباه هست"),
});
function CreateOrder() {
  const {
    username,
    status: addressStatus,
    position,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const form = useForm({
    defaultValues: {
      name: "",
      number: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isDirty, isSubmitting } = formState;
  const [code, setCode] = useState("98");
  const [showCode, setShowCode] = useState(false);
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalCartPrice);

  const isLoadingAddress = addressStatus === "loading";
  const dispatch = useDispatch();
  function onSubmit(data) {
    data.number = `+(${code})${data.number}`;
    data.position = JSON.stringify(position);
    action(JSON.stringify(data), navigate);
  }

  function handleShowCode() {
    setShowCode((value) => !value);
  }

  // async function a() {
  // const res = await fetch("http://localhost:8000/user");
  //const data = await res.json();
  // const y = data.map((x) =>
  //  x.email === document.getElementById("email").value ? true : false
  //  );
  ////   console.log(y);
  // }
  return (
    <>
      <div className={`flex flex-col items-center justify-center p-7`}>
        <form
          className="flex w-11/12 flex-col gap-2 rounded-md bg-amber-100 p-3 pb-10 pt-8 ipadpro:mt-0 ipadpro:w-[380px]"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h1 className="font-vaziri">فرم تکمیل سفارش</h1>
          <input
            className="h-[46px] pr-2 ring-1 ring-slate-700"
            type="text"
            id="name"
            defaultValue={username}
            {...register("name")}
            placeholder="نام گیرنده"
          />
          <p>{errors.name?.message}</p>
          <div className="relative flex h-[46px] w-full flex-row-reverse">
            <InputePhoneNumber
              showCode={showCode}
              setCode={setCode}
              setShowCode={setShowCode}
            />
            <input
              className="w-1/6 text-center ring-1 ring-slate-700 [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={`${code} +`}
              onClick={handleShowCode}
            />
            <input
              type="number"
              id="number"
              {...register("number")}
              className="h-[46px] w-5/6 pl-2 text-end ring-1 ring-slate-700 [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              placeholder="شماره موبایل"
            />
          </div>
          <p>{errors.number?.message}</p>
          <textarea
            className="h-40 pr-2 ring-1 ring-slate-700"
            type="email"
            id="email"
            disabled={isLoadingAddress}
            {...register("address")}
            placeholder="آدرس گیرنده"
          ></textarea>{" "}
          <Button
            type={"enter"}
            disabled={isLoadingAddress}
            onClick={(e) => {
              e.preventDefault();
              dispatch(fetchAddress());
            }}
          >
            اعمال مختصات موقعیت مکانی
          </Button>
          <p>{errors.address?.message || errorAddress}</p>
          <div className="flex gap-2">
            <label htmlFor="remember" className="relative cursor-pointer">
              <input
                id="remember"
                className="custom-checkbox"
                type="checkbox"
                {...register("delivery")}
              />
              <MdOutlineCheck className="tick text-md absolute right-[-.5px] top-[3px] opacity-0" />
            </label>
            <span className="flex h-[20px] items-center font-vaziri text-xs text-slate-700">
              ارسال با پیک اکسپرس (مبلغ : {formatNumber(15000)}تومان ){" "}
            </span>
          </div>{" "}
          <input type="hidden" name="position" {...register("position")} />
          <input
            type="hidden"
            name="cart"
            value={JSON.stringify(cart)}
            {...register("cart")}
          />
          <input
            type="hidden"
            name="totalProductPrice"
            value={JSON.stringify(totalPrice)}
            {...register("totalProductPrice")}
          />
          <Button type={"enter"} disabled={!isDirty || isSubmitting}>
            تکمیل سفارش
          </Button>
        </form>{" "}
      </div>
    </>
  );
}
export async function action(entryData, navigate) {
  const data = JSON.parse(entryData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    estimatedDelivery: new Date().setMinutes(
      new Date().getMinutes() + Math.random() * 100,
    ),
    deliveryPrice: 15000,
    totalProductPrice: Number(data.totalProductPrice),
    position: JSON.parse(data.position),
  };
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return navigate(`/order/${newOrder.id}`);
}

export default CreateOrder;
