import { Candy } from "@/data/Candy";
import { CardList } from "../cardList/cardList";

export const CardComponents = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {Candy.map((candy) => (
        <CardList key={candy.id} cardList={candy} />
      ))}
    </div>
  );
};
