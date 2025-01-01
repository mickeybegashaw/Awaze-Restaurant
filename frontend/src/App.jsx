import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Admin from "./pages/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
