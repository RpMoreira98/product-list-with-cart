import { useState } from "react";
import { ModalConfimation } from "../modalConfimation/modalConfirmation";

export const ConfirmButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full cursor-pointer px-2 py-2 mt-3 font-bold bg-red-700 hover:bg-red-800 rounded-full"
      >
        Confirme Order
      </button>

      <ModalConfimation
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
