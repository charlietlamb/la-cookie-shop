import {create} from 'zustand';

export type State = {
  cartOpen: boolean;
  setCartOpen: (cartOpen: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (searchOpen: boolean) => void;
  headerOpen: boolean;
  setHeaderOpen: (headerOpen: boolean) => void;
};

export const useOpenStore = create<State>((set) => ({
  cartOpen: false,
  setCartOpen: (cartOpen) => set({cartOpen}),
  searchOpen: false,
  setSearchOpen: (searchOpen) => set({searchOpen}),
  headerOpen: true,
  setHeaderOpen: (headerOpen) => set({headerOpen}),
}));
