"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CartContextValue = {
  cartShakeTick: number;
  triggerCartShake: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartShakeTick, setCartShakeTick] = useState(0);

  const triggerCartShake = useCallback(() => {
    setCartShakeTick((prev) => prev + 1);
  }, []);

  const value = useMemo(
    () => ({
      cartShakeTick,
      triggerCartShake,
    }),
    [cartShakeTick, triggerCartShake],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
