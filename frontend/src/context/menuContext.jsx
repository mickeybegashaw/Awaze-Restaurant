import { createContext, useReducer } from "react";

export const MenuContext = createContext();

const menuReducer = (state, action) => {
  switch (action.type) {
    case "GET_MENU":
      return {
        menu: action.payload,
      };
    case "ADD_MENU":
      return {
        menu: [action.payload, ...state.menu],
      };
    case "DELETE_MENU":
      return {
        menu: state.menu.filter((menu) => menu._id !== action.payload),
      };
    case "UPDATE_MENU":
      return {
        menu: state.menu.map((menu) =>
          menu._id === action.payload._id
            ? { ...menu, ...action.payload }
            : menu
        ),
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
