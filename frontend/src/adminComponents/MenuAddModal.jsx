import { useState } from "react";
import axios from "axios";
import UseMenuContext from "../hooks/useMenuContext";
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const MenuAddModal = ({ onclose }) => {
  const {dispatch} = UseMenuContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSizeInBytes = 5 * 1024 * 1024; 
  
    if (file && file.size > maxSizeInBytes) {
      setError("File size exceeds 5MB. Please upload a smaller image.");
      setFormData({ ...formData, image: null }); 
    } else {
      setError(null);
      setFormData({ ...formData, image: file });
    }
  };

  const handelFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(""); // Clear any previous error
      setLoading(true); // Set loading to true to show spinner
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("price", formData.price);
      form.append("image", formData.image);

      const response = await axios.post(`${baseUrl}/api/menu/`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch({ type: "ADD_MENU", payload: response.data });

      if (response.status >= 200 && response.status < 300) {
        alert("Post successfully submitted!");
        // Reset form after successful submission
        setFormData({ title: "", description: "", price: "", image: null });
      } else {
        setError("Posting menu failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while submitting your post.");
    } finally {
      setLoading(false); // Set loading to false once the request is complete
    }
  };

  return (
    <>
      <div
        onClick={onclose}
        className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center "
      ></div>
      <div className="flex flex-col items-center">
        <div className="bg-white top-10 fixed z-10 w-11/12 md:w-2/3 rounded-2xl p-5 h-fit flex flex-col items-center">
          <h1 className="text-red-700 font-bold text-xl md:text-2xl">Add Menu</h1>
          <form
            onSubmit={handelFormSubmit}
            className="flex flex-col items-center gap-5 w-full mt-10"
          >
            <div className="flex flex-col gap-5 w-5/6 md:w-3/4">
              <input
              required
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                value={formData.title}
                className="border-2 border-stone-500 p-2 w-full rounded-md"
              />
              <input
              required
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                value={formData.description}
                className="border-2 border-stone-500 p-2 rounded-md"
              />
              <input
              required
                type="text"
                placeholder="Price"
                name="price"
                onChange={handleChange}
                value={formData.price}
                className="border-2 border-stone-500 p-2 rounded-md"
              />
              <input
              required
                type="file"
                accept="image/*"
                name="image"
                onChange={handleFileChange}
                className="border-2 border-stone-500 p-2 rounded-md"
              />
              <div className="flex gap-5 w-full">
                <button
                  type="submit"
                  className="bg-red-700 text-white w-1/2 p-2 rounded-md hover:bg-red-900 transition-all"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? "Submitting..." : "Add Menu"}
                </button>
                <span
                  onClick={onclose}
                  className="bg-stone-800 hover:bg-stone-900 text-white w-1/2 p-2 rounded-md text-center"
                >
                  Close
                </span>
              </div>
              {error && (
                <p className="mt-4 text-red-500">{error}</p> // Show error message if any
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MenuAddModal;
