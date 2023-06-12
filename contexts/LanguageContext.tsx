import { Dispatch, SetStateAction, createContext } from "react";

export interface LanguageContextType {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "vi",
  setLanguage: () => {},
});

export default LanguageContext;
