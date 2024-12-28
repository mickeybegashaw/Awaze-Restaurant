import Header from "./components/header";
import Home from "./components/Home";
import About from "./components/about";
const App = () => {
  return (
    <div>
      <div>
        <Header /> 
      </div>
      <div className="pt-20 md:pt-28">
      <Home />
      <About />
      </div>
    </div>
  );
};

export default App;
