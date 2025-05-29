import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import OrderSuccess from "./pages/OrderSuccess";


function App() {

  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="p-4">About Us Page</div>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/buy" element={<div className="p-4">Buy Page</div>} />
        </Routes> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
