import React, { useState } from "react";
import HeadlessSlideOver from "./HeadlessSlideOver";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../Hooks/useScrollPosition";
import { useLocation } from "react-router-dom";

import Dropdown from "./Dropdown";

// Import Images and Logos
import Logo_INAkademia from "../../Assets/INAkademia-Logo.png";

// import icons
import { IoEyeSharp } from "react-icons/io5";
import { AiFillFlag } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { FaRunning } from "react-icons/fa";
import { useGetUserInfo } from "../../Pages/middleware";
import UsersProfile from "./UsersProfile";

const Nav = (props) => {
  const [user] = useGetUserInfo();

  const location = useLocation();
  const mainPath = location.pathname;
  const lowerPath = mainPath.toLowerCase();
  function removeTrailingSlash(str) {
    return str.endsWith("/") ? str.slice(0, -1) : str;
  }
  const path = removeTrailingSlash(lowerPath);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();

  const pathINAkademia = path === "";

  const pathP2P =
    path === "/p2p" ||
    path === "/p2p/WhatIsP2P" ||
    path === "/student/p2p/p2pSessions" ||
    path === "/p2p/p2pTutoringGroups";

  const pathCommunity =
    path === "/community" || path === "community/Film&Production";

  const pathBePartOfOurTeam = path === "/BeATutor" || path === "/TutorHub";

  const pathSignUp = path === "/signup";

  let menuArray = [
    pathINAkademia,
    pathP2P,
    pathCommunity,
    pathBePartOfOurTeam,
    pathSignUp,
  ];
  const [menu, setMenu] = useState(menuArray);
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);
  const setMenuValue = (props) => {
    let newArr = [...menu];
    newArr[props] = !newArr[props];
    setMenu(newArr);
  };

  function openHandler() {
    setIsHeadlessOpen(true);
  }

  function closeHandler() {
    setIsHeadlessOpen(false);
  }

  return (
    <>
      <nav className="z-20">
        <div
          className={classNames(
            scrollPosition > 0
              ? "z-50 bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]"
              : "lg:bg-inherit lg:drop-shadow-none bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]",
            "lg:flex lg:flex-rows lg:flex-wrap items-center pt-4 sm:pt-5 sm:pb-4 md:py-5 lg:px-18 md:px-10 px-4 lg:py-0 w-full fixed top-0 left-0 justify-between z-[50px] transition-all duration-200",
          )}
        >
          <div className="lg:grid-cols-none grid grid-cols-3 pb-3 sm:pb-0">
            <Link to="/" className="rounded-lg cursor-pointer col-span-2">
              <div className="">
                <img
                  className="object-scale-down h-8 md:h-12 lg:h-16 "
                  alt="inakademia"
                  src={Logo_INAkademia}
                />
              </div>
            </Link>
            <div
              aria-label="toggler"
              className="flex justify-end items-center pr-2 lg:hidden"
            >
              <button
                aria-label="open"
                id="open"
                onClick={() => openHandler()}
                className={`${
                  isHeadlessOpen ? "hidden" : ""
                } focus:outline-none focus:ring-2`}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 18H20"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                aria-label="close"
                id="close"
                onClick={() => closeHandler()}
                className={`${
                  isHeadlessOpen ? "" : "hidden"
                } focus:outline-none focus:ring-2`}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <HeadlessSlideOver
            open={isHeadlessOpen}
            setOpen={setIsHeadlessOpen}
            title="Item Details"
          >
            <div
              id="main"
              className="transform ease-in-out transition duration-500 flex justify-start items-start h-full  w-full bg-white flex-col"
            >
              <div className="flex flex-col justify-start items-center md:items-start px-6 border-b border-gray-600 w-full">
                <button
                  onClick={() => setMenuValue(0)}
                  className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  "
                >
                  <p className="text-sm leading-5 uppercase">P2P</p>
                  <svg
                    id="icon1"
                    className={`${
                      menu[0] ? "" : "rotate-180"
                    } transform duration-200`}
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  id="menu1"
                  className={`${
                    menu[0] ? "flex" : "hidden"
                  } justify-start  flex-col w-full md:w-auto items-start pb-5 `}
                >
                  <button
                    className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${
                      path === "/p2p/WhatIsP2P" ? "font-bold" : "text-gray-500"
                    }`}
                  >
                    <IoEyeSharp size={24} />
                    <p className="text-base leading-4  ">
                      <Link to="/p2p/WhatIsP2P">What is P2P?</Link>
                    </p>
                  </button>
                  <button
                    className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${
                      path === "/student/p2p/p2pSessions"
                        ? "font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    <AiFillFlag size={24} />
                    <p className="text-base leading-4  ">
                      <Link to="/student/p2p/p2pSessions">P2P Sessions</Link>
                    </p>
                  </button>
                  <button
                    className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${
                      path === "/p2p/p2pTutoringGroups"
                        ? "font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    <FaBuilding size={24} />
                    <p className="text-base leading-4">
                      <Link to="/p2p/p2pTutoringGroups">
                        P2P Tutoring Groups
                      </Link>
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center md:items-start px-6 border-b border-gray-600 w-full">
                <button
                  onClick={() => setMenuValue(1)}
                  className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  "
                >
                  <p className="text-sm leading-5 uppercase">Community</p>
                  <svg
                    id="icon2"
                    className={`${
                      menu[1] ? "" : "rotate-180"
                    } transform duration-200`}
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    menu[1] ? "flex" : "hidden"
                  } justify-start  flex-col w-full md:w-auto items-start pb-5 `}
                >
                  <button
                    className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${
                      path === "/community" ? "font-bold" : "text-gray-500"
                    }`}
                  >
                    <FaUniversity size={24} />
                    <p className="text-base leading-4  ">
                      <Link to="/community">Community</Link>
                    </p>
                  </button>
                  <button
                    className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${
                      path === "/community" ? "font-bold" : "text-gray-500"
                    }`}
                  >
                    <FaUniversity size={24} />
                    <p className="text-base leading-4  ">
                      <Link to="/community/Film&Production">
                        Film & Production
                      </Link>
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center md:items-start px-6 border-b border-gray-600 w-full">
                <button
                  onClick={() => setMenuValue(2)}
                  className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  "
                >
                  <p className="text-sm leading-5  uppercase">
                    Be Part Of Our Team!
                  </p>
                  <svg
                    id="icon3"
                    className={`${
                      menu[2] ? "" : "rotate-180 "
                    } transform duration-200`}
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    menu[2] ? "flex" : "hidden"
                  } justify-start  flex-col w-full md:w-auto items-start pb-5 `}
                >
                  <button
                    className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${
                      path === "/bepartofourteam"
                        ? "font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    <IoIosPaperPlane size={24} />
                    <p className="text-base leading-4 ">
                      <Link to="/BeATutor">Be a Tutor!</Link>
                    </p>
                  </button>
                  <button
                    className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${
                      path === "/bepartofourteam"
                        ? "font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    <IoIosPaperPlane size={24} />
                    <p className="text-base leading-4  ">
                      <Link to="/TutorHub">Tutor Hub</Link>
                    </p>
                  </button>
                  <button
                    className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${
                      path === "/bepartofourteam"
                        ? "font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    <IoIosPaperPlane size={24} />
                    <p className="text-base leading-4  ">
                      <Link to="/tutor/JadwalkanSesi">Schedule a Session</Link>
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-start  md:items-start px-6 w-full">
                {user?.userId ? (
                  <UsersProfile user={user} className={"mt-5"} />
                ) : (
                  <>
                    <button
                      onClick={() => setMenuValue(3)}
                      className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  "
                    >
                      <p className="text-sm leading-5  uppercase">Sign Up</p>
                      <svg
                        id="icon3"
                        className={`${
                          menu[3] ? "" : "rotate-180 "
                        } transform duration-200`}
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 15L12 9L6 15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      className={`${
                        menu[3] ? "flex" : "hidden"
                      } justify-start  flex-col w-full md:w-auto items-start pb-5 `}
                    >
                      <button
                        className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${
                          path === "/signup" ? "font-bold" : "text-gray-500"
                        }`}
                      >
                        <FaRunning size={24} />
                        <p className="text-base leading-4  ">
                          <Link to="/signup">Sign Up!</Link>
                        </p>
                      </button>
                      <button
                        className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${
                          path === "/signup" ? "font-bold" : "text-gray-500"
                        }`}
                      >
                        <FaRunning size={24} />
                        <p className="text-base leading-4  ">
                          <Link to="/signin">Log In!</Link>
                        </p>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </HeadlessSlideOver>
          <div className="lg:items-center lg:w-auto w-full sm:pt-1 lg:py-5 leading-normal hidden lg:block ">
            <div className="flex flex-rows place-items-center gap-4 sm:gap-8 md:gap-3 md:justify-end lg:justify-center">
              <Dropdown
                title="P2P"
                class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl
                            ${
                              path === "/p2p" ||
                              path === "/p2p/WhatIsP2P" ||
                              path === "/student/p2p/p2pSessions" ||
                              path === "/p2p/p2pTutoringGroups"
                                ? "link-underline-static drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]"
                                : "link-underline"
                            }`}
                dir1="/p2p/WhatIsP2P"
                dir2="/student/p2p/p2pSessions"
                dir3="/p2p/p2pTutoringGroups"
                menu1="What is P2P?"
                menu2="P2P Sessions"
                menu3="P2P Tutoring Groups"
                smak1={true}
              />
              <Dropdown
                title="Community"
                class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl
                            ${
                              path === "/community" ||
                              path === "community/Film&Production"
                                ? "link-underline-static drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]"
                                : "link-underline"
                            }`}
                dir1="/community"
                dir2="/community/Film&Production"
                menu1="Community"
                menu2="Film & Production"
                osis={true}
              />
              <Dropdown
                title="Be Part Of Our Team!"
                class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl
                            ${
                              path === "/TutorHub"
                                ? "link-underline-static drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]"
                                : "link-underline"
                            }`}
                dir1="/BeATutor"
                dir2="/TutorHub"
                menu1="Be a Tutor!"
                menu2="Tutor Hub"
                Kehidupan={true}
              />
              {user?.userId ? (
                <>
                  <UsersProfile user={user} />
                </>
              ) : (
                <Dropdown
                  title="Sign Up"
                  class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl
                            ${
                              path === "/signup"
                                ? "link-underline-static drop-shadow-[0_15px_12px_rgba(0,0,0,0.5)]"
                                : "link-underline"
                            }`}
                  dir1="/signup"
                  dir2="/signin"
                  menu1="Sign Up"
                  menu2="Log In"
                  kegiatan={true}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
