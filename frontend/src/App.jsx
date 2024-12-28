import Header from "./components/header";
import Home from "./components/Home";
const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pt-20 md:pt-28">
      <Home />
      </div>
    </div>
  );
};

export default App;
