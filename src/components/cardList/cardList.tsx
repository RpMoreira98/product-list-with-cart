import { useCartStore } from "@/store/stores";
import { CandyList } from "@/types/candyList";
import Image from "next/image";

type CardListCandy = {
  cardList: CandyList;
};

export const CardList = ({ cardList }: CardListCandy) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div>
      <Image
        src={cardList.image}
        alt={cardList.title}
        width={200}
        height={150}
      />
      <h3>{cardList.title}</h3>
      <p>{cardList.text}</p>
      <p>${cardList.value.toFixed(2)}</p>
      <button onClick={() => addToCart(cardList)}> Add to Cart</button>
    </div>
  );
};
