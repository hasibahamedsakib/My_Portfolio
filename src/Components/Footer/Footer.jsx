import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-4 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-[#333] sm:text-center font-semibold">
            © 2023 Hasib™ . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium  text-[#333] sm:mt-0">
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="mr-4 hover:underline md:mr-6 text-[#333] "
              >
                About
              </Link>
            </li>
            <li>
              <a href="#" className="mx-4 hover:underline md:mr-6 text-[#333]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-[#333]">
                Licensing
              </a>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:underline text-[#333] "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
