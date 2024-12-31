import mongoose from "mongoose";
import Menu from "../model/menu.model.js";
import cloudinary from "../utils/cloudinaryConfig.js";
// create menu
const createMenu = async (req, res) => {
  const { title, description, price } = req.body;

  if (!title || !description || !price) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  let imageUrl = null;
  if (req.file) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "menus", 
      });
      imageUrl = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    } catch (error) {
      console.error(error);
      return res.status(500).json("Error uploading image to Cloudinary");
    }
  }



  try {
    const menu = await Menu.create({ title, description, price, image:imageUrl });
    res.status(201).json(menu);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to save the menu item. Please check your input data.",
    });
  }
};

// get all menu
const getAllMenu = async (req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).json(menu);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to retrieve menu items. Please try again later.",
    });
  }
};
// update menu  
const updateMenu = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No menu item with that id" });
  }

  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!updatedMenu) {
      return res.status(404).json({ message: "No menu item with that id" });
    }
    res.status(200).json(updatedMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating the menu item" });
  }
};

const deleteMenu = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json("No menu item with that id");

  try {
    const menu = await Menu.findByIdAndDelete({ _id: id });
    res.status(200).json(menu);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete the menu item." });
  }
};

export { getAllMenu, createMenu, updateMenu, deleteMenu };
