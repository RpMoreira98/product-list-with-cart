import { Candy } from "@/data/Candy";
import { CardList } from "../cardList/cardList";
import { CardConfirm } from "../cardConfirm/cardConfirm";

export const CardComponents = () => {
  return (
    <div className="flex gap-[6rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Candy.map((candy) => (
          <CardList key={candy.id} cardList={candy} />
        ))}
      </div>
      <div className="">
        <CardConfirm />
      </div>
    </div>
  );
};
