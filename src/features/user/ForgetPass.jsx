import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

import Button from "../../ui/Button";

const schema = yup.object({
  email: yup
    .string()
    .email(
      "ایمیل خودرا به درستی  وارد نمایید",
      /^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\. [A-Z]{2,}$/i,
    )
    .required("ایمیل خودرا وارد نمایید")
    .test("notexist", "با این ایمیل قبلا ثبت نام نشده است", async () => {
      const res = await fetch("http://localhost:8000/user");
      const data = await res.json();
      if (
        data.some((x) => x.email === document.getElementById("email").value)
      ) {
        return true;
      } else {
        return false;
      }
    }),
});
function ForgetPass() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { register, formState } = form;
  const { errors, isDirty, isSubmitting } = formState;

  return (
    <div className="mt-[5%] flex w-full flex-col items-center ipadpro:w-1/2">
      <form
        className="flex w-11/12 flex-col gap-2 bg-[#ffff] p-3 pb-10 pt-8 ipadpro:mt-0 ipadpro:w-[380px]"
        noValidate
      >
        <input
          className="h-[46px] pr-2 ring-1 ring-slate-700 focus:outline-none"
          id="email"
          {...register("email")}
          placeholder="ایمیل"
        />{" "}
        <p>{errors.email?.message}</p>
        <Link to={"//"}>
          <Button type={"enter"} disabled={!isDirty || isSubmitting}>
            بازنشانی رمز عبور
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default ForgetPass;
