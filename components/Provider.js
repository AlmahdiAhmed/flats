"use client";
import { createContext } from "react";

export const lang = createContext();
const Provider = ({ children, locale }) => {
  return <lang.Provider value={{ locale }}>{children}</lang.Provider>;
};
export default Provider;
