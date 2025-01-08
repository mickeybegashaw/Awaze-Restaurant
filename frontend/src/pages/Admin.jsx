import Header from "../adminComponents/AdminHeader";
import AdminHero from "../adminComponents/HeroAdmin";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Admin = () => {
  useEffect(() => {
    AOS.init({once: true });
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pt-20 md:pt-24">
        <AdminHero />
      </div>
    </div>
  );
};

export default Admin;
