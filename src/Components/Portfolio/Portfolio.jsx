import { Link } from "react-router-dom";
import HrLine from "../HrLine/HrLine";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FaCode, FaLaptopCode } from "react-icons/fa";
const Portfolio = () => {
  return (
    <div className="Container text-[#333]">
      <HrLine />
      <div className="flex justify-between items-center">
        <SectionHeader title="Portfolio" text="MY LATEST WORK." />
        <Link to="/all-works">
          <button className="btn-primary">All My Works Here</button>
        </Link>
      </div>

      <div className="block md:flex justify-around  gap-6  pt-16 ">
        <div className="border rounded-lg overflow-hidden p-5 object-fill w-full md:w-1/2">
          <img
            src="https://i.ibb.co.com/2tnDxL7/Screenshot-22-10-2024-1156-www-bazar365-com.jpg"
            alt="Bazar365"
            className="shadow-custom  rounded-xl hover:scale-110 duration-500 transition-all"
          />
        </div>
        <div className="px-5 w-full md:w-1/2">
          <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold">
            Bazar365:Eco Friendly Online Grocery Platform
          </h3>
          <p className="py-4 text-sm sm:text-base">
            Bazar365 is a pioneering sustainable online grocery platform focused
            on tackling the global challenge of plastic pollution. By offering
            eco-friendly products and packaging, it aims to promote sustainable
            living and reduce environmental impact. Bazar365 is committed to
            providing consumers with convenient access to responsibly sourced
            groceries while encouraging a shift towards more sustainable
            practices.
          </p>
          <div className="flex items-center justify-center space-x-5">
            <a
              href="https://bazar365.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                Live Site <FaLaptopCode size={25} className="ml-4" />{" "}
              </button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {" "}
              <button className="btn-primary">
                Client Side <FaCode size={25} className="ml-4" />{" "}
              </button>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">
                Server Side <FaCode size={25} className="ml-4" />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="md:flex md:flex-row-reverse justify-around  gap-6  pt-16 ">
        <div className="border rounded-lg overflow-hidden p-5 object-fill w-full md:w-1/2">
          <img
            src="https://i.ibb.co.com/8DjZ9qm/Screenshot-22-10-2024-1160-constree-netlify-app.jpg"
            alt="constre"
            className="shadow-custom  rounded-xl hover:scale-110 duration-500 transition-all"
          />
        </div>
        <div className="px-5 w-full md:w-1/2">
          <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold">
            Constre: Construction Related Website.
          </h3>
          <p className="py-4 text-sm sm:text-base">
            This React.js and Tailwind CSS template is designed for a
            construction-related business website and optimized for modern,
            responsive design. With a sleek user interface and vibrant color
            scheme, it offers a professional look that appeals to property
            development firms. Key features include clean navigation,
            customizable sections, and integration with popular platforms,
            making it ideal for showcasing services and projects effectively on
            ThemeForest.
          </p>
          <div className="flex items-center justify-center space-x-5">
            <a
              href="https://constree.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                Live Site <FaLaptopCode size={25} className="ml-4" />{" "}
              </button>
            </a>
            <a
              href="https://github.com/hasibahamedsakib/constre"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn-primary">
                Client Side <FaCode size={25} className="ml-4" />{" "}
              </button>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">
                Server Side <FaCode size={25} className="ml-4" />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="block md:flex justify-around  gap-6  pt-16 ">
        <div className="border rounded-lg overflow-hidden p-5 object-fill w-full md:w-1/2">
          <img
            src="https://i.ibb.co.com/bHgKXNB/Screenshot-22-10-2024-11354-royella-netlify-app.jpg"
            alt="Royella"
            className="shadow-custom  rounded-xl hover:scale-110 duration-500 transition-all"
          />
        </div>
        <div className="px-5 w-full md:w-1/2">
          <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold">
            Royella: Hotel Booking/Management Related Website
          </h3>
          <p className="py-4 text-sm sm:text-base">
            Royella is a sleek and modern React.js and Tailwind CSS hotel
            booking and management template, now approved and available for sale
            on ThemeForest. It features a responsive layout and intuitive
            navigation, making it ideal for hotels to enhance their online
            presence. With customizable components and robust functionality,
            Constre streamlines the booking process while providing an elegant
            interface for both guests and administrators.
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
      <div className="block md:flex justify-around  gap-6  pt-16 ">
        <div className="border rounded-lg overflow-hidden p-5 object-fill w-full md:w-1/2">
          <img
            src="https://i.ibb.co/VvSBt3r/Web-capture-14-6-2023-162752-articio-client-web-app.jpg"
            alt="project 1"
            className="shadow-custom  rounded-xl hover:scale-110 duration-500 transition-all"
          />
        </div>
        <div className="px-5 w-full md:w-1/2">
          <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold">
            Articio: Summer Camp Art-School Related Website
          </h3>
          <p className="py-4 text-sm sm:text-base">
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

      <div className="md:flex md:flex-row-reverse justify-around  gap-6  pt-16 ">
        <div className="border rounded-lg overflow-hidden p-5 object-fill w-full md:w-1/2">
          <img
            src="https://i.ibb.co/VxcGJzj/Web-capture-14-6-2023-14510-toy-hunt-place-web-app.jpg"
            alt="project 1"
            className="shadow-custom  rounded-xl hover:scale-110 duration-500 transition-all"
          />
        </div>
        <div className="px-5 w-full md:w-1/2">
          <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold">
            ToyHuntPlace: Children's Car Toys-Related Website.
          </h3>
          <p className="py-4 text-sm sm:text-base">
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

      <div className="md:flex justify-around  gap-6  py-16 ">
        <div className="border rounded-lg overflow-hidden p-5 object-fill w-full md:w-1/2">
          <img
            src="https://i.ibb.co/56V7J9z/Web-capture-14-6-2023-1455-chef-hunter-c8bd8-web-app.jpg"
            alt="project 1"
            className="shadow-custom  rounded-xl hover:scale-110 duration-500 transition-all"
          />
        </div>
        <div className="px-5 w-full md:w-1/2">
          <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold">
            ChefHunter: A Restaurant Chef Related Website.
          </h3>
          <p className="py-4 text-sm sm:text-base">
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
