import { create } from "zustand";

interface BlockState {
  isActiveSubmit: boolean;

  updateActiveSubmit: (status: boolean) => void;
}

const useBlockStore = create<BlockState>()((set) => ({
  isActiveSubmit: false,

  updateActiveSubmit: (status) => {
    set((state) => {
      return {
        ...state,
        isActiveSubmit: status,
      };
    });
  },
}));

export default useBlockStore;
