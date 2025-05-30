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
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-zinc-50 bg-opacity-50 flex flex-col justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-[90%] max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center"></div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-[#260f08] mb-2">
        Order Confirmed
      </h2>
      <p className="text-rose-300">We hope you enjoy your food!</p>
      <div className="bg-rose-100 p-4 rounded-lg mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <Image
                src={item.image}
                alt={item.title}
                width={30}
                height={20}
                className="rounded"
              />
              <p className="font-semibold text-sm">{item.text}</p>
              <p className="text-red-500 text-sm">
                {item.amount}X{" "}
                <span className="text-rose-300">{item.value.toFixed(2)}</span>
              </p>
            </div>
            <p className="font-semibold text-[#260f08]">
              ${(item.value * item.amount).toFixed(2)}
            </p>
          </div>
        ))}

        <button
          onClick={handleSubmitModal}
          className="bg-[#c73620] text-white py-2 px-6 rounded-full font-semibold hover:bg-red-700"
        >
          Submit new Order
        </button>
      </div>
    </div>
  );
};
