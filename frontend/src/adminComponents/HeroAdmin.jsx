import UseMenuContext from "../hooks/useMenuContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import MenuAddModal from "./MenuAddModal";
import MenuEditModal from "./MenuEditModal";

const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const AdminHero = () => {
  const { state, dispatch } = UseMenuContext();
  const [loading, setLoading] = useState(false);
  const [showAddModal, setAddShowModal] = useState(false);
  const [showEditModal, setEditShowModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);  // Store selected menu item for editing

  // Fetch menu data
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

  // Handle delete
  const handelDelete = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/api/menu/${id}`);
      if (response.status >= 200 && response.status < 300) {
        alert("Menu deleted successfully");
        dispatch({ type: "DELETE_MENU", payload: id });
      } else {
        alert("Failed to delete menu");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle edit (show modal and pass menu item)
  const handleEdit = (menu) => {
    setSelectedMenu(menu);  // Store the selected menu item for editing
    setEditShowModal(true);  // Show the edit modal
  };

  return (
    <section id="home" className="font-serif min-h-screen w-screen flex items-center flex-col ">
      {showAddModal && <MenuAddModal onClose={() => setAddShowModal(false)} />}
      {showEditModal && <MenuEditModal menu={selectedMenu} onClose={() => setEditShowModal(false)} />}
      
      <h1 className="text-red-700 font-bold text-3xl text-center mt-3">Admin panel</h1>

      {/* Add new menu button */}
      <div onClick={() => setAddShowModal(true)} className="bg-stone-300 cursor-pointer w-11/12 h-16 flex justify-center items-center rounded-xl mt-3">
        <h1 className="text-xl text-stone-600 font-bold">
          <span className="inline-block">
            <IoMdAddCircleOutline size={20} />
          </span>
          Add new menu
        </h1>
      </div>

      {/* Menu Items Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3 bg-stone-300 rounded-xl hover:shadow-black hover:shadow-xl w-11/12 place-items-center md:gap-10 mt-4 transition-shadow">
        {loading && <h1 className="text-2xl text-stone-400 text-center">Loading menu...</h1>}
        {state &&
          state.menu.map((menu) => (
            <div key={menu._id} className="h-20 w-11/12 border-2 border-red-700 flex items-center rounded-xl justify-between ">
              <img src={menu.image.url} loading="lazy" className="h-full w-24 md:w-32 object-cover rounded-xl" alt="image of menus" />
              <div className="flex flex-col w-fit">
                <p className="md:text-xl text-lg">{menu.title}</p>
                <p className="md:text-xl text-lg">{menu.price} Birr</p>
              </div>
              <div className="flex flex-col gap-3 mr-5 w-fit">
                {/* Edit Icon */}
                <p onClick={() => handleEdit(menu)} title="Edit" className="cursor-pointer">
                  <CiEdit size={20} />
                </p>
                {/* Delete Icon */}
                <p onClick={() => handelDelete(menu._id)} title="Delete" className="cursor-pointer">
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
