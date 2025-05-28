import { useCartStore } from "@/store/stores";
import { CandyList } from "@/types/candyList";
import Image from "next/image";

type CardListCandy = {
  cardList: CandyList;
};

export const CardList = ({ cardList }: CardListCandy) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="">
      <div className="relative mb-8">
        <Image
          src={cardList.image}
          alt={cardList.title}
          width={250}
          height={200}
          className="rounded-lg"
        />
        <button
          onClick={() => addToCart(cardList)}
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
      </div>
      <div className="">
        <h3 className="text-[#260F08] font-normal text-sm">{cardList.title}</h3>
        <p className="text-[#260F08] font-extrabold text-xl">{cardList.text}</p>
        <p className="text-red-500 font-normal mb-4">
          ${cardList.value.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
