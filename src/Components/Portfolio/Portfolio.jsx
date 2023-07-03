import { Link } from "react-router-dom";
import HrLine from "../HrLine/HrLine";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FaCode, FaLaptopCode } from "react-icons/fa";
const Portfolio = () => {
  return (
    <div className="container text-[#333]">
      <HrLine />
      <div className="flex justify-between items-center">
        <SectionHeader title="Portfolio" text="MY LATEST WORK." />
        <Link to="/all-works">
          <button className="btn-primary">All My Works Here</button>
        </Link>
      </div>
      <div className="flex justify-around  gap-6  pt-16 ">
        <div className="border rounded-lg overflow-hidden p-5 object-fill w-full md:w-1/2">
          <img
            src="https://i.ibb.co/VvSBt3r/Web-capture-14-6-2023-162752-articio-client-web-app.jpg"
            alt="project 1"
            className="shadow-custom  rounded-xl hover:scale-110 duration-500 transition-all"
          />
        </div>
        <div className="px-5 w-full md:w-1/2">
          <h3 className="text-2xl font-semibold">
            Articio: Summer Camp Art-School Related Website
          </h3>
          <p className="py-4 text-lg">
            This project is a Summer Camp Art school website where instructors
            can create and post classes, and users can enroll in these classes
            by making payments. The website also features a payment system
            implemented using React Stripe Payment, allowing users to make
            payments using various types of cards.
          </p>
          <div className="flex items-center justify-center space-x-5">
            <a
              href="https://articio-client.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                Live Site <FaLaptopCode size={25} className="ml-4" />{" "}
              </button>
            </a>
            <a
              href="https://github.com/hasibahamedsakib/articio-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn-primary">
                Client Side <FaCode size={25} className="ml-4" />{" "}
              </button>
            </a>

            <a
              href="https://github.com/hasibahamedsakib/articio-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                Server Side <FaCode size={25} className="ml-4" />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-around  gap-6  pt-16 ">
        <div className="border rounded-lg overflow-hidden p-5 object-fill w-full md:w-1/2">
          <img
            src="https://i.ibb.co/VxcGJzj/Web-capture-14-6-2023-14510-toy-hunt-place-web-app.jpg"
            alt="project 1"
            className="shadow-custom  rounded-xl hover:scale-110 duration-500 transition-all"
          />
        </div>
        <div className="px-5 w-full md:w-1/2">
          <h3 className="text-2xl font-semibold">
            ToyHuntPlace: Children's Car Toys-Related Website.
          </h3>
          <p className="py-4 text-lg">
            Responsive MERN Stack project with Firebase authentication with the
            private route and implement user searching and sorting functionality
            With Payment Method-Stripe. Selar can upload his product and update,
            or delete anything, All CURD Functionality is Added. Customers can
            view all products and descriptions and add to cart product. And buy
            also this Products.
          </p>
          <div className="flex items-center justify-center space-x-5">
            <a
              href="https://toy-hunt-place.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                Live Site <FaLaptopCode size={25} className="ml-4" />{" "}
              </button>
            </a>
            <a
              href="https://github.com/hasibahamedsakib/toy-hunt-pace"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn-primary">
                Client Side <FaCode size={25} className="ml-4" />{" "}
              </button>
            </a>

            <a
              href="https://github.com/hasibahamedsakib/toy-hunt-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                Server Side <FaCode size={25} className="ml-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex  justify-around  gap-6  py-16 ">
        <div className="border rounded-lg overflow-hidden p-5 object-fill w-full md:w-1/2">
          <img
            src="https://i.ibb.co/56V7J9z/Web-capture-14-6-2023-1455-chef-hunter-c8bd8-web-app.jpg"
            alt="project 1"
            className="shadow-custom  rounded-xl hover:scale-110 duration-500 transition-all"
          />
        </div>
        <div className="px-5 w-full md:w-1/2">
          <h3 className="text-2xl font-semibold">
            ChefHunter: A Restaurant Chef Related Website.
          </h3>
          <p className="py-4 text-lg">
            This project is a Restaurant Chef Related Website. Project is Full
            Responsive MERN Stack project with Firebase authentication.
            Customers can see all the chefs And details about this chef and his
            best recipes. I am using a Private route for chef details
            information.
          </p>
          <div className="flex items-center justify-center space-x-5">
            <a
              href="https://chef-hunter-c8bd8.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                Live Site <FaLaptopCode size={25} className="ml-4" />{" "}
              </button>
            </a>
            <a
              href="https://github.com/hasibahamedsakib/chef-hunter"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn-primary">
                Client Side <FaCode size={25} className="ml-4" />{" "}
              </button>
            </a>

            <a
              href="https://github.com/hasibahamedsakib/chef-hunter-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                Server Side <FaCode size={25} className="ml-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
