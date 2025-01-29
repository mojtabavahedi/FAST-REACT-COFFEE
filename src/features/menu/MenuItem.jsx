import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { formatCurrency, formatNumber } from "../../utils/helpers";
import { FaShoppingBasket } from "react-icons/fa";
import Counter from "../counter/Counter";
import Buttons from "react-multi-date-picker/components/button";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart, getCurrentQuantityById } from "../cart/cartSlice";

function MenuItem({ coffee }) {
  const [roateProduct, setRotateProduct] = useState(false);
  const { id, name, unitPrice, soldOut, imageUrl } = coffee;
  function handleRotateProduct() {
    setRotateProduct((value) => !value);
  }
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      id,
      name,
      count: 1,
      unitPrice,
      imageUrl,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <>
      <div className="flex w-[330px] perspective-800 tablet:h-[270px] tablet:w-[190px] desktop:h-[280px] desktop:w-[200px] desktop:items-center desktop:justify-center lgdesktop:h-[380px] lgdesktop:w-[290px]">
        <div
          className={
            roateProduct
              ? "FRONT flex h-[120px] w-[330px] transform items-center justify-start gap-4 rounded-xl bg-amber-100 transition-transform duration-1000 backface-hidden max-tablet:px-1 max-tablet:rotate-x-180 tablet:h-[270px] tablet:w-[190px] tablet:flex-col tablet:justify-center tablet:rotate-y-180 desktop:h-[280px] desktop:w-[200px] lgdesktop:h-[340px] lgdesktop:w-[250px]"
              : "FRONT flex h-[120px] w-[330px] transform items-center justify-start gap-4 rounded-xl bg-amber-100 transition-transform duration-1000 backface-hidden first-letter:flex max-tablet:px-1 tablet:h-[270px] tablet:w-[190px] tablet:flex-col tablet:justify-center desktop:h-[280px] desktop:w-[200px] lgdesktop:h-[340px] lgdesktop:w-[250px]"
          }
        >
          {" "}
          <img
            className="h-[110px] w-[120px] rounded-md tablet:h-[120px] tablet:w-[120px] desktop:h-40 desktop:w-40 lgdesktop:h-52 lgdesktop:w-52"
            src={imageUrl}
            alt={name}
          />
          <div className="font-vaziri text-sm max-tablet:flex max-tablet:h-[110px] max-tablet:flex-col max-tablet:justify-around lgdesktop:text-lg">
            <p className="flex w-[117px] justify-start desktop:w-[156px] lgdesktop:w-[202px]">
              {name}
            </p>
            <div className="flex w-[170px] justify-between tablet:w-[117px] desktop:w-[156px] lgdesktop:w-[202px]">
              <p> {formatNumber(unitPrice)} تومان</p>
              <FaShoppingBasket
                className="max-tablet:self-center"
                onClick={handleRotateProduct}
              />
            </div>
          </div>
        </div>
        <div
          className={
            roateProduct
              ? "BACK absolute flex h-[120px] w-[330px] gap-8 rounded-xl bg-amber-100 transition-transform duration-1000 backface-hidden max-tablet:rotate-x-180 tablet:h-[270px] tablet:w-[190px] tablet:flex-col tablet:gap-11 tablet:rotate-y-180 desktop:h-[280px] desktop:w-[200px] lgdesktop:h-[340px] lgdesktop:w-[250px]"
              : "BACK absolute flex h-[120px] w-[330px] transform gap-8 rounded-xl bg-amber-100 transition-transform duration-1000 backface-hidden max-tablet:-rotate-x-180 tablet:h-[270px] tablet:w-[190px] tablet:flex-col tablet:gap-11 tablet:-rotate-y-180 desktop:h-[280px] desktop:w-[200px] lgdesktop:h-[340px] lgdesktop:w-[250px]"
          }
        >
          <button
            onClick={handleRotateProduct}
            className="mr-1 mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3B1606] text-[#ffff] tablet:mr-3 tablet:mt-3"
          >
            <FaArrowRight />
          </button>
          <div className="flex flex-col items-center justify-around tablet:justify-center tablet:gap-4">
            {isInCart && <Counter id={id} currentQuantity={currentQuantity} />}
            {!isInCart && (
              <Button type={"add"} onClick={handleAddToCart}>
                افزودن به سبد خرید
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
/* <div className="mx-0 flex w-[330px] perspective-800 tablet:hidden">
        <div
          className={
            roateProduct
              ? "FRONT flex h-[120px] w-[330px] transform items-center justify-start gap-8 rounded-xl bg-amber-100 px-1 transition-transform duration-1000 rotate-x-180 backface-hidden tablet:h-[120px] tablet:w-[330px] tablet:gap-4"
              : "FRONT flex h-[120px] w-[330px] transform items-center justify-start gap-8 rounded-xl bg-amber-100 px-1 transition-transform duration-1000 backface-hidden tablet:gap-4"
          }
        >
          {" "}
          <img
            className="h-[110px] w-[120px] rounded-md"
            src={imageUrl}
            alt={name}
          />
          <div className="flex h-[110px] flex-col justify-around">
            <p className="flex w-[117px] justify-start desktop:w-[156px] lgdesktop:w-[202px]">
              {name}
            </p>
            <div className="flex w-[170px] justify-between desktop:w-[156px] lgdesktop:w-[202px]">
              <p> {formatNumber(unitPrice)} تومان</p>{" "}
              <FaShoppingBasket
                className="self-center"
                onClick={handleRotateProduct}
              />
            </div>
          </div>
        </div>
        <div
          className={
            roateProduct
              ? "BACK absolute flex h-[120px] w-[330px] gap-8 rounded-xl bg-amber-100 transition-transform duration-1000 rotate-x-180 backface-hidden desktop:h-[280px] desktop:w-[200px] lgdesktop:h-[340px] lgdesktop:w-[250px]"
              : "BACK absolute flex h-[120px] w-[330px] transform gap-8 rounded-xl bg-amber-100 transition-transform duration-1000 -rotate-x-180 backface-hidden desktop:h-[280px] desktop:w-[200px] lgdesktop:h-[340px] lgdesktop:w-[250px]"
          }
        >
          <button
            onClick={handleRotateProduct}
            className="mr-1 mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3B1606] text-[#ffff]"
          >
            <FaArrowRight />
          </button>
          <div className="flex flex-col items-center justify-around">
            {" "}
            <Counter />
            <Button type={"add"}>افزودن به سبد خرید</Button>
          </div>
        </div>
      </div>*/
