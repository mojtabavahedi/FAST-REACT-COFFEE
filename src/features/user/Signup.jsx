import { signup } from "../../services/apiRestaurant";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputePhoneNumber from "../number/InputePhoneNumber";
import Button from "../../ui/Button";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const schema = yup.object({
  name: yup
    .string()
    .required("نام خود را وارد نمایید")
    .matches(/^[\u0600-\u06FF\s]+$/, "نام فقط باید شامل حروف فارسی باشد")
    .min(3, "طول نام وارد شده باید حداقل 3 کارکتر باشد"),
  email: yup
    .string()
    .email(
      "ایمیل خودرا به درستی  وارد نمایید",
      /^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\. [A-Z]{2,}$/i,
    )
    .required("ایمیل خودرا وارد نمایید")
    .test("exist", "با این ایمیل قبلا ثبت نام شده است", async () => {
      const res = await fetch("http://localhost:8000/user");
      const data = await res.json();
      if (
        data.some((x) => x.email === document.getElementById("email").value)
      ) {
        return false;
      } else {
        return true;
      }
    }),
  number: yup
    .string()
    .required("شماره موبایل خود را وارد نمایید")
    .matches(/^\+?[0-9][0-9]{7,14}$/, "شماره موبایل وارد شده اشتباه هست"),
  password: yup
    .string()
    .required("رمز عبور خود را وارد نمایید")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "باید شامل 8 کارکتر، یک حرف بزرگ، یک حرف کوچک، یک عدد و یک کارکتر خاص باشد",
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز عبور یکسان نیست"),
});
function Signup() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isDirty, isSubmitting } = formState;
  const [code, setCode] = useState("98");
  const [showCode, setShowCode] = useState(false);
  const setAlert = useOutletContext();
  function onSubmit(data) {
    data.number = `+(${code})${data.number}`;
    if (action(JSON.stringify(data))) setAlert((value) => !value);
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
      <div
        className={`flex flex-col items-center justify-center ipadpro:w-1/2`}
      >
        <form
          className="flex w-11/12 flex-col gap-2 bg-[#ffff] p-3 pb-10 pt-8 ipadpro:mt-0 ipadpro:w-[380px]"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <input
            className="h-[46px] pr-2 ring-1 ring-slate-700"
            type="text"
            id="name"
            {...register("name")}
            placeholder="نام کاربری"
          />
          <p>{errors.name?.message}</p>
          <input
            className="h-[46px] pr-2 ring-1 ring-slate-700"
            type="email"
            id="email"
            {...register("email")}
            placeholder="آدرس ایمیل"
          />{" "}
          <p>{errors.email?.message}</p>
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
          <input
            className="h-[46px] pr-2 ring-1 ring-slate-700"
            type="password"
            id="password"
            {...register("password")}
            placeholder="رمز عبور خود را وارد کنید"
          />{" "}
          <p>{errors.password?.message}</p>
          <input
            className="h-[46px] pr-2 ring-1 ring-slate-700"
            type="password"
            id="confirmpassword"
            {...register("confirmPassword")}
            placeholder="رمز عبور خود را مجددا وارد کنید"
          />{" "}
          <p>{errors.confirmPassword?.message}</p>
          <Button type={"enter"} disabled={!isDirty || isSubmitting}>
            ثبت نام
          </Button>
        </form>{" "}
      </div>
    </>
  );
}
export async function action(entryData) {
  const data = JSON.parse(entryData);
  const newUser = await signup(data);
}

export default Signup;
