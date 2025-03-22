import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex justify-between items-center">
        <a href="#" className="text-white text-xl font-bold">
          LJ
        </a>
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row md:space-x-6 space-y-4 md:space-y-0`}
        >
          <li>
            <a href="who/who.html" className="text-white hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="codingwork/codingwork.html" className="text-white hover:text-yellow-400">
              Web Development work
            </a>
          </li>
          <li>
            <a href="CV/cv.html" className="text-white hover:text-yellow-400">
              Other professional work
            </a>
          </li>
          <li>
            <a href="contact/contact.html" className="text-white hover:text-yellow-400">
              Gallery
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="navigation menu" className="text-white">
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
