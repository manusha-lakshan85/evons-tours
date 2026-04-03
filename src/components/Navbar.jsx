import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logoL.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-500";
      

  return (
    <nav className="bg-white shadow-md px-6 py-3">
      <div className="flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} className="h-10 w-10" />
          <h1 className="text-blue-500 text-lg tracking-normal font-bold">Evon’s Tours</h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/tours" className={linkClass}>Tours</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </ul>

        {/* BUTTON */}
       <button
      onClick={() => navigate("/tours")}
      className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
      >
      Book Now
      </button>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 animate-fadeIn">
          <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/tours" className={linkClass} onClick={() => setMenuOpen(false)}>Tours</NavLink>
          <NavLink to="/gallery" className={linkClass} onClick={() => setMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>

          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}