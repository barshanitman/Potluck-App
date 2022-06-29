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

interface CartPageState {
  CartPageActivated: boolean;
  setCartPageActivated: () => void;
}

export const cartStore = create<CartPageState>((set) => ({
  CartPageActivated: false,
  setCartPageActivated: () =>
    set((state) => ({ CartPageActivated: !state.CartPageActivated })),
}));
