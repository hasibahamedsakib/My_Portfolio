import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      id: 1,
      title: "Home",
      path: "home",
    },
    {
      id: 2,
      title: "About",
      path: "about",
    },
    {
      id: 3,
      title: "Skills",
      path: "skills",
    },
    {
      id: 4,
      title: "Service",
      path: "service",
    },
    {
      id: 5,
      title: "Portfolio",
      path: "portfolio",
    },
    {
      id: 6,
      title: "Contact",
      path: "contact",
    },
  ];

  return (
    <div className="bg-[#fafafa] z-50 fixed top-0 left-0 right-0 shadow-md">
      <div className="Container py-5">
        <div className="block md:flex justify-between items-center">
          <div className="flex justify-between">
            <Logo />
            <button
              className="md:hidden block focus:outline-none"
              onClick={toggleNavbar}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } block md:flex space-y-2 text-center  md:space-x-8 md:space-y-0 `}
          >
            {navLinks.map((link) => (
              <Link
                to={link.path}
                key={link.id}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="focus:text-red-500 font-semibold hover:underline cursor-pointer active:text-red-600 block md:flex border-2 md:border-0 rounded-3xl"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
