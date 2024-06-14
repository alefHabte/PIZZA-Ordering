import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
          <Button type="small">Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
