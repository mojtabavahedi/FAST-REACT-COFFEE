import { Link, useLocation } from "react-router-dom";

function Footer({ alert }) {
  const { pathname } = useLocation();
  return (
    <footer
      className={`flex flex-wrap gap-5 bg-[#333333] px-3 pb-9 text-[#ffff] max-ipadpro:h-96 max-ipadpro:flex-col max-ipadpro:content-center tablet:content-center tablet:gap-x-20 ipadpro:justify-around ipadpro:gap-5 ipadpro:px-0 ${alert ? "blur-sm" : ""} `}
    >
      <h1 className="mt-2 font-vaziri text-2xl lgdesktop:text-4xl">سالامون</h1>
      <div className="mt-2 flex w-[88px] flex-col gap-1 text-xs lgdesktop:text-xl">
        <h3 className="font-vaziri text-xs lgdesktop:text-xl">لینک سریع</h3>
        <Link className="hover:text-yellow-800" to="/">
          خانه
        </Link>
        <Link className="hover:text-yellow-800" to="/menu">
          لیست نوشیدنی
        </Link>
        <Link className="hover:text-yellow-800" to="/blog">
          بلاگ خبری
        </Link>
      </div>
      <div className="mt-2 flex flex-col gap-1 text-xs lgdesktop:text-xl">
        <h3 className="font-vaziri text-xs lgdesktop:text-xl"> حساب کاربری</h3>
        <Link className="hover:text-yellow-800" to="/login">
          پنل کاربری
        </Link>
        <Link className="hover:text-yellow-800" to="/menu">
          راهنمای خرید
        </Link>
        <Link className="hover:text-yellow-800" to="/blog">
          {" "}
          پیگیری سفارش
        </Link>
      </div>
      <div className="mt-2 flex flex-col gap-1 text-xs lgdesktop:text-xl">
        <h3 className="font-vaziri text-xs lgdesktop:text-xl"> تماس با ما</h3>
        <p className="hover:text-yellow-800">واتساپ : 09356962841 </p>
        <p className="hover:text-yellow-800">شماره تلفن ثابت :12345678901</p>
      </div>
      <div className="mt-2 flex w-[79.66px] flex-col gap-1 text-xs lgdesktop:text-xl">
        <h3 className="font-vaziri text-xs lgdesktop:text-xl"> آدرس شعب</h3>
        <p className="hover:text-yellow-800">
          شعبه بهار شمالی:
          <br />خ بهار شمالی پ 342{" "}
        </p>
        <p className="hover:text-yellow-800">
          {" "}
          شعبه انقلاب جنوبی:
          <br />خ انقلاب جنوبی پ 342
        </p>
        <p className="hover:text-yellow-800">
          {" "}
          شعبه اقدسیه :
          <br />خ اقدسیه 12 پ 342
        </p>
      </div>{" "}
      <div className="mt-2 flex flex-col gap-1">
        <h3 className="font-vaziri text-xs lgdesktop:text-xl">
          نماد اعتماد الکترونیکی
        </h3>
        <img
          src="/images/footer/download.png"
          alt="inamd"
          className="h-20 w-24 lgdesktop:h-44 lgdesktop:w-32"
        />
      </div>{" "}
    </footer>
  );
}

export default Footer;
