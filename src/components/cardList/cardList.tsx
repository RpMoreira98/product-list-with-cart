import { CandyList } from "@/types/candyList";
import Image from "next/image";
import { CartButons } from "../CartButtons/cartButtons";

type CardListCandy = {
  cardList: CandyList;
};

export const CardList = ({ cardList }: CardListCandy) => {
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
        <CartButons item={cardList} />
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
