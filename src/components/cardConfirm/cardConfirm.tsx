import { useCartStore } from "@/store/stores";
import Image from "next/image";
import { ConfirmButton } from "../confirmButton/confrimButton";

export const CardConfirm = () => {
  const { cart, removeFromCart } = useCartStore();

  const total = cart.reduce((acc, item) => acc + item.value * item.amount, 0);
  return (
    <div className="bg-white w-[400px] p-4 py-6 rounded-lg">
      <h1 className="text-red-500 font-extrabold text-xl">
        Your Cart ({cart.length})
      </h1>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-3 justify-center">
          <Image
            src={"/illustration-empty-cart.svg"}
            alt="emptyCart"
            width={128}
            height={128}
          />
          <span className="text-rose-950 text-center text-sm">
            Your added items will appear here
          </span>
        </div>
      ) : (
        <div>
          <ul className="space-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-4 rounded-lg py-4 border-b border-rose-100"
              >
                <div className="flex flex-col items-start">
                  <h1 className="text-black text-sm font-bold">{item.text}</h1>
                  <div className="flex justify-between gap-3 text-rose-400">
                    <div className="flex justify-center gap-2">
                      <span className="text-xs">{item.amount}x</span>
                      <span className="text-xs text-gray-500">
                        ${item.value.toFixed(2)}
                      </span>
                      <span className="text-xs">
                        ${(item.value * item.amount).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="border p-1 rounded-full cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Image
                      src={"/icon-remove-item.svg"}
                      alt={item.image}
                      width={10}
                      height={10}
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-3 text-black">
            <h3 className="font-normal">Order total</h3>
            <span className="font-extrabold text-xl">${total.toFixed(2)}</span>
          </div>
          <div>
            <h3></h3>
          </div>
          <ConfirmButton />
        </div>
      )}
    </div>
  );
};
