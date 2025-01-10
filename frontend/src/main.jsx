import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MenuContextProvider from "./context/menuContext.jsx";
import UserContextProvider from "./context/userContext.jsx";
createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </UserContextProvider>
);
