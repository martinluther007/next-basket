import Image from "next/image";
import Modal from "../core/Modal";
import { useDispatch, useSelector } from "react-redux";
import { CartItems, removeItem } from "@/redux/slices/cartSlice";
import {
  WishlistItems,
  addWishlist,
  removeWishlist,
  wishlistSelector,
} from "@/redux/slices/wishListSlice";
import { toast } from "react-toastify";

const WishlistItems = ({ thumbnail, id }: CartItems) => {
  const dispatch = useDispatch();

  const handleRemoveToWishList = (id: string) => {
    dispatch(removeWishlist(id));
    return toast("item removed successfully", { position: "bottom-right" });
  };

  return (
    <>
      <h3 className="text-textColor capitalize font-bold text-2xl">wishlist</h3>
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

        <div className="flex justify-center mt-4">
          <button
            onClick={() => handleRemoveToWishList(id)}
            className="border rounded bg-primary uppercase text-white py-2.5 px-10  font-bold text-sm sm:text-base"
          >
            remove
          </button>
        </div>
      </div>
    </>
  );
};

const WishListModal = ({
  onHandleCartIsOpen,
}: {
  onHandleCartIsOpen: () => void;
}) => {
  const wishlistItems = useSelector(wishlistSelector);

  return (
    <Modal hadleModalIsOpen={onHandleCartIsOpen}>
      <>
        {wishlistItems.items.length > 0 &&
          wishlistItems.items.map((el: WishlistItems, index: number) => (
            <WishlistItems
              key={index}
              quantity={el.quantity}
              thumbnail={el.thumbnail}
              id={el.id}
            />
          ))}
        {wishlistItems.items <= 0 && (
          <div className="w-[100%] sm:w-[500px]">No items in wishlist</div>
        )}
      </>
    </Modal>
  );
};

export default WishListModal;
