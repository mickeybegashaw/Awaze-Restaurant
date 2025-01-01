import Header from "../adminComponents/AdminHeader";
import AdminHero from "../adminComponents/HeroAdmin"; 
const Admin = () => {
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
