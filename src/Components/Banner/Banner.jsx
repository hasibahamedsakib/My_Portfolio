import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { IoHandLeftOutline } from "react-icons/io5";
import style from "./banner.module.css";
const Banner = () => {
  return (
    <div className="mt-20 h-screen flex justify-evenly items-center ">
      {/* social section */}
      <div className="">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          title="Hasib's Github"
        >
          <AiFillGithub size={25} />
        </a>

        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          title="Hasib's Linkedin"
        >
          <AiFillLinkedin size={25} className="my-6" />
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          title="Hasib's Whatsapp"
        >
          <AiOutlineWhatsApp size={25} />
        </a>
      </div>
      {/* Description */}
      <div className="w-[500px] space-y-3">
        <h3 className={` text-4xl font-semibold flex`}>
          Hasib Ahamed Sakib{" "}
          <span className="-rotate-12 pl-5">
            <IoHandLeftOutline size={40} />{" "}
          </span>
        </h3>

        <p className={`${style.hr} relative pl-20 font-semibold`}>
          MERN Stack Developer{" "}
        </p>
        <p className="w-full">
          As a professional and passionate programmer, I always keep learning
          and exploring new technologies. For my quick and self learning
          attitude, I try to develop myself consistently, specially my
          problem-solving skills. I am eager to join a dynamic and innovative
          team where I can apply my skills and learn new ones to create
          cutting-edge solutions that meet user needs and business goals.
        </p>
      </div>
      {/* animated image */}

      <img
        className={`${style.animated_image} border-8 border-slate-600 grayscale cursor-pointer`}
        title="Hasib Ahamed Sakib"
        src="https://i.ibb.co/VvpvhFV/IMG20201110082641-removebg-preview-3.png"
        alt=""
      />
    </div>
  );
};

export default Banner;
