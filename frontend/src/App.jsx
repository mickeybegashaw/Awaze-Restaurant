import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Menu from "./components/theMenu"
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
      <Footer />
      </div>
    </div>
  );
};

export default App;
