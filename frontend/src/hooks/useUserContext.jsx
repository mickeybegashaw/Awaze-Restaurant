import { userContext } from "../context/userContext";
import { useContext } from "react";

const UseUserContext=()=>{
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
}
export default UseUserContext;