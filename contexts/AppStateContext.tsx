import { Dispatch, SetStateAction, createContext } from "react";
import { UserType } from "types/user";

export interface AppStateContextType {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<any>>;
}

const AppStateContext = createContext<AppStateContextType>({
  user: null,
  setUser: () => {},
});

export default AppStateContext;
