import axios from "axios";
import logoImg from "../assets/Awazelogo.png";
import UseUserContext from "../hooks/useUserContext";
import { useState } from "react";
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const AdminLogin = () => {
  const { setUser } = UseUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setLoading(true);

      const response = await axios.post(`${baseUrl}/api/user/login`, {
        userName: username,
        password: password,
      });
      if (response.status >= 200 && response.status < 300) {
        setError(null);
        localStorage.setItem("user", JSON.stringify(response.data));
        setLoading(false);
        setUser(response.data);
      } else {
        setError(response.data);
      }
    } catch (error) {
      console.log(error);
      setError(error.response ? error.response.data : "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white w-screen h-screen flex flex-col items-center">
      <div className="px-4 md:px-0 w-11/12 md:w-4/6 bg-stone-300 h-2/3 mt-10 flex flex-col items-center">
        <div className="bg-stone-800 h-10 w-full flex justify-center item-center ">
          <h1 className="text-xl text-white">login to Admin panel</h1>
        </div>
        <img
          className="object-contain h-24 md:h-28 mt-10 "
          src={logoImg}
          alt="Awaze restaurant logo"
        />
        <form onSubmit={handleLogin}>
          <label htmlFor="user-name">UserName </label>
          <input
            required
            id="user-name"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter UserName"
            className="border-stone-500 w-full rounded-md p-1 mb-5"
          />
          <br />
          <label htmlFor="password">Password </label>
          <input
            required
            id="password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter Password"
            className="border-stone-500 w-full rounded-md p-1 mb-5"
          />
          <p className="text-red-600 text-center">{error && error}</p>

          <button
            disabled={loading}
            type="submit"
            className="bg-stone-800 text-white w-1/2 p-2 rounded-md hover:bg-red-700 transition-all"
          >
            {loading ? "...." : "log in"}
          </button>
          <span className="md:ml-5  cursor-pointer"> Forgot Password?</span>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
