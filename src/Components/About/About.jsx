import Lottie from "react-lottie";
import animationData from "./133695-thinking-about.json";
import HrLine from "../HrLine/HrLine";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FaAward, FaBriefcase, FaHeadset } from "react-icons/fa";
const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className=" container">
      <HrLine />
      <SectionHeader title="About Me" text="Who i am...!" />
      <div className=" flex  items-center">
        <div className="w-full lg:w-3/5 space-y-4">
          <div className="md:flex items-center justify-center space-x-6 px-10">
            <div className="border rounded-md bg-white py-5 px-8 text-center  font-semibold text-[#333] w-full">
              <FaAward size={30} className="mx-auto mb-3" />
              <p>Experience</p>
              <p className="text-xs pt-1">1+ Years</p>
            </div>
            <div className="border rounded-md bg-white py-5 px-8 text-center  font-semibold text-[#333] w-full">
              <FaBriefcase size={28} className="mx-auto mb-3" />
              <p>Completed</p>
              <p className="text-xs pt-1">15+ projects</p>
            </div>
            <div className="border rounded-md bg-white py-5 px-8 text-center  font-semibold text-[#333] w-full">
              <FaHeadset size={30} className="mx-auto mb-3" />
              <p>Support</p>
              <p className="text-xs pt-1">sun to thurs</p>
            </div>
          </div>
          <p className="text-lg  font-medium text-[#333]">
            I am a Web Developer, I create things for web. I have experience of
            creating 15+ projects so far and some complex one`s are on the way.
            dedicated and enthusiastic programmer in my daily life. I enjoy
            learning and discovering new technologies, and I am passionate about
            solving problems.
          </p>
        </div>
        <div className="w-full lg:w-2/5 grayscale">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default About;
