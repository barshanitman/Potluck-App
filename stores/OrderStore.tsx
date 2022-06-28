import create from "zustand";

interface CartState {
  CartQuantity: number;
  increaseCartQuantity: () => void;
  decreaseCartQuantity: () => void;
}

export const orderStore = create<CartState>((set) => ({
  CartQuantity: 0,
  increaseCartQuantity: () =>
    set((state) => ({ CartQuantity: state.CartQuantity + 1 })),
  decreaseCartQuantity: () =>
    set((state) => ({ CartQuantity: state.CartQuantity - 1 })),
}));
