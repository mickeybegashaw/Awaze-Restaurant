import axios from "axios";
import UseMenuContext from "../hooks/useMenuContext";
import { useEffect , useState } from "react";

const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Menu = () => {
  const { state, dispatch } = UseMenuContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchMenu = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/api/menu`);
        dispatch({ type: "GET_MENU", payload: response.data });
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    };
    FetchMenu();
  }, [dispatch]);
  console.log(state);
  return (
    <section
      id="menu"
      className="font-serif bg-stone-800 min-h-screen w-screen flex flex-col pt-10 "
    >
      <h2 className="text-5xl text-red-700 font-bold text-center font-cursive mb-5">
        Menus
      </h2>
      {loading && <h1 className="text-2xl text-stone-400 text-center">Loading menu...</h1>}
      <div className="flex md:flex-row flex-col md:flex-wrap md:w-11/12 md:justify-center items-center text-white font-serif">
        {state &&
          state.menu.map((menu) => (
            <div
              key={menu._id}
              className="w-9/12 md:w-1/4 h-72 m-5 bg-stone-700 flex flex-col rounded-2xl"
            >
              <img
                src={menu.image.url}
                alt="image of the menu"
                className="w-full h-2/4 object-cover rounded-t-2xl"
              />

              <div className="flex flex-col items-center mt-2">
                <p className="text-red-500 text-2xl ">{menu.title}</p>
                <p className="">Description: {menu.description}</p>
              </div>

              <h3 className="bg-red-700 p-3 relative -top-52 w-fit text-xl rounded-2xl ">
                {menu.price} Birr
              </h3>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Menu;
