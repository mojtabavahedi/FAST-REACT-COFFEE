import { useRef, useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import Footer from "./Footer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

function AppLayout() {
  const navigation = useNavigation();
  const [openMenu, setOpenMenu] = useState(false);
  const isLoading = navigation.state === "loading";
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const [alert, setAlert] = useState(false);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <div
        className={
          totalCartQuantity > 0
            ? `grid h-screen grid-rows-[48px,1fr,48px] tablet:grid-rows-[64px,1fr,64px]`
            : `grid h-screen grid-rows-[48px,1fr] tablet:grid-rows-[64px,1fr]`
        }
      >
        {isLoading && <Loader />}
        <Header
          alert={alert}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />{" "}
        <main
          ref={mainRef}
          className={`overflow-scroll overflow-x-hidden ${openMenu ? "blur-sm" : ""}`}
        >
          <Outlet context={[alert, setAlert]} />{" "}
          {pathname !== "/login" &&
            pathname !== "/signup" &&
            pathname !== "/forgetpassword" && <Footer alert={alert} />}
        </main>{" "}
        {totalCartQuantity > 0 && (
          <CartOverview openMenu={openMenu} alert={alert} />
        )}
      </div>
    </>
  );
}

export default AppLayout;
