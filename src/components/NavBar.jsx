import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const closeMenu = () => setIsOpen(!isOpen);

  function menuIcon() {
    const newState = !isOpen;
    setIsOpen(newState);
    console.log(newState ? "Open" : "Closed");
  }

  return (
    <header className="z-50 left-0 px-3.5 top-0 w-full font-bold">
      {/* Navbar for large screens (hidden on small screens) */}
      <nav className="hidden sm:flex justify-between items-center max-w-full">
        <img src="images/navLogo.png" alt="logo" className="w-auto h-20" />
        <ul className="flex justify-around gap-10">
          <li className='group'>
            <Link 
              to="/home" 
              onClick={closeMenu}
              className="text-[#334277]! hover:text-white transition-colors duration-300 hover:bg-gradient-to-r from-[#D3A522] to-amber-700 rounded px-4 py-2"
            >
              Home
            </Link>
          </li>
          <li className='group'>
            <Link 
              to="/portfolios" 
              onClick={closeMenu}
              className="text-[#334277]! hover:text-white transition-colors duration-300 hover:bg-gradient-to-r from-[#D3A522] to-amber-700 rounded px-4 py-2"
            >
              Portfolios
            </Link>
          </li>
          <li className='group'>
            <Link 
              to="/cv-qualifications" 
              onClick={closeMenu}
              className="text-[#334277]! hover:text-white transition-colors duration-300 hover:bg-gradient-to-r from-[#D3A522] to-amber-700 rounded px-4 py-2"
            >
              CV & Qualifications
            </Link>
          </li>
          <li className='group'>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="text-[#334277]! hover:text-white transition-colors duration-300 hover:bg-gradient-to-r from-[#D3A522] to-amber-700 rounded px-4 py-2"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>

      {/* Navbar for small screens (hidden on large screens) */}
      <nav className="flex sm:hidden justify-between items-center max-w-full">
        <img src="images/navLogo.png" alt="logo" className="w-auto h-12" />
        <button
          onClick={menuIcon}
          id="menu-icon" 
          className={`cursor-pointer ${isOpen ? 'open' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`flex flex-col items-center gap-3 bg-gray-600 text-[#D3A522] pb-4 absolute top-13 left-0 h-65 w-[99.8%] justify-between p-2 overflow-none ${isOpen===true? "block": "hidden"} z-10`}>
          <li className='border-b-white hover:bg-[#D3A522] hover:w-full hover:text-[#181889] hover:text-center hover:py-2'>
            <Link to="/home" className="block w-full py-2">Home</Link>
          </li>
          <li className='border-b-white hover:bg-[#D3A522] hover:w-full hover:text-[#181889] hover:text-center hover:py-2'>
            <Link to="/portfolios" className="block w-full py-2">Portfolios</Link>
          </li>
          <li className='border-b-white hover:bg-[#D3A522] hover:w-full hover:text-[#181889] hover:text-center hover:py-2'>
            <Link to="/cv-qualifications" className="block w-full py-2">CV & Qualifications</Link>
          </li>
          <li className='border-b-white hover:bg-[#D3A522] hover:w-full hover:text-[#181889] hover:text-center hover:py-2'>
            <Link to="/contact" className="block w-full py-2">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}