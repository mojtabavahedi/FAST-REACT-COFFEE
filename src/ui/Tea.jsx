import { useOutletContext } from "react-router-dom";
import MenuItem from "../features/menu/MenuItem";

function Tea() {
  const sortedProduct = useOutletContext();

  return (
    <>
      {" "}
      {sortedProduct.map((coffee) => (
        <MenuItem coffee={coffee} id={coffee.id} key={coffee.id} />
      ))}
    </>
  );
}

export default Tea;
