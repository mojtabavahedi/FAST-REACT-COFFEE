import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { json, Link } from "react-router-dom";

import Button from "../../ui/Button";
import { saveCommentBlog } from "../../services/apiRestaurant";

const schema = yup.object({
  comment: yup.string().required("نظر خود را وارد نمایید"),
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
function CommentForm({ setAlert }) {
  const form = useForm({
    defaultValues: { comment: "", name: "", email: "" },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { register, formState, handleSubmit } = form;
  const { errors, isDirty, isSubmitting } = formState;
  function onSubmit(data) {
    if (action(JSON.stringify(data))) setAlert(value=>!value);
  }

  return (
    <div className="mt-[5%] flex w-full flex-col items-center ring-1 ring-black ">
      <form
        className="flex w-11/12 flex-col gap-4 bg-[#ffff] p-3 pb-10 pt-8 ipadpro:mt-0 "
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="h-[100px] pr-2 ring-1 ring-slate-700"
          type="text"
          id="comment"
          {...register("comment")}
          placeholder=" دیدگاه خود را  بگویید"
        />
        <p>{errors.comment?.message}</p>
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
  const newComment = await saveCommentBlog(data);
}
export default CommentForm;
