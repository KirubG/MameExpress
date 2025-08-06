import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string | null;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: String) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (newItem) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === newItem.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === newItem.id
                  ? { ...item, quantity: item.quantity + newItem.quantity }
                  : item
              ),
            };
          }
          return {
            items: [...state.items, newItem],
          };
        }),
        removeItem: (id) => set((state) => {
            return {items: state.items.map((item)=> item.id === id ? {...item, quantity: item.quantity -1} : item).filter((item) => item.quantity > 0)}
        }),
        clearCart: () => set({ items: [] })
    }),
    
    { name: "cart" }
  )
);
