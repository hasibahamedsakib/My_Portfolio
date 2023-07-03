import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { IoHandLeftOutline } from "react-icons/io5";
import { BiCloudDownload, BiMailSend } from "react-icons/bi";
import { BsArrowDownShort, BsMouse } from "react-icons/bs";
import style from "./banner.module.css";
import { Link } from "react-scroll";
const Banner = () => {
  return (
    <div className="container">
      <div className="pt-20 h-screen flex justify-evenly items-center">
        {/* social section */}
        <div className="">
          <a
            href="https://github.com/hasibahamedsakib"
            target="_blank"
            rel="noopener noreferrer"
            title="Hasib's Github"
          >
            <AiFillGithub size={25} />
          </a>

          <a
            href="https://www.linkedin.com/in/hasib-ahamed-sakib/"
            target="_blank"
            rel="noopener noreferrer"
            title="Hasib's Linkedin"
          >
            <AiFillLinkedin size={25} className="my-6" />
          </a>
          <a
            href="https://wa.me/1836405792"
            target="_blank"
            rel="noopener noreferrer"
            title="Hasib's Whatsapp"
          >
            <AiOutlineWhatsApp size={25} />
          </a>
        </div>
        {/* Description */}
        <div className="w-[500px] space-y-3 text-[#333]">
          <h3 className={` text-4xl text-[#333] font-semibold flex`}>
            Hasib Ahamed Sakib{" "}
            <span className="-rotate-12 pl-5">
              <IoHandLeftOutline size={40} />{" "}
            </span>
          </h3>

          <p className={`${style.hr} relative pl-20 font-semibold text-lg`}>
            MERN Stack Developer{" "}
          </p>
          <p className="w-full font-medium">
            As a professional and passionate programmer, I always keep learning
            and exploring new technologies. For my quick and self learning
            attitude, I try to develop myself consistently, specially my
            Development skills.
          </p>
          <div className="flex items-center space-x-5 mt-4">
            <a
              download="Hasib_ahamed_resume"
              href="../../../public/hasib_ahamed_resume.pdf"
            >
              <button className="btn-primary">
                Download CV <BiCloudDownload size={25} className="ml-4" />
              </button>
            </a>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="focus:text-red-500 font-semibold hover:underline cursor-pointer active:text-red-600"
            >
              <button className="btn-primary">
                Lets Talk <BiMailSend size={25} className="ml-4" />
              </button>
            </Link>
          </div>
          <div className="pt-10">
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="focus:text-red-500 font-semibold hover:underline cursor-pointer "
            >
              <div className="flex space-x-4 items-center">
                <BsMouse size={30} className="" /> <p>Scroll Down</p>
                <BsArrowDownShort size={28} />
              </div>
            </Link>
          </div>
        </div>
        {/* animated image */}

        <img
          className={`${style.animated_image} border-8 border-slate-600 grayscale cursor-pointer rounded-full`}
          title="Hasib Ahamed Sakib"
          src="https://i.ibb.co/VvpvhFV/IMG20201110082641-removebg-preview-3.png"
          alt=""
        />
      </div>
      {/* go to next section */}
    </div>
  );
};

export default Banner;
