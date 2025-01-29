import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { Form, Link, useNavigate } from "react-router-dom";
import { getUser } from "../../services/apiRestaurant";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdOutlineCheck } from "react-icons/md";
import * as yup from "yup";
import Button from "../../ui/Button";
const schema = yup.object({
  email: yup
    .string()
    .email(
      "ایمیل خودرا به درستی  وارد نمایید",
      /^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\. [A-Z]{2,}$/i,
    )
    .required("ایمیل خودرا وارد نمایید"),
  password: yup.string().required("رمز عبور خود را وارد نمایید"),
  successfulLogin: yup
    .string()
    .test("successfulLogin", "ایمیل یا رمز عبور صحیح نیست", async () => {
      const dataUser = await getUser();
      if (
        dataUser.some(
          (x) =>
            x.email === document.getElementById("email").value &&
            x.password === document.getElementById("password").value,
        )
      ) {
        return true;
      } else {
        return false;
      }
    }),
});
function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      successfulLogin: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  function handleSignUp(e) {
    e.preventDefault();
    navigate("/signup");
  }
  async function onSubmit(data) {
    // action(JSON.stringify(data));const res = await getUser();
    const dataUser = await getUser();
    if (
      dataUser.some(
        (x) => x.email === data.email && x.password === data.password,
      )
    ) {
      navigate("/");
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-center ipadpro:w-1/2">
      <form
        className="flex w-11/12 flex-col gap-2 bg-[#ffff] p-3 pb-10 pt-8 ipadpro:mt-0 ipadpro:w-[380px]"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <input
          className="h-[46px] pr-2 ring-1 ring-slate-700"
          type="email"
          id="email"
          {...register("email")}
          placeholder="ایمیل"
        />
        <p className="text-xs">{errors.email?.message}</p>
        <input
          className="h-[46px] pr-2 ring-1 ring-slate-700"
          type="password"
          id="password"
          {...register("password")}
          placeholder="رمزعبور  "
        />{" "}
        <p className="text-xs">
          {errors.password?.message || errors.successfulLogin?.message}
        </p>
        <div className="flex gap-2">
          <label htmlFor="remember" className="relative cursor-pointer">
            <input
              id="remember"
              className="h-[14px] w-[14px] appearance-none self-start ring-[0.5px] ring-black checked:ring-[1.5px]"
              type="checkbox"
            />
            <MdOutlineCheck className="tick text-md absolute right-[-.5px] top-[3px] opacity-0" />
          </label>
          <span className="flex h-[20px] items-center text-xs text-slate-700">
            مرا به یاد داشته باش{" "}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <Button type={"enter"}>ورود</Button>
          <Link
            to="/forgetpassword"
            className="cursor-pointer text-center text-xs text-slate-700"
          >
            رمز عبور را فراموش کرده اید؟
          </Link>
        </div>{" "}
        <div className="mt-6 flex flex-col gap-4">
          <span className="text-xs">آیا حساب کاربری ندارید؟</span>
          <Link to="/signup">
            <Button type={"signup"}>ثبت نام</Button>
          </Link>
        </div>
    
      </form>{" "}
    </div>
  );
}

export default Login;
