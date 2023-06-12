import { Dispatch, SetStateAction, createContext } from "react";

export interface AppStateType {
  isOpenMenu: boolean;
}

interface AppContextType {
  state: AppStateType;
  setAppContext: Dispatch<SetStateAction<AppStateType>>;
}

export const initialAppContext: AppContextType = {
  state: {
    isOpenMenu: false,
  },
  setAppContext: () => {},
};

const AppContext = createContext<AppContextType>(initialAppContext);

export default AppContext;
