import { ArrowUp, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
     <footer className="bg-black text-white px-10 py-8 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left side: Brand & links */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-light mb-4">Eclypse<span className="ml-1"><ArrowUpRight className="inline-block absolute" /></span></h1>
          <div className="text-sm text-gray-400 space-y-1">
            <p>Home / About / Buy</p>
            <p>Our Customers /</p>
            <p>Contacts</p>
          </div>
        </div>

        {/* Middle: Contact & Email */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-sm text-gray-400 mb-1">Contact</h2>
          <p className="text-lg font-medium">+91 123-456-7890</p>

          <div className="mt-4">
            <h2 className="text-xs text-gray-400 mb-1">EMAIL</h2>
            <p className="px-2 py-1 rounded w-fit">eclypse@gmail.com</p>
          </div>
        </div>

        {/* Right: Scroll to top */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className=" cursor-pointer w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition"
            aria-label="Scroll to top"
          >
             <ArrowUp /> 
          </button>
        </div>
      </div>

      {/* Bottom right copyright */}
      <div className="text-xs text-gray-500 absolute bottom-4 right-10">© Eclypse 2025</div>
    </footer>
  );
};


export default Footer;
