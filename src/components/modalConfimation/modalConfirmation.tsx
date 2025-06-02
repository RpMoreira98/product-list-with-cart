import { useCartStore } from "@/store/stores";
import Image from "next/image";
type Modal = {
  isOpen: boolean;
  onClose: () => void;
};
export const ModalConfimation = ({ isOpen, onClose }: Modal) => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  if (!isOpen) return null;

  const handleSubmitModal = () => {
    clearCart();
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#e2e0de42] flex flex-col justify-center items-center z-50">
      <div
        className="text-black text-4xl cursor-pointer absolute top-2 right-2"
        onClick={handleCloseModal}
      >
        X
      </div>
      <div className="bg-white rounded-lg w-[22rem] p-8">
        <div className="bg-white pb-3 w-[90%] max-w-md text-center">
          <div>
            <Image
              src={"/icon-order-confirmed.svg"}
              alt="check-icon"
              height={48}
              width={48}
            />
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-[#260f08] mb-2">
          Order Confirmed
        </h2>
        <p className="text-rose-300 text-xs pt-2">
          We hope you enjoy your food!
        </p>
        <div className="grid mb-2 mt-2 bg-gray-100 p-4 gap-2 max-h-60 overflow-y-auto rounded-lg">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-rose-100 pb-2 mb-2"
            >
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={30}
                    height={20}
                    className="rounded"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#260f08] text-sm">
                    {item.text}
                  </p>
                  <p className="text-red-500 font-bold text-sm">
                    {item.amount}x{" "}
                    <span className="text-rose-300">
                      ${item.value.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
              <p className="font-semibold text-[#260f08]">
                ${(item.value * item.amount).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmitModal}
          className="bg-[#c73620] cursor-pointer text-white mt-4 py-2 px-6 w-full rounded-full font-semibold hover:bg-red-700"
        >
          Submit new Order
        </button>
      </div>
    </div>
  );
};
