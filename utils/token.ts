import { TOKEN } from "constants/token";

export const getToken = (): string => {
  return localStorage.getItem(TOKEN.name) || "";
};
