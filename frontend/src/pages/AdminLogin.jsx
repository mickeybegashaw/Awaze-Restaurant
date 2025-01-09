import logoImg from "../assets/Awazelogo.png";

const AdminLogin = () => {
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
        <form>
          <label htmlFor="user-name">UserName </label>
          <input
            required
            id="user-name"
            type="text"
            placeholder="Enter UserName"
            className="border-stone-500 w-full rounded-md p-1 mb-5"
          />
          <br />
          <label htmlFor="password">Password </label>
          <input
            required
            id="password"
            type="text"
            placeholder="Enter Password"
            className="border-stone-500 w-full rounded-md p-1 mb-5"
          />
          <button
            type="submit"
            className="bg-stone-800 text-white w-1/2 p-2 rounded-md hover:bg-red-700 transition-all"
          >
            Log in
          </button>
          <span className="ml-5  cursor-pointer"> Forgot Password?</span>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
