import { UserType } from "types/user";
import { create } from "zustand";

export interface AppState {
  isToggleMenu: boolean;
  userProfile: UserType | null;
  isMobile: boolean;
  updateToggleMenu: (value?: boolean) => void;
  updateUserProfile: (data: UserType | null) => void;
  updateIsMobile: (value: boolean) => void;
}

const useAppStore = create<AppState>()((set) => ({
  isToggleMenu: false,
  userProfile: null,
  isMobile: false,

  updateToggleMenu: (value?: boolean) => {
    set((state) => {
      if (value !== undefined) {
        return {
          ...state,
          isToggleMenu: value,
        };
      }
      return {
        ...state,
        isToggleMenu: !state.isToggleMenu,
      };
    });
  },

  updateUserProfile: (data: UserType | null = null) => {
    set((state) => {
      return {
        ...state,
        userProfile: data,
      };
    });
  },

  updateIsMobile: (value: boolean) => {
    set((state) => {
      return {
        ...state,
        isMobile: value,
      };
    });
  },
}));

export default useAppStore;
