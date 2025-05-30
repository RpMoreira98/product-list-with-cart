import { useCartStore } from "@/store/stores";
type Modal = {
  isOpen: boolean;
  onClose: () => void;
};
export const ModalConfimation = ({ isOpen, onClose }: Modal) => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  if (isOpen) return null;

  const handleSubmitModal = () => {
    clearCart();
    onClose();
  };

  const total = cart.reduce((sum, item) => sum + item.value * item.amount, 0);

  return <div></div>;
};
