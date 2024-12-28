import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/about";
import Menu from "./components/menu";
import WhyUs from "./components/WhyUs";
const App = () => {
  return (
    <div>
      <div>
        <Header /> 
      </div>
      <div className="pt-20 md:pt-24">
      <Home />
      <About />
      <WhyUs />
      <Menu />
      </div>
    </div>
  );
};

export default App;
