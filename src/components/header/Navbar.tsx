import { useState } from "react";
import Icon from "../../assets/icon.png";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";

type MenuItem = {
  label: string;
  href: string;
};

interface NavbarProps {
  menuItems?: MenuItem[];
}

export default function Navbar({ menuItems = [] }: NavbarProps) {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-16 lg:px-20">
        <div className="relative flex items-center justify-between h-24">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Logo & desktop menu */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-16 w-auto"
                src={Icon}
                alt="Logo"
              />
              <img
                className="hidden lg:block h-16 w-auto"
                src={Icon}
                alt="Logo"
              />
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 mt-4">
                {menuItems.map((menu) => (
                  <a
                    key={menu.label}
                    href={menu.href}
                    className="text-gray-500 hover:text-black px-2 text-sm font-bold"
                  >
                    {menu.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Login button (desktop) */}
          <div className="hidden lg:block">
            <Button onClick={handleLogin}>Login</Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={isMenuOpen ? "block" : "hidden"} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 border-t">
          {menuItems.map((menu) => (
            <a
              key={menu.label}
              href={menu.href}
              className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-medium"
            >
              {menu.label}
            </a>
          ))}
          <div>
            <Button onClick={handleLogin}>Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
