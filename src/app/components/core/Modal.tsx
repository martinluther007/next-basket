import productImage from "@/assets/images/product.jpg";
import Image from "next/image";
import { ReactNode } from "react";

const Modal = ({
  children,
  hadleModalIsOpen,
}: {
  children: ReactNode;
  hadleModalIsOpen: () => void;
}) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="bg-[#00000057] fixed z-[100] inset-0 overflow-y-auto"
    >
      <div className=" flex flex-col min-h-screen   items-center justify-center ">
        <div className="bg-white w-[90%] sm:w-auto  p-4">
          <div className="flex justify-end">
            <button onClick={hadleModalIsOpen}>
              <span className="cursor-pointer" aria-hidden="true">
                &#9747;
              </span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
