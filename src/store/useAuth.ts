import { create } from "zustand";

export type GlobalAppState = {
  open: boolean;
};

export type GlobalAppActions = {
  toggleOpenModalAuth: (val: boolean) => void;
};

export const useAuth = create<GlobalAppState & GlobalAppActions>((set) => ({
  open: false,
  toggleOpenModalAuth: (val: boolean) => {
    set((state) => {
      state.open = val;
      return { ...state };
    });
  },
}));
