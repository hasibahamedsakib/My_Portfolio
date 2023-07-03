import { Link } from "react-scroll";
import Logo from "../Logo/Logo";

const Navbar = () => {
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
      <div className="container py-5 ">
        <div className="block md:flex justify-between items-center">
          <Logo />
          <nav className="block md:flex space-x-6 lg:space-x-8 overflow-x-scroll md:overflow-x-hidden">
            {navLinks.map((link) => {
              return (
                <Link
                  to={link.path}
                  key={link.id}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="focus:text-red-500 font-semibold hover:underline cursor-pointer active:text-red-600"
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
