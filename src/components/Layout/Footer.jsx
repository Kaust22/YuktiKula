import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, FaLinkedinIn, FaWhatsapp, FaHome, 
  FaStar, FaImage, FaBell, FaPen, FaEnvelope, FaUserTie, FaPhoneAlt 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 pt-12 pb-6 px-6 sm:px-12 mt-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
        
        {/* Section 1: Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">Get In Touch with us on</h3>
          <ul className="space-y-4">
            <FooterLink icon={<FaInstagram className="text-pink-500" />} label="Instagram" href="#" />
            <FooterLink icon={<FaLinkedinIn className="text-blue-600" />} label="LinkedIn" href="#" />
            <FooterLink icon={<FaWhatsapp className="text-green-500" />} label="Whatsapp" href="#" />
            <FooterLink icon={<FaXTwitter className="text-white" />} label="X" href="#" />
          </ul>
        </div>

        {/* Section 2: Explore (Navigation) */}
        <div>
          <h3 className="text-xl font-bold mb-6">Explore</h3>
          <ul className="space-y-4">
            <FooterNav icon={<FaHome />} label="Home" to="/" />
            <FooterNav icon={<FaStar />} label="Events" to="/events" />
            <FooterNav icon={<FaImage />} label="Gallery" to="/gallery" />
            <FooterNav icon={<FaBell />} label="Announcements" to="/announcements" />
            <FooterNav icon={<FaPen />} label="About Us" to="/about" />
          </ul>
        </div>

        {/* Section 3: Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-6">Contact Us On</h3>
          <ul className="space-y-6">
            <li className="flex flex-col gap-1">
              <span className="flex items-center gap-2 font-semibold"><FaEnvelope /> Official Email</span>
              <a href="mailto:yuktikula@glbitm.ac.in" className="text-gray-400 hover:text-[#face52] text-sm">yuktikula@glbitm.ac.in</a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="flex items-center gap-2 font-semibold"><FaUserTie /> Club President</span>
              <a href="mailto:clubpresident123@gmail.com" className="text-gray-400 hover:text-[#face52] text-sm">clubpresident123@gmail.com</a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="flex items-center gap-2 font-semibold"><FaPhoneAlt /> Contact Number</span>
              <span className="text-gray-400 text-sm">+91 9873XXXXXX</span>
            </li>
          </ul>
        </div>

        {/* Section 4: Club Branding */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
          <h2 className="text-3xl font-bold text-gray-300 mb-2">Yuktikula club</h2>
          <p className="text-xs text-gray-500 max-w-[250px] mb-4">
            Official CSE-DS Department Club of GL Bajaj Institute of Technology and Management
          </p>
          <div className="w-full h-[1px] bg-gray-700 mb-4"></div>
          <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
            Know more about our Institute
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 text-center text-gray-500 text-xs border-t border-white/5 pt-6">
        © 2026 Yuktikula Club Association. All rights reserved.
      </div>
    </footer>
  );
};

/* Helper Components for clean code */
const FooterLink = ({ icon, label, href }) => (
  <li className="flex items-center gap-3 group cursor-pointer">
    <span className="text-lg group-hover:scale-110 transition-transform">{icon}</span>
    <a href={href} className="text-gray-400 group-hover:text-white transition-colors">{label}</a>
  </li>
);

const FooterNav = ({ icon, label, to }) => (
  <li className="flex items-center gap-3 group">
    <span className="text-sm text-gray-400 group-hover:text-[#face52] transition-colors">{icon}</span>
    <Link to={to} className="text-gray-400 group-hover:text-[#face52] transition-colors">{label}</Link>
  </li>
);

export default Footer;