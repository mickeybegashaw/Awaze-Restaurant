import { useState } from "react";
import axios from "axios";
import UseMenuContext from "../hooks/useMenuContext";
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const MenuEditModal = ({ menu, onClose }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(menu.title);
  const [description, setDescription] = useState(menu.description);
  const [price, setPrice] = useState(menu.price);
  const { dispatch } = UseMenuContext();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedMenu = {
      title,
      description,
      price,
    };

    try {
      setError("");
      setLoading(true);
      const response = await axios.patch(
        `${baseUrl}/api/menu/${menu._id}`,
        updatedMenu
      );
      if (response.status >= 200 && response.status < 300) {
        dispatch({ type: "UPDATE_MENU", payload: response.data });
        alert("Menu updated successfully");
        onClose(); // Close the modal
      } else {
        alert("Failed to update menu");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center "
      ></div>

      <div className="flex flex-col items-center">
        <div
          data-aos="fade-up"
          className="bg-white top-10 fixed z-10 w-11/12 md:w-2/3 rounded-2xl p-5 h-fit flex flex-col items-center"
        >
          <h1 className="text-red-700 font-bold text-xl md:text-2xl">
            Edit Menu
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-5 w-full mt-10"
          >
            <div className="flex flex-col gap-5 w-5/6 md:w-3/4">
              <label htmlFor="title">
                Title:
                <input
                  className="border-2 border-stone-500 p-2 w-full rounded-md"
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="flex flex-col gap-5 w-5/6 md:w-3/4">
              <label htmlFor="imageUrl">
                Price:
                <input
                  className="border-2 border-stone-500 p-2 w-full rounded-md"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="flex flex-col gap-5 w-5/6 md:w-3/4">
              <label htmlFor="imageUrl">
                Description
                <input
                  maxLength={100}
                  className="border-2 border-stone-500 p-2 w-full rounded-md"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="flex gap-5 w-full">
              <button
                disabled={loading}
                type="submit"
                className="bg-red-700 text-white w-1/2 p-2 rounded-md hover:bg-red-900 transition-all"
              >
                {loading ? "Editing..." : "Edit Menu"}
              </button>
              <span
                onClick={onClose}
                className="bg-stone-800 hover:bg-stone-900 text-white w-1/2 p-2 rounded-md text-center"
              >
                Close
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MenuEditModal;
