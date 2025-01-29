import { useLoaderData } from "react-router-dom";
import { getMenu, getUser } from "../../services/apiRestaurant";
import MenuItem from "../menu/MenuItem";
import { useEffect, useState } from "react";
import SliderProduct from "../sliderproduct/SliderProduct";

function HomeMenu() {
  const [HomeMenuItems, setHomeMenuItems] = useState([]);
  getMenu().then((result) => {
    setHomeMenuItems(result.slice(0, 4));
  });

  return (
    <>
      <div className="my-8 flex flex-wrap justify-around gap-6 max-ipadpro:px-14 max-tablet:hidden desktop:gap-7">
        {HomeMenuItems.map((coffee) => (
          <MenuItem coffee={coffee} key={coffee.id} id={coffee.id} />
        ))}
      </div>

      <SliderProduct coffee={HomeMenuItems} />
    </>
  );
}

export default HomeMenu;
//
//const items = [];
//getMenu().then((x) => items.push(...x));
//console.log(items);
