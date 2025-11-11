import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import { FaBars, FaTimes } from "react-icons/fa";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menu = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/delivery", label: "Deliver-Order" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div>
      {/* Navbar */}
      <div className="bg-neutral-700 px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <i className="ri-remix-fill text-[20px] text-amber-300"></i>
          <h1 className="text-amber-300 text-xl font-bold">Noor Luxury</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 text-white items-center">
          {menu.map((item, index) => (
            <Link key={index} to={item.href} className="px-4 py-2 hover:text-amber-300">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-700 text-white flex flex-col gap-4 px-5 py-4">
          {menu.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="px-4 py-2 hover:text-amber-300"
              onClick={() => setIsOpen(false)} // Click karne pe menu close ho jaye
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Page Content */}
      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
