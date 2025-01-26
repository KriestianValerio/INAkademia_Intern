import React from 'react';
import Nav from '../Components/Navbar/Nav';


function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
        <Nav osisl/>
        <div className="text-center">
            <img
                src="/assets/images/bridge.png"
                className="max-w-[400px] w-full mx-auto"
                alt=""
            />
            <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
            <p className="text-lg mb-8">We're working hard to get this page ready for you. Stay tuned!</p>
            <div className="flex justify-center space-x-4">
                <a
                    href="#"
                    class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Youtube"
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
                </a>
                <a
                href="#"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Instagram"
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
            </div>
        </div>
    </div>
  );
}

export default ComingSoon;
