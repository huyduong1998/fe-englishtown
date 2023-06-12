import { Dispatch, ReactNode, SetStateAction, createContext } from "react";

export interface PopUpContextType {
  isShow: boolean;
  title: string;
  children: ReactNode;
  bottom: ReactNode;
}

export interface AppPopUpContextType {
  popUpValue: Partial<PopUpContextType> | null;
  setPopUpValue: Dispatch<SetStateAction<PopUpContextType>>;
}

const AppPopUpContext = createContext<AppPopUpContextType>({
  popUpValue: null,
  setPopUpValue: () => {},
});

export default AppPopUpContext;
