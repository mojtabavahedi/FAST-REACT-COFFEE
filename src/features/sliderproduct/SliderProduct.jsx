import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { formatCurrency, formatNumber } from "../../utils/helpers";
import { FaShoppingBasket } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Counter from "../counter/Counter";
import Buttons from "react-multi-date-picker/components/button";
import Button from "../../ui/Button";
import { json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
function SliderProduct({ coffee }) {
  const [roateProduct, setRotateProduct] = useState(false);

  const imageUrl = coffee.map((x) => x.imageUrl);
  const id = coffee.map((x) => x.id);
  const unitPrice = coffee.map((x) => x.unitPrice);
  const name = coffee.map((x) => x.name);
  const soldOut = coffee.map((x) => x.soldOut);
  const [currentProduct, setCurentProduct] = useState(0);
  const currentQuantity = useSelector(
    getCurrentQuantityById(id[currentProduct]),
  );
  const isInCart = currentQuantity > 0;
  const dispatch = useDispatch();
  function handleRotateProduct() {
    setRotateProduct((value) => !value);
  }
  function handleSelectSlide(index) {
    setCurentProduct(index);
  }
  function handleMoveSlide(value) {
    console.log(value);

    if (value === `+`) {
      if (currentProduct >= 0) {
        setCurentProduct((x) => x + 1);
      }
      if (currentProduct === 3) {
        setCurentProduct(0);
      }
    }
    if (value === "-") {
      if (currentProduct <= 3) {
        setCurentProduct((x) => x - 1);
      }
      if (currentProduct === 0) {
        setCurentProduct(3);
      }
    }
  }
  function handleAddToCart() {
    const newItem = {
      id: id[currentProduct],
      name: name[currentProduct],
      count: 1,
      unitPrice: unitPrice[currentProduct],
      imageUrl: imageUrl[currentProduct],
      totalPrice: unitPrice[currentProduct] * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <div className="flex items-center gap-5 tablet:hidden">
      <MdArrowForwardIos
        id="forward"
        value="+"
        onClick={() => handleMoveSlide("+")}
        className="text-2xl text-[#3B1606]"
      />
      <div>
        <div className="flex perspective-800 desktop:h-[300px] desktop:w-[220px] desktop:items-center desktop:justify-center lgdesktop:h-[380px] lgdesktop:w-[290px]">
          <div
            className={
              roateProduct
                ? "FRONT flex h-[270px] w-[190px] transform flex-col items-center justify-center gap-4 rounded-xl bg-amber-100 transition-transform duration-1000 rotate-y-180 backface-hidden desktop:h-[280px] desktop:w-[200px] lgdesktop:h-[340px] lgdesktop:w-[250px]"
                : "FRONT flex h-[270px] w-[190px] transform flex-col items-center justify-center gap-4 rounded-xl bg-amber-100 transition-transform duration-1000 backface-hidden desktop:h-[280px] desktop:w-[200px] lgdesktop:h-[340px] lgdesktop:w-[250px]"
            }
          >
            {" "}
            <img
              className="h-[120px] w-[120px] desktop:h-40 desktop:w-40 lgdesktop:h-52 lgdesktop:w-52"
              src={imageUrl[currentProduct]}
              alt={name[currentProduct]}
            />
            <p className="flex w-[117px] justify-start desktop:w-[156px] lgdesktop:w-[202px]">
              {name[currentProduct]}
            </p>
            <div className="flex w-[117px] justify-between desktop:w-[156px] lgdesktop:w-[202px]">
              <FaShoppingBasket onClick={handleRotateProduct} />
              <p> {formatNumber(unitPrice[currentProduct])} تومان</p>
            </div>
          </div>
          <div
            className={
              roateProduct
                ? "BACK absolute flex h-[270px] w-[190px] flex-col gap-11 rounded-xl bg-amber-100 transition-transform duration-1000 rotate-y-180 backface-hidden desktop:h-[280px] desktop:w-[200px] lgdesktop:h-[340px] lgdesktop:w-[250px]"
                : "BACK absolute flex h-[270px] w-[190px] transform flex-col gap-11 rounded-xl bg-amber-100 transition-transform duration-1000 -rotate-y-180 backface-hidden desktop:h-[280px] desktop:w-[200px] lgdesktop:h-[340px] lgdesktop:w-[250px]"
            }
          >
            <button
              onClick={handleRotateProduct}
              className="mr-3 mt-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3B1606] text-[#ffff]"
            >
              <FaArrowRight />
            </button>
            <div className="flex flex-col items-center justify-center gap-4">
              {isInCart && (
                <Counter
                  id={id[currentProduct]}
                  currentQuantity={currentQuantity}
                />
              )}
              {!isInCart && (
                <Button type={"add"} onClick={handleAddToCart}>
                  افزودن به سبد خرید
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-center gap-3 pt-5">
          {imageUrl.map((imageUrl, index) => (
            <div
              className={
                currentProduct === index
                  ? "h-3 w-3 rounded-full bg-amber-100"
                  : "h-3 w-3 rounded-full bg-[#3B1606]"
              }
              key={index}
              onClick={() => handleSelectSlide(index)}
            ></div>
          ))}
        </div>
      </div>
      <MdArrowBackIos
        id="forward"
        value="-"
        onClick={() => handleMoveSlide("-")}
        className="text-2xl text-[#3B1606]"
      />
    </div>
  );
}

export default SliderProduct;
