import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-[100%] top-0 bg-black z-999  flex justify-between items-center p-4 border-b border-gray-700">
      <a href="/" className="text-white text-2xl font-semibold w-[50px]"><img src="./logo.png" alt="" /></a>
      <div className="flex gap-8 text-sm">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <Link
        to="/buy"
        className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition"
      >
        Buy
      </Link>
    </nav>
  );
};

export default Navbar;
