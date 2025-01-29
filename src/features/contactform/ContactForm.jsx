import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { json, Link } from "react-router-dom";

import Button from "../../ui/Button";
import { saveCommentContact } from "../../services/apiRestaurant";

const schema = yup.object({
  message: yup.string().required("نظر خود را وارد نمایید"),
  name: yup
    .string()
    .required("نام خود را وارد نمایید")
    .matches(/^[\u0600-\u06FF\s]+$/, "نام فقط باید شامل حروف فارسی باشد")
    .min(3, "طول نام وارد شده باید حداقل 3 کارکتر باشد"),
  subject: yup.string().required("موضوع خود را وارد نمایید"),
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
function ContactForm({ setAlert }) {
  const form = useForm({
    defaultValues: { message: "", name: "", email: "", subject: "" },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { register, formState, handleSubmit } = form;
  const { errors, isDirty, isSubmitting } = formState;
  function onSubmit(data) {
    if (action(JSON.stringify(data))) setAlert(value => !value);
  }

  return (
    <div className="w-10/12 flex-col items-center justify-center rounded-xl py-[3%] shadow-md ipadpro:min-h-[570px] ipadpro:w-[45%]">
      <div className="flex items-center justify-center">
        <div className="mx-2 w-3/12 border-t-2 border-black"></div>
        <span className="w-6/12 text-center font-vaziri">فرم تماس با ما </span>
        <div className="mx-2 w-3/12 border-t-2 border-black"></div>
      </div>
      <form
        className="flex flex-col gap-4 bg-[#ffff] p-3 pb-10 pt-8 ipadpro:mt-0"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        {" "}
        <input
          className="h-[46px] pr-2 ring-1 ring-slate-700"
          type="text"
          id="name"
          {...register("name")}
          placeholder="نام کاربری"
        />
        <p>{errors.name?.message}</p>
        <input
          className="h-[46px] pr-2 ring-1 ring-slate-700 focus:outline-none"
          id="email"
          {...register("email")}
          placeholder="ایمیل"
        />{" "}
        <p>{errors.email?.message}</p>
        <input
          className="h-[46px] pr-2 ring-1 ring-slate-700"
          type="text"
          id="subject"
          {...register("subject")}
          placeholder="موضوع"
        />
        <p>{errors.subject?.message}</p>{" "}
        <input
          className="h-[100px] pr-2 ring-1 ring-slate-700"
          type="text"
          id="message"
          {...register("message")}
          placeholder=" متن پیام "
        />
        <p>{errors.message?.message}</p>
        <Button type={"enter"} disabled={!isDirty || isSubmitting}>
          ثبت دیدگاه
        </Button>
      </form>
    </div>
  );
}
export async function action(entryData) {
  const data = JSON.parse(entryData);
  console.log(data);
  const newComment = await saveCommentContact(data);
}
export default ContactForm;
