import UseMenuContext from "../hooks/useMenuContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import MenuAddModal from "./MenuAddModal";

const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const AdminHero = () => {
  const { state, dispatch } = UseMenuContext();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const FetchMenu = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/api/menu`);
        dispatch({ type: "GET_MENU", payload: response.data });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    FetchMenu();
  }, [dispatch]);



  return ( 
    <section
    id="home"
    className="font-serif 
    min-h-screen  w-screen flex items-center flex-col "
    >
      {showModal&& <MenuAddModal onclose={()=>setShowModal(false)} />}
      <h1 className="text-red-700 font-bold text-3xl text-center mt-3">
        Admin panel
      </h1>

      <div onClick={()=>setShowModal(true)} className="bg-stone-300 cursor-pointer w-11/12 h-16 flex justify-center items-center rounded-xl mt-3">
        <h1 className="text-xl text-stone-600 font-bold">
          {" "}
          <span className="inline-block">
            <IoMdAddCircleOutline size={20}/>
          </span>{" "}
          Add new menu
        </h1>{" "}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3 bg-stone-300 rounded-xl hover:shadow-black hover:shadow-xl w-11/12 place-items-center md:gap-10 mt-4 transition-shadow">
        {loading && (
          <h1 className="text-2xl text-stone-400 text-center">
            Loading menu...
          </h1>
        )}
        {state &&
          state.menu.map((menu) => (
            <div
              key={menu._id}
              className="h-20 w-11/12 border-2 border-red-700 flex items-center rounded-xl justify-between "
            >
              <img
                src={menu.image.url}
                loading="lazy"
                className="h-full w-24 md:w-32 object-cover rounded-xl"
                alt="image of menus"
              />
              <div className="flex flex-col  w-fit">
                <p className="text-xl">{menu.title}</p>
              </div>
              <div className="flex flex-col gap-3 mr-5  w-fit">
              <p title="Delete" className="cursor-pointer">
              <CiEdit size={20} />
                </p>
                <p title="Delete" className="cursor-pointer">
                  <MdDelete size={20} color="red" />
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AdminHero;
