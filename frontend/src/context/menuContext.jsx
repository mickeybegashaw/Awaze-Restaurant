import { createContext, useReducer } from "react";

export const MenuContext = createContext();

const menuReducer = (state, action) => {
  switch (action.type) {
    case "GET_MENU":
      return {
        menu: action.payload,
      };
    default:
      return state;
  }
};

const MenuContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, {
    menu: [],
  });

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
