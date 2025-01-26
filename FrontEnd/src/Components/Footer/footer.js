import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Icon for Email, Instagram, Line, and Youtube
import { ImMail2 } from "react-icons/im";
import {
  FaYoutubeSquare,
  FaTiktok,
  FaInstagramSquare,
  FaInstagram,
} from "react-icons/fa";

import Logo_INAkademia from "../../Image/WordLogoTransparentCropped.png";

const Footer = () => {
  return (
    <div
      class="font-[PlusJakartaSansMed] bg-white w-screen z-100 py-8 pt-28 drop-shadow-md md:px-0 px-5"
      style={{ boxShadow: "0px -5px 20px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div class="flex flex-col items-center text-center">
        <div className="text-2xl md:text-4xl lg:text-5xl font-black">
          "Berdampak. Terhubung. Terbuka"
        </div>
        <div className="mt-8 text-sm md:text-lg lg:text-xl max-w-[700px]">
          A platform to collaborate and learn collectively, a community where
          peer-mentor relationships are built, and a hub where interests are
          developed through collaborations within and across generations
        </div>
      </div>

      <hr class="my-10 border-gray-200 dark:border-gray-700" />

      <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a href="#">
          <img class="w-auto xl:h-10 lg:h-8 h-6" src={Logo_INAkademia} alt="" />
        </a>

        <p class="md:-ml-16 lg:-ml-32 xl:-ml-40 text-md xl:text-lg text-center">
          @2024 INAkademia. All Rights Reserved.
        </p>

        <div class="flex -mx-2 ">
        <a
            href="mailto:inakademia.hub@gmail.com"
            class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Email"
            target="_blank"
          >    
            <svg fill="#000000" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.294 75.294"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"></path> </g> </g></svg>
          </a>
          <a
            href="https://www.instagram.com/inakademia_hub/"
            class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Instagram"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0002 11.3703C16.1236 12.2025 15.9815 13.0525 15.594 13.7993C15.2065 14.5461 14.5933 15.1517 13.8418 15.53C13.0903 15.9082 12.2386 16.0399 11.408 15.9062C10.5773 15.7726 9.80996 15.3804 9.21503 14.7855C8.62011 14.1905 8.22793 13.4232 8.09426 12.5925C7.9606 11.7619 8.09226 10.9102 8.47052 10.1587C8.84878 9.40716 9.45438 8.79404 10.2012 8.40654C10.948 8.01904 11.7979 7.87689 12.6302 8.0003C13.4791 8.12619 14.265 8.52176 14.8719 9.12861C15.4787 9.73545 15.8743 10.5214 16.0002 11.3703Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 6.5H17.51"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>

          {/* <a
            href="#"
            class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Youtube"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5401 6.42C22.4213 5.94541 22.1794 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6001 4.42C18.8801 4 12.0001 4 12.0001 4C12.0001 4 5.12008 4 3.40008 4.46C2.92933 4.59318 2.50206 4.84824 2.16143 5.19941C1.8208 5.55057 1.57887 5.98541 1.46008 6.46C1.1453 8.20556 0.991319 9.97631 1.00008 11.75C0.988863 13.537 1.14285 15.3213 1.46008 17.08C1.59104 17.5398 1.83839 17.9581 2.17823 18.2945C2.51806 18.6308 2.9389 18.8738 3.40008 19C5.12008 19.46 12.0001 19.46 12.0001 19.46C12.0001 19.46 18.8801 19.46 20.6001 19C21.0708 18.8668 21.4981 18.6118 21.8387 18.2606C22.1794 17.9094 22.4213 17.4746 22.5401 17C22.8524 15.2676 23.0064 13.5103 23.0001 11.75C23.0113 9.96295 22.8573 8.1787 22.5401 6.42Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.75 15.0205L15.5 11.7505L9.75 8.48047V15.0205Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
