import {MenuContext} from "../context/menuContext"
import { useContext } from "react";

const UseMenuContext=()=>{
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
}
export default UseMenuContext;