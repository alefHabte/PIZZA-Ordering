import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const selectedPizza = {
    pizzaId: id,
    name,
    quantity: 1,
    unitPrice,
    totalPrice: unitPrice * 1,
  };
  function handelAdd() {
    dispatch(addItem(selectedPizza));
  }

  return (
    <li className="flex gap-3 py-3">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="text-lg font-bold">{name}</p>
        <p className="italic text-stone-500">{ingredients.join(", ")}</p>
        <div className="mt-auto text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="uppercase text-stone-400">Sold out</p>
          )}
        </div>
        <div className="ml-auto mr-4">
          {!soldOut ? (
            <Button onClick={handelAdd} type="small">
              Add to Cart
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
