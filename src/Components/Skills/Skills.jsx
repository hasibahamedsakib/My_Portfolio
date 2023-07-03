import { useEffect, useState } from "react";
import HrLine from "../HrLine/HrLine";
import SectionHeader from "../SectionHeader/SectionHeader";

import {
  SiHtml5,
  SiReact,
  SiBootstrap,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
const Skills = () => {
  const [allSkills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  console.log(allSkills);
  return (
    <div className="container">
      <HrLine />
      <SectionHeader title="Skills" text="" />
      <marquee direction="left" className="py-5 ">
        <div className={`flex space-x-7`}>
          <div className="flex space-x-8">
            {allSkills.map((skills) => {
              return (
                <div
                  className=" p-5 rounded-lg shadow-custom hover:drop-shadow-2xl hover:scale-110 transition-all duration-300 text-[#333] w-44 h-44 grid items-center justify-center"
                  key={skills.id}
                >
                  <span>
                    {" "}
                    <img
                      src={skills.icon}
                      className="grayscale object-fill w-20 h-20 rounded-2xl"
                      alt=""
                    />
                  </span>
                  <h3 className="text-xl font-semibold text-center">
                    {skills.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </marquee>
    </div>
  );
};

export default Skills;
