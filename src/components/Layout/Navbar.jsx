import React, { useState } from 'react';
import { FaHome, FaStar, FaImage, FaBell, FaPen, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/Teams/Club Logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[98%] z-[100]">
      <div className="bg-[#48414146] backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center justify-between shadow-2xl relative">
        
        {/* Left Section: Logo & Brand */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Yuktikula Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-[#face52] font-bold text-xs sm:text-sm leading-tight">Yuktikula Club</span>
            <span className="text-white/60 text-[8px] sm:text-[10px] leading-tight hidden xs:block">Official Club of CSE-DS Dept. of GLBITM</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink icon={<FaHome />} label="Home" href="/" />
          <NavLink icon={<FaStar />} label="Events" href="/events" />
          <NavLink icon={<FaImage />} label="Gallery" href="/gallery" />
          <NavLink icon={<FaBell />} label="Announcements" href="/announcements" />
          <NavLink icon={<FaPen />} label="About Us" href="/about" />
        </div>

        {/* Hamburger Icon - Only visible on mobile */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-[#face52] text-xl focus:outline-none transition-transform active:scale-90"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`
          absolute top-full left-0 right-0 mt-2 bg-[#160e0e]/95 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300 origin-top z-[101] md:hidden
          ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
        `}>
          <NavLink icon={<FaHome />} label="Home" href="/" onClick={toggleMenu} />
          <NavLink icon={<FaStar />} label="Events" href="/events" onClick={toggleMenu} />
          <NavLink icon={<FaImage />} label="Gallery" href="/gallery" onClick={toggleMenu} />
          <NavLink icon={<FaBell />} label="Announcements" href="/announcements" onClick={toggleMenu} />
          <NavLink icon={<FaPen />} label="About Us" href="/about" onClick={toggleMenu} />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon, label, href, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link 
      to={href} 
      onClick={onClick}
      className={`
        flex items-center gap-2 text-sm no-underline transition-all duration-300 ease-in-out
        hover:text-[#face52] hover:scale-110 active:scale-95
        ${isActive ? 'text-[#face52]' : 'text-white/80'}
      `}
    >
      <span className="text-xs">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default Navbar;