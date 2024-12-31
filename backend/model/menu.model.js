import mongoose from "mongoose";

const Schema = mongoose.Schema;

const menuSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image:{
    public_id:{
      type:String,
    },
    url:{
      type:String,
    }
  }
},{timestamps: true});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;