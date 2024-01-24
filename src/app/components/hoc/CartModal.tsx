import Image from "next/image";
import Modal from "../core/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  CartItems,
  cartSelector,
  decItem,
  incItem,
  removeItem,
} from "@/redux/slices/cartSlice";
import { toast } from "react-toastify";

const CartItems = ({ thumbnail, quantity, id }: CartItems) => {
  const dispatch = useDispatch();

  const deleteItem = (id: string) => {
    dispatch(removeItem(id));
    return toast("item removed from cart ", { position: "bottom-right" });
  };
  const increaseItemQuantity = (id: string) => {
    dispatch(incItem(id));
    return toast("item increased successfully", { position: "bottom-right" });
  };
  const decreaseItemQuantity = (id: string) => {
    dispatch(decItem(id));
    return toast("item decreased successfully", { position: "bottom-right" });
  };

  return (
    <div className="flex mt-4 flex-col sm:flex-row w-[100%] sm:w-[500px] justify-between shadow-xl rounded-xl py-1.5 px-4 items-center">
      <div>
        <Image
          width={1000}
          height={1000}
          className="w-[100px] rounded-xl h-[100px]"
          src={thumbnail}
          alt="product image"
        />
      </div>
      <div className="flex  items-center">
        <button
          onClick={() => decreaseItemQuantity(id)}
          className="shadow-lg p-1.5 text-center   rounded "
        >
          -
        </button>
        <p className="mx-4">{quantity}</p>
        <button
          onClick={() => increaseItemQuantity(id)}
          className="shadow-lg p-1.5 text-center rounded  "
        >
          +
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => deleteItem(id)}
          className="border rounded bg-primary uppercase text-white py-2.5 px-10  font-bold text-sm sm:text-base"
        >
          delete
        </button>
      </div>
    </div>
  );
};

const CartModal = ({
  onHandleCartIsOpen,
}: {
  onHandleCartIsOpen: () => void;
}) => {
  const cartItems = useSelector(cartSelector);

  return (
    <Modal hadleModalIsOpen={onHandleCartIsOpen}>
      <>
        {cartItems.items.length > 0 &&
          cartItems.items.map((el: CartItems, index: number) => (
            <CartItems
              key={index}
              quantity={el.quantity}
              thumbnail={el.thumbnail}
              id={el.id}
            />
          ))}
        {cartItems.items <= 0 && (
          <div className="w-[100%] sm:w-[500px]">No items in cart</div>
        )}
      </>
    </Modal>
  );
};

export default CartModal;
