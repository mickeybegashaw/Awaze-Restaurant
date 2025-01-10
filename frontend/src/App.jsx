import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import { BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import UseUserContext from "./hooks/useUserContext";

const App = () => {
  const {user} =UseUserContext()
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={user? <Admin /> : <Navigate to={'/admin/login'}/> } />
        <Route path="/admin/login" element={!user? <AdminLogin/>:<Navigate to={'/admin'}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
