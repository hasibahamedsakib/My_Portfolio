import { useEffect, useState } from "react";
import HrLine from "../HrLine/HrLine";
import SectionHeader from "../SectionHeader/SectionHeader";
import { BsCheckCircle } from "react-icons/bs";

const Skills = () => {
  const [allSkills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="container">
      <HrLine />
      <SectionHeader title="Skills" text="Opted Technologies" />

      {/* skills section */}
      <div className="py-10 flex justify-center space-x-6 items-center text-[#333]">
        <div className="bg-white w-full md:w-[400px] p-10 border rounded-lg  ">
          <h3 className="text-2xl font-semibold pb-5">Frontend</h3>
          <div className="grid grid-cols-2 gap-7 ">
            <div>
              <p className="flex  items-center font-semibold text-base">
                <BsCheckCircle className="mr-2" size={15} /> HTML
              </p>
              <small>Intermediate</small>
            </div>
            <div>
              <p className="flex  items-center font-semibold text-base">
                <BsCheckCircle className="mr-2" size={15} /> CSS
              </p>
              <small>Intermediate</small>
            </div>
            <div>
              <p className="flex  items-center font-semibold text-base">
                <BsCheckCircle className="mr-2" size={15} /> Javascript
              </p>
              <small>Intermediate</small>
            </div>
            <div>
              <p className="flex  items-center font-semibold text-base">
                <BsCheckCircle className="mr-2" size={15} /> React Js
              </p>
              <small>Intermediate</small>
            </div>
            <div>
              <p className="flex  items-center font-semibold text-base">
                <BsCheckCircle className="mr-2" size={15} /> Bootstrap
              </p>
              <small>Advance</small>
            </div>
            <div>
              <p className="flex  items-center font-semibold text-base">
                <BsCheckCircle className="mr-2" size={15} /> Tailwind
              </p>
              <small>Advance</small>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className="bg-white w-full md:w-[400px] p-10 border rounded-lg ">
          <h3 className="text-2xl font-semibold pb-5">Backend</h3>
          <div className="grid grid-cols-2 gap-7">
            <div>
              <p className="flex  items-center font-semibold text-base">
                <BsCheckCircle className="mr-2" size={15} /> Node Js
              </p>
              <small>Intermediate</small>
            </div>
            <div>
              <p className="flex  items-center font-semibold text-base">
                <BsCheckCircle className="mr-2" size={15} /> Express Js
              </p>
              <small>Intermediate</small>
            </div>
            <div>
              <p className="flex  items-center font-semibold text-base">
                <BsCheckCircle className="mr-2" size={15} /> Firebase
              </p>
              <small>Intermediate</small>
            </div>
            <div>
              <p className="flex  items-center font-semibold text-base">
                <BsCheckCircle className="mr-2" size={15} /> JWT
              </p>
              <small>Intermediate</small>
            </div>
            <div>
              <p className="flex  items-center font-semibold text-base">
                <BsCheckCircle className="mr-2" size={15} /> EJS
              </p>
              <small className="ml-0">Intermediate</small>
            </div>
            <div>
              <p className="flex  items-center font-semibold text-base">
                <BsCheckCircle className="mr-2" size={15} /> Authentication
              </p>
              <small>Intermediate</small>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <marquee direction="left" className="py-10 ">
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
