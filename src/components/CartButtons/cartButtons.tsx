import { useCartStore } from "@/store/stores";
import { CandyList } from "@/types/candyList";
import Image from "next/image";

type CartButtonsType = {
  item: CandyList;
};

export const CartButons = ({ item }: CartButtonsType) => {
  const { addToCart, increaseAmount, decreaseAmount, cart } = useCartStore();
  const cartItem = cart.find((c) => c.id === item.id);
  const amount = cartItem?.amount || 0;

  if (amount === 0) {
    return (
      <button
        onClick={() => addToCart(item)}
        className="absolute py-2 px-4 gap-2 text-[#260F08] rounded-full bottom-[-1.2rem] cursor-pointer flex justify-between items-center bg-white left-2/4 -translate-x-1/2 min-w-36 border-[#260F08] text-sm font-semibold border"
      >
        <Image
          src={"/icon-add-to-cart.svg"}
          alt="addTocart"
          width={20}
          height={20}
        />{" "}
        Add to Cart
      </button>
    );
  }

  return (
    <div className="absolute justify-between items-center py-2 px-4 rounded-full bottom-[-1.2rem] bg-[#C73A0F] left-2/4 -translate-x-1/2 flex gap-6 min-w-36">
      <button
        onClick={() => decreaseAmount(item.id)}
        className="cursor-pointer border w-5 p-1 rounded-full"
      >
        <Image
          src={"icon-decrement-quantity.svg"}
          alt={item.title}
          width={10}
          height={10}
        />
      </button>
      <span className="text-white font-semibold">{amount}</span>
      <button
        onClick={() => increaseAmount(item.id)}
        className="cursor-pointer border p-1 rounded-full"
      >
        <Image
          src={"icon-increment-quantity.svg"}
          alt={item.title}
          width={10}
          height={10}
        />
      </button>
    </div>
  );
};
