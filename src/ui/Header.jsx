import { Link, useLocation } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

function Header({ openMenu, setOpenMenu, alert }) {
  const { pathname } = useLocation();

  const menuRef = useRef(null);

  const handleHamburgerMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
  };
  const moveHam = openMenu ? "1024px" : "0px";
  useEffect(() => {
    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  const navLinks = [
    { to: "/", label: "خانه" },
    { to: "/login", label: "ورود / پروفایل" },
    { to: "/menu/hotcoffee", label: "لیست نوشیدنی ها" },
    { to: "/blog", label: "بلاگ خبری" },
    { to: "/about-us", label: "در باره ما" },
  ];

  const renderNavLinks = (onClick) =>
    navLinks.map(({ to, label }) => (
      <Link
        key={to}
        className={`transition-colors duration-300 ${alert ? "" : "hover:text-yellow-300"} ${
          pathname === to ? "text-yellow-300" : ""
        }`}
        to={to}
        onClick={alert ? (e) => e.preventDefault() : onClick}
      >
        {label}
      </Link>
    ));

  return (
    <>
      <header
        className={`z-20 hidden items-center justify-between gap-7 bg-amber-100 px-5 py-5 text-sm text-gray-700 drop-shadow-[0_-15px_15px_rgba(0,0,0,.3)] ipadpro:flex lgdesktop:gap-10 lgdesktop:text-2xl ${alert ? "blur-sm" : ""}`}
      >
        <nav className="flex gap-4">{renderNavLinks()}</nav>
        <div className="flex gap-6">
          {pathname !== "/signup/successful" &&
            pathname !== "/login" &&
            pathname !== "/signup" && <SearchOrder />}
          <Link
            className="transition-colors duration-300 hover:text-yellow-300"
            to="/"
          >
            سالامون
          </Link>
        </div>
      </header>
      <header
        className={`z-20 bg-amber-100 text-gray-700 drop-shadow-[0_-15px_15px_rgba(0,0,0,.3)] ipadpro:hidden ${alert ? "blur-sm" : ""} `}
      >
        <nav
          ref={menuRef}
          className={`absolute right-[-1024px] z-20 flex h-screen w-1/2 flex-col items-center justify-start gap-5 bg-amber-100 py-8 transition-all duration-500 tablet:text-lg ${openMenu ? "-translate-x-[1024px]" : "-translate-x-0"} `}
        >
          {renderNavLinks(handleHamburgerMenu)}
          <IoMdClose
            className="absolute left-4 top-4 transition-colors duration-300 hover:text-yellow-300"
            onClick={handleHamburgerMenu}
          />
        </nav>

        <div className={`flex items-center justify-between gap-3 px-3 py-3`}>
          <RxHamburgerMenu
            className={`hamburger transition-colors duration-300 ${alert ? "" : "hover:text-yellow-300"}`}
            onClick={alert ? (e) => e.preventDefault() : handleHamburgerMenu}
          />

          <div
            className={`flex items-center gap-4 ${openMenu ? "blur-sm" : ""}`}
          >
            {pathname !== "/signup/successful" &&
              pathname !== "/login" &&
              pathname !== "/signup" && <SearchOrder />}
            <Link
              className="transition-colors duration-300 hover:text-yellow-300"
              to="/"
            >
              سالامون
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
