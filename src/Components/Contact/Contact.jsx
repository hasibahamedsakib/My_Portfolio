import { BsArrowRightCircle } from "react-icons/bs";
import HrLine from "../HrLine/HrLine";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiMailSend, BiSend } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="Container">
      <HrLine />
      <SectionHeader
        title="Let's work
together!"
        text="Get in touch"
      />
      <div className="block md:flex justify-around space-x-8 text-[#333]">
        <div>
          <h2 className="text-center text-xl font-semibold py-5">
            Connect With Via
          </h2>
          <div className="space-y-4 flex flex-col justify-center">
            <div className="border bg-white rounded-xl px-10 py-6  space-y-1">
              <FaEnvelope size={40} />
              <p className="font-semibold">Email</p>
              <p>hasibahamed@yahoo.com</p>
              <a
                className="flex items-center "
                href="mailto:hasibahamed@yahoo.com?subject=Hiring"
              >
                Write Me{" "}
                <BsArrowRightCircle
                  className="ml-2  hover:scale-105"
                  size={25}
                />{" "}
              </a>
            </div>
            <div className="border bg-white rounded-xl px-10 py-6  space-y-1">
              <FaWhatsapp size={40} />
              <p className="font-semibold">Whatsapp</p>
              <p>+880 1836405792</p>
              <a
                className="flex items-center "
                href="https://wa.me/1836405792 "
                target="_blank"
              >
                Write Me{" "}
                <BsArrowRightCircle
                  className="ml-2  hover:scale-105"
                  size={25}
                />{" "}
              </a>
            </div>
            <div className="border bg-white rounded-xl px-10 py-6  space-y-1">
              <FaLinkedin size={40} />
              <p className="font-semibold">LinkedIn</p>
              <p>Hasib Ahaed Sakib</p>
              <a
                className="flex items-center "
                href="https://www.linkedin.com/in/hasib-ahamed-sakib/"
                target="_blank"
              >
                Write Me{" "}
                <BsArrowRightCircle
                  className="ml-2  hover:scale-105"
                  size={25}
                />{" "}
              </a>
            </div>
          </div>
        </div>
        <form>
          <h2 className="text-center text-xl font-semibold py-5">Lets Talk</h2>
          <div className="pb-5">
            <label className="pb-4 font-semibold text-lg p-2">Name: </label>
            <input
              placeholder="Enter Your Name"
              required
              className="p-4 border-2 block w-full lg:w-[420px] focus:outline-none rounded-xl bg-white "
            />
          </div>
          <div className="pb-5">
            <label className="pb-4 font-semibold text-lg p-2">Email: </label>
            <input
              placeholder="Enter Your Email"
              type="email"
              required
              className="p-4 border-2 block w-full lg:w-[420px] focus:outline-none rounded-xl bg-white "
            />
          </div>
          <div className="pb-5">
            <label className="pb-4 font-semibold text-lg p-2">Message: </label>
            <textarea
              placeholder="Write Me for work of collaboration"
              className="p-4 border-2 block w-full lg:w-[420px] focus:outline-none rounded-xl bg-white h-[200px]"
            />
          </div>
          <div className="grid justify-center pt-3">
            <button className="btn-primary " type="submit">
              Send Message <BiSend size={25} className="ml-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
