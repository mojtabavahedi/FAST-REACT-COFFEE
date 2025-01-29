import { Link, useLocation } from "react-router-dom";

function NavMenu({ setFilterProduct }) {
  const { pathname } = useLocation();
  const navLinks = [
    { to: "/menu/hotcoffee", label: "قهوه گرم" },
    { to: "/menu/coldcoffee", label: "قهوه سرد" },
    { to: "/menu/tea", label: "چای" },
  ];
  const renderNavLinks = (onClick) =>
    navLinks.map(({ to, label }) => (
      <Link
        key={to}
        className={`p-1 transition-colors duration-300 hover:text-yellow-300 ${
          pathname === to ? "border-b-2 border-yellow-300 text-yellow-300" : ""
        }`}
        to={to}
        onClick={onClick}
      >
        {label}
      </Link>
    ));

  return (
    <div className="ml-7 mr-9 flex flex-col">
      <div className={`mt-4 flex justify-center gap-4 lgdesktop:text-2xl font-vaziri`}>
        {renderNavLinks()}
      </div>
      <div className="mt-6 flex justify-center lgdesktop:text-xl gap-4 border-b border-t py-4 font-vaziri text-xs">
        <button
          onClick={() => setFilterProduct("lowprice")}
          className="rounded-md bg-amber-100 p-1 transition-all duration-300 hover:bg-[#3B1606] hover:text-[#ffff] focus:bg-[#3B1606] focus:text-[#ffff]"
        >
          کمترین قیمت
        </button>
        <button
          onClick={() => setFilterProduct("highprice")}
          className="rounded-md bg-amber-100 p-1 transition-all duration-300 hover:bg-[#3B1606] hover:text-[#ffff] focus:bg-[#3B1606] focus:text-[#ffff]"
        >
          بیشترین قیمت
        </button>
        <button
          onClick={() => setFilterProduct("rate")}
          className="rounded-md bg-amber-100 p-1 transition-all duration-300 hover:bg-[#3B1606] hover:text-[#ffff] focus:bg-[#3B1606] focus:text-[#ffff]"
        >
          محبوب ترین
        </button>
      </div>
    </div>
  );
}

export default NavMenu;
