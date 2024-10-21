import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  BsArrowRight,
  BsArrowRightCircle,
  BsArrowUpRightSquareFill,
  BsCheckCircle,
  BsCodeSquare,
} from "react-icons/bs";
import { TbCodeDots } from "react-icons/tb";
import { AiOutlineCloseCircle } from "react-icons/ai";
import HrLine from "../HrLine/HrLine";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Link } from "react-router-dom";

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="Container">
      <HrLine />
      <SectionHeader title="Services" text="My offerings !" />

      {/* service part */}
      <div className="py-10 block  md:flex justify-center md:space-x-6 space-y-5 md:space-y-0 items-center text-[#333]">
        <div className="bg-white w-full md:w-[400px] p-10 border rounded-lg  ">
          <span className="mx-auto">
            <BsCodeSquare size={40} />
          </span>
          <div>
            <h1 className="text-xl font-semibold py-3">Product Developer</h1>
            <Link
              title="click me and View Details"
              className="flex items-center "
              onClick={() => setIsOpen(true)}
            >
              View More{" "}
              <BsArrowRightCircle className="ml-2  hover:scale-105" size={25} />{" "}
            </Link>
          </div>
          {/* Modal Code */}

          <>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setIsOpen(false)}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900 flex justify-between"
                        >
                          <h1></h1>
                          <button onClick={() => setIsOpen(false)}>
                            <AiOutlineCloseCircle size={25} />
                          </button>
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="text-center py-3">
                            <h3 className="text-2xl font-medium leading-6 text-[#333]">
                              Product Developer
                            </h3>
                            <p className="text-sm text-gray-600 py-2">
                              Providing quality work to clients or organization.
                            </p>
                          </div>

                          <div className="space-y-3 text-gray-600 p-6">
                            <p className="flex  items-center ">
                              <BsCheckCircle className="mr-2" size={15} /> I
                              develop web pages.
                            </p>
                            <p className="flex  items-center ">
                              <BsCheckCircle className="mr-2" size={15} /> Api
                              integration at frontend.
                            </p>
                            <p className="flex  items-center ">
                              <BsCheckCircle className="mr-2" size={15} />{" "}
                              Clean, scalable and reusable code.
                            </p>
                          </div>
                        </div>

                        <div className="mt-4"></div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </>
        </div>
        <div className="bg-white w-full md:w-[400px] p-10 border rounded-lg ">
          <span className="mx-auto">
            <TbCodeDots size={40} />
            <div>
              <h1 className="text-xl font-semibold py-3">Api Developer</h1>
              <Link
                title="click me and View Details"
                className="flex items-center "
                onClick={() => setIsOpen2(true)}
              >
                View More{" "}
                <BsArrowRightCircle
                  className="ml-2 hover:scale-105"
                  size={25}
                />{" "}
              </Link>
            </div>
          </span>
          {/* Modal Code */}
          <>
            <Transition appear show={isOpen2} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setIsOpen2(false)}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900 flex justify-between"
                        >
                          <h1></h1>
                          <button onClick={() => setIsOpen2(false)}>
                            <AiOutlineCloseCircle size={25} />
                          </button>
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="text-center py-3">
                            <h3 className="text-2xl font-medium leading-6 text-[#333]">
                              Api Developer
                            </h3>
                            <p className="text-sm text-gray-600 py-2">
                              Providing quality work to clients or organization.
                            </p>
                          </div>

                          <div className="space-y-3 text-gray-600 p-6">
                            <p className="flex  items-center ">
                              <BsCheckCircle className="mr-2" size={15} /> I
                              develop backend endpoints.
                            </p>
                            <p className="flex  items-center ">
                              <BsCheckCircle className="mr-2" size={15} />{" "}
                              Password hashing.
                            </p>
                            <p className="flex  items-center ">
                              <BsCheckCircle className="mr-2" size={15} />{" "}
                              Authorization/Authentication using JWT.
                            </p>
                          </div>
                        </div>

                        <div className="mt-4"></div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </>
        </div>
      </div>
    </div>
  );
};

export default Service;
