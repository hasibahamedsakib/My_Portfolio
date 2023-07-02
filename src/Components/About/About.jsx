import Lottie from "react-lottie";
import style from "../Banner/banner.module.css";
import animationData from "../../../public/133695-thinking-about.json";
import { BsThreeDots } from "react-icons/bs";
const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className=" container">
      <div>
        {/* <span
          className={`${style.line} relative text-center text-8xl space-x-3`}
        >
          ...
        </span> */}
        <p className={`${style.line} relative pr-10 `}>
          <BsThreeDots size={40} />
        </p>
      </div>

      <div className=" flex  items-center">
        <div className="w-full lg:w-3/5 space-y-4">
          <h1 className="text-5xl font-bold text-[#333]"> Who i am...!</h1>
          <p className="text-xl text-[#333]">
            I am a web designer and developer based in Dhaka, Bangladesh.
            <br /> <br />I am a dedicated and enthusiastic programmer in my
            daily life. I enjoy learning and discovering new technologies, and I
            am passionate about solving problems. I have experience with various
            web development technologies, such as Node.js,Express Js, React,
            Next.js, Redux, Bootstrap, Tailwind Css, MongoDB, and Firebase. I
            strive to stay updated with the latest advancements in the field and
            apply my knowledge to create innovative solutions.
          </p>
        </div>
        <div className="w-full lg:w-2/5">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default About;
