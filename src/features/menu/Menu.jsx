import React, { useEffect, useState } from "react";
import { Outlet, redirect, useLoaderData, useLocation } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import NavMenu from "../../ui/NavMenu";
import sleep from "sleep-promise";

function Menu() {
  const menu = useLoaderData();
  const { pathname } = useLocation();
  const [filterProduct, setFilterProduct] = useState();
  const [sortedProduct, setSortedProduct] = useState(menu);

  useEffect(() => {
    const filterAndSortMenu = () => {
      let filteredMenu = [];

      switch (pathname) {
        case "/menu/hotcoffee":
          filteredMenu = menu.filter((x) => x.type === "hot");
          break;
        case "/menu/coldcoffee":
          filteredMenu = menu.filter((x) => x.type === "cold");
          break;
        case "/menu/tea":
          filteredMenu = menu.filter((x) => x.type === "tea");
          break;
        default:
          // Fallback to the full menu
          break;
      }

      switch (filterProduct) {
        case "lowprice":
          setSortedProduct(
            [...filteredMenu].sort((a, b) => a.unitPrice - b.unitPrice),
          );
          break;
        case "highprice":
          setSortedProduct(
            [...filteredMenu].sort((a, b) => b.unitPrice - a.unitPrice),
          );
          break;
        case "rate":
          setSortedProduct([...filteredMenu].sort((a, b) => b.rate - a.rate));
          break;
        default:
          setSortedProduct(filteredMenu);
          break;
      }
    };

    filterAndSortMenu();
  }, [pathname, menu, filterProduct]);
  function handleScroll() {
    <redirect to="/menu/coldcoffee" />;
  }
  return (
    <div>
      <NavMenu setFilterProduct={setFilterProduct} />
      <div className="tablet:flex tablet:justify-center">
        <div className="my-8 flex flex-wrap justify-around gap-2 tablet:w-[586px] tablet:justify-start ipadpro:w-[784px] desktop:w-[1240px] lgdesktop:w-[1780px]">
          <Outlet context={sortedProduct} />
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  await sleep(2000);
  return menu;
}

export default Menu;
