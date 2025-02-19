import { create } from "zustand";

export type GlobalAppState = {
  openForm: boolean;
};

export type GlobalAppActions = {
  toggleOpenModalAuth: (val: boolean) => void;
};

export const useAuth = create<GlobalAppState & GlobalAppActions>((set) => ({
  openForm: false,
  toggleOpenModalAuth: (val: boolean) => {
    set((state) => {
      state.openForm = val;
      return { ...state };
    });
  },
}));
