import { createContext } from "react";

export interface AppLoadingContextType {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

const AppLoadingContext = createContext<AppLoadingContextType>({
  isLoading: false,
  setLoading: () => {},
});

export default AppLoadingContext;
