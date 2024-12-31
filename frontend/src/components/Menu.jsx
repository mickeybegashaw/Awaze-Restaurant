import axios from "axios";
import UseMenuContext from "../hooks/useMenuContext"; 
import { useContext, useEffect } from "react";
import { MenuContext } from "../context/menuContext";
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Menu = () => {
  const { state,dispatch } = UseMenuContext();

  useEffect(() => {
    const FetchMenu = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/menu`);
        dispatch({ type: "GET_MENU", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    };
    FetchMenu();
  }, [dispatch]);
  
  console.log(state);
  return (
    <section
      id="menu"
      className="font-serif bg-stone-800 min-h-screen w-screen flex justify-evenly pt-10 "
    >
      <h2 className="text-5xl text-red-700 font-bold text-center font-cursive">Menu</h2>
    </section>
  );
};

export default Menu;
