import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ICountState {
  count: number;
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
}

export const useCountStore = create<ICountState>()((set, get) => ({
  count: 0,
  increment: qty => set({ count: get().count + qty }),
  decrement: qty => set({ count: get().count - qty }),
}));
