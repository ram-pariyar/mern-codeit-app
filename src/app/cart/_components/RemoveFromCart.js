import { MdRemoveCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/features/cartSlice";
const RemoveFromCart = ({ product }) => {
  const dispatch = useDispatch();

  function removeProductFromCart() {
    if (confirm("Are you sure?")) {
      dispatch(removeFromCart(product._id));
    }
  }
  return (
    <button
      type="button"
      className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500 gap-2"
      onClick={removeProductFromCart}
    >
      <MdRemoveCircle />
      Remove
    </button>
  );
};

export default RemoveFromCart;
