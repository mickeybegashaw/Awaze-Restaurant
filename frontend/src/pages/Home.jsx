import Hero from "../components/hero"; 
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import Menu from "../components/theMenu"
const Home = () => {
  return (
    <div className="pt-20 md:pt-24">
      <Hero />
      <About />
      <WhyUs />
      <Menu />
      <Footer />
    </div>
  )
}

export default Home
