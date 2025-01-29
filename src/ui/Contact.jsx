import { useLoaderData, useOutletContext } from "react-router-dom";
import Alert from "../features/user/Alert";
import { SlLocationPin } from "react-icons/sl";
import { TbPhoneCall } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import ContactForm from "../features/contactform/ContactForm";
import Button from "./Button";
import { getBranches } from "../services/apiRestaurant";
function Contact() {
  const [alert, setAlert] = useOutletContext();
  const branches = useLoaderData();
  return (
    <div className="relative flex justify-center">
      {alert && <Alert setAlert={setAlert} />}
      <div
        className={`relative flex flex-col items-center ${alert ? "blur-sm" : ""}`}
      >
        <img
          alt="coffee"
          src="/images/contact-us/ZjTmBUMTzAJOChRh_coffeeimage6.avif"
          className="h-64 tablet:w-full desktop:h-96"
        />
        <h1 className="absolute h-[200px] w-full content-center text-center font-vaziri text-3xl text-white">
          تماس با گروه قهوه سالامون
        </h1>
        <div className="relative -top-[70px] flex w-11/12 flex-col items-center gap-9 rounded-xl bg-[#ffff] p-4 shadow-2xl ipadpro:flex-row ipadpro:gap-5">
          <div className="flex w-10/12 flex-col rounded-xl p-2 shadow-md ring-black ipadpro:relative ipadpro:min-h-[570px] ipadpro:w-[55%]">
            <div className="flex">
              <SlLocationPin className="mt-[3%] text-7xl tablet:mt-[5%]" />
              <div className="mt-[5%] flex flex-col gap-5 leading-8">
                <p>
                  <strong>فروشگاه شعبه بهار شمالی:</strong>خ بهار شمالی پ 342
                </p>
                <p>
                  <strong>فروشگاه شعبه انقلاب جنوبی:</strong>خ انقلاب جنوبی پ
                  342
                </p>
                <p>
                  <strong>فروشگاه شعبه اقدسیه :</strong>خ اقدسیه 12 پ 342
                </p>
              </div>
            </div>
            <div className="mt-[5%] flex flex-col gap-4 ipadpro:flex-row ipadpro:justify-between">
              <div className="flex flex-col gap-5">
                <TbPhoneCall className="self-center text-6xl" />
                <p className="text-center font-vaziri">
                  تلفن تماس:
                  <a href="sdsd" className="text-red-600">
                    021-5555
                  </a>
                </p>
              </div>
              <div className="mb-[10%] flex flex-col gap-5">
                <TfiEmail className="self-center text-6xl" />
                <p className="text-center">
                  <strong>ایمیل:</strong>
                  info@salam.coffee
                </p>
              </div>
            </div>
          </div>
          <ContactForm setAlert={setAlert} />
        </div>
        <div className="mt-[4%] w-11/12">
          <h1 className="mb-[4%] text-center font-vaziri text-xl">
            دسترسی به شعب قهوه سالامون
          </h1>
          <div className="flex flex-col ipadpro:flex-row ipadpro:gap-4">
            {branches.map((branch) => (
              <div className="mb-10 flex flex-col items-center gap-2">
                <img src={branch.image} alt={branch.name} />
                <Button type={"branch"}>{branch.name}</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export async function loader() {
  const branches = await getBranches();
  return branches;
}
export default Contact;
