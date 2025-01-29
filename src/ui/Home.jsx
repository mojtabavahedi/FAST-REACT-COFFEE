import { formatNumber } from "../utils/helpers";
import { MdOutlineRoomService } from "react-icons/md";
import Button from "./Button";
import { CgCoffee } from "react-icons/cg";
import { FaStore } from "react-icons/fa6";
import { CiCoffeeCup } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";

import HomeMenu from "../features/homeMenu/HomeMenu";

function Home() {
  return (
    <div className="flex h-fit w-screen flex-col">
      <div className="relative flex h-fit bg-[#ffff] px-8 pt-10">
        <div className="flex flex-col">
          {" "}
          <h1 className="font-vaziri text-lg leading-snug tablet:text-xl desktop:text-2xl lgdesktop:text-4xl lgdesktop:leading-relaxed">
            کافی‌شاپ ما، جایی است که عشق به قهوه <br /> با هر قطره‌ی اسپرسو{" "}
            <br />
            ترکیب می‌شود
          </h1>
          <h4 className="py-4 font-vaziri text-xs tablet:text-sm desktop:text-base lgdesktop:mb-6 lgdesktop:py-9 lgdesktop:text-2xl">
            قهوه ها در انواع مختلفی وجود دارد که هر کدام با طعم و <br />
            ویژگی متمایز هستند
          </h4>{" "}
          <Button type={"go"}> همین الان سفارش بده</Button>{" "}
          <div className="mt-5 flex gap-2 lgdesktop:mt-14">
            <div>
              <h1 className="font-vaziri text-xl desktop:text-3xl lgdesktop:text-5xl">
                {formatNumber(50)} +
              </h1>
              <h4 className="font-vaziri text-xs text-gray-500 desktop:text-base lgdesktop:text-2xl">
                سفارش
              </h4>
            </div>
            <div className="h-8 w-[2px] rotate-180 bg-black desktop:h-12"></div>

            <div>
              <h1 className="font-vaziri text-xl desktop:text-3xl lgdesktop:text-5xl">
                {formatNumber(20)} +
              </h1>
              <h4 className="font-vaziri text-xs text-gray-500 desktop:text-base lgdesktop:text-2xl">
                اشتراک
              </h4>
            </div>
          </div>
        </div>
        <img
          className="absolute right-[200px] z-10 mt-[180px] h-[85px] w-[100px] ring ring-[#ecca8b] ring-offset-0 tablet:right-[370px] tablet:mt-[100px] tablet:h-[170px] tablet:w-[210px] desktop:right-[660px] desktop:mt-[20px] desktop:h-[350px] desktop:w-[390px] lgdesktop:right-[830px] lgdesktop:mt-[65px] lgdesktop:h-[530px] lgdesktop:w-[620px]"
          src="/images/Home/_ee315fa1-8497-492c-86b9-5c26edbb1891.jfif"
          alt="coffee"
        />
      </div>{" "}
      <div className="z-0 bg-[#230B00] pb-3 pt-3 text-[#ffff] desktop:pb-10 desktop:pt-11 lgdesktop:pb-16">
        <div className="mt-20 flex flex-col items-center pb-11">
          <h1 className="font-vaziri text-lg desktop:text-2xl lgdesktop:text-4xl">
            ویژگی های خاص ما که شما را خوشحال می کند
          </h1>
          <div className="mt-7 flex gap-8 px-[6px] text-xs max-ipadpro:flex-wrap max-tablet:grid max-tablet:grid-cols-mobilewidth max-tablet:grid-rows-[auto,auto,auto] tablet:justify-center desktop:text-sm lgdesktop:mt-11 lgdesktop:text-xl">
            <div className="flex h-44 w-56 flex-col gap-4 p-4 ring ring-[#ecca8b] ring-offset-0 max-tablet:place-self-start desktop:h-60 desktop:w-72 lgdesktop:h-72 lgdesktop:w-80">
              <FaStore className="text-xl desktop:text-3xl lgdesktop:text-6xl" />
              <h1 className="font-vaziri">موقعیت دنج</h1>
              <p className="text-xs desktop:text-base">
                {" "}
                گوشه دنج ما خوش آمدید، جایی که
                <br /> می‌توانید عطر غنی قهوه را استشمام کنید <br />و از لطافت
                مخملی قهوه مورد <br /> علاقه‌تان لذت ببرید
              </p>
            </div>
            <div className="flex h-44 w-56 flex-col gap-4 p-4 ring ring-[#ecca8b] ring-offset-0 max-tablet:row-start-2 max-tablet:row-end-3 max-tablet:place-self-center desktop:h-60 desktop:w-72 lgdesktop:h-72 lgdesktop:w-72">
              <CiCoffeeCup className="text-2xl desktop:text-3xl lgdesktop:text-6xl" />
              <h1 className="font-vaziri">کیفیت منحصر به فرد</h1>
              <p className="text-xs desktop:text-base">
                در سمفونی جذاب طعم‌ها غرق شوید، <br />
                هر جرعه از قهوه‌ای که با دقت تهیه و با مهارت برشته شده است،{" "}
                <br /> شما را به دنیایی دیگر می‌برد
              </p>
            </div>
            <div className="flex h-44 w-56 flex-col gap-4 p-4 ring ring-[#ecca8b] ring-offset-0 max-tablet:row-start-3 max-tablet:row-end-4 max-tablet:place-self-end desktop:h-60 desktop:w-72 lgdesktop:h-72 lgdesktop:w-72">
              <MdOutlineRoomService className="text-2xl desktop:text-3xl lgdesktop:text-6xl" />{" "}
              <h1 className="font-vaziri">بهترین خدمات</h1>
              <p className="text-xs desktop:text-base">
                تجربه اوج برتری خدمات قهوه، جایی <br />
                که هر فنجان با <br />
                عشق و دقت ساخته می‌شود.
                <br /> از این تجربه بی‌نظیر لذت ببرید
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-7 bg-[#ffff] py-6">
        <h1 className="font-vaziri text-2xl lgdesktop:text-3xl">
          محصولات پر فروش{" "}
        </h1>
        <HomeMenu />
      </div>
      <div className="flex  bg-[#230B00] text-[#ffff] max-ipadpro:flex-col max-ipadpro:px-5 ipadpro:justify-around">
        <div className="flex flex-col py-28 max-ipadpro:py-5">
          <h1 className="text-md font-vaziri leading-relaxed ipadpro:text-xl lgdesktop:text-4xl lgdesktop:leading-[60px]">
            آنچه مشتریان ما
            <br /> میگویند
          </h1>
          <p className="text-md lgdesktop:mt-4 lgdesktop:text-xl lgdesktop:leading-relaxed">
            نظراتی که دریافت می‌کنیم فقط کلمات ساده روی کاغذ یا صفحه نمایش
            نیستند،
            <br /> بلکه بازتابی از ارتباطات معناداری هستند <br />
            که با هر فردی که از درهای ما عبور می‌کند، برقرار می‌کنیم
          </p>
          <h5 className="mt-4 font-bold lgdesktop:text-2xl">-مجتبی واحدی-</h5>
        </div>
        <div className="relative flex py-6 max-ipadpro:justify-end max-ipadpro:px-5">
          <div className="absolute h-72 w-48 rotate-6 bg-[#230B00] ring-1 ring-[#ffff] lgdesktop:h-[389px] lgdesktop:w-64"></div>
          <div className="z-10 flex h-80 w-48 flex-col gap-3 bg-[#CE8F28] pr-4 pt-4 leading-normal text-[#ffff] lgdesktop:h-[430px] lgdesktop:w-64">
            <p className="rotate-180 text-left font-vaziri text-6xl lgdesktop:text-7xl">
              "
            </p>
            <p className="text-xs leading-relaxed lgdesktop:text-base lgdesktop:leading-[30px]">
              “من سال‌هاست که علاقه‌مند به قهوه هستم، اما باید بگویم که هرگز
              چیزی شبیه به قهوه‌ای که در این کافه سرو می‌شود، نچشیده‌ام. هر جرعه
              یک لذت حسی است و پیچیدگی طعم‌ها واقعاً بی‌نظیر است.”
            </p>
            <img
              src="/images/user/_baffe478-2885-40f4-9bb8-6d2da1746003.jfif"
              alt="user"
              className="mt-4 h-10 w-10 rounded-full"
            />
            <p className="text-sm font-bold">بهاره محمدی</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
