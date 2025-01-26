import React from 'react';
import { Link } from 'react-router-dom'
import Logo_INAkademia from "../Assets/INAkademia-Logo.png";



import Nav from '../Components/Navbar/Nav';
import Footer from '../Components/Footer/footer';
// Import Images and Logos
import logo_2 from '../Assets/logo_2.png';

const About = () => {
    return (
      <div className="overflow-x-hidden">
        {/* Navigation */}
        <Nav osisl />
  
        {/* Logo Section */}
        <div className="flex justify-center items-center">
        <img
            src={logo_2}
            alt="Inakademia Logo"
            className="max-w-sm block mt-60"
        />
        </div>
  
        {/* SVG Section */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 230"
            style={{ filter: 'drop-shadow(0px -70px 50px rgba(0,0,0,0.10))' }}
          >
            <path
              fill="#fcfcfc"
              fillOpacity="1"
              d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,154.7C840,128,960,96,1080,106.7C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
  
        {/* Main Content Section */}
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="ml-30 sm:ml-60 font-['ClashDisplay'] text-4xl sm:text-5xl lg:text-6xl mb-6">
            What Is INAkademia?
          </div>
  
          {/* Paragraph Section */}
          <p className="text-justify font-[PlusJakartaSansMed] text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
          INAkademia adalah organisasi yang berorientasi pada dampak. Visi kami adalah untuk mewujudkan generasi muda yang cerdas, profesional, berakhlak mulia,
           dan memiliki hati untuk membantu sesama dan berdampak bagi bangsa. Untuk merealisasikan hal tersebut, kami menyediakan sebuah platform dimana peers dapat berkolaborasi
            dan belajar bersama, sebuah komunitas dimana dapat terbangun hubungan teman-mentor, serta menjadi tempat dimana peers dapat mengembangkan minat mereka melalui kolaborasi intragenerasi, bahkan antargenerasi. 
          Secara singkat, kami ada untuk Menghubungkan (Connect), Memfasilitasi (Facilitate), dan Mendidik (Educate) generasi muda.

            
          </p>
  
          {/* Highlight Section */}
          <div
            className="rounded-lg bg-white p-8 mt-12 m-20 max-w-4xl mx-auto"
            style={{ boxShadow: '0 0 50px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="grid grid-cols-3 gap-4 items-center">
              {/* Text Section */}
              <div className="col-span-2">
                <p className="text-sm sm:text-xl leading-relaxed text-gray-700">
                  Dengan mengusung tiga nilai utama kami, yaitu
                  <br />
                  <span className="font-bold italic text-red-500">
                    “Berdampak, Terhubung, Terbuka”
                  </span>
                </p>
                <p className="mt-4 text-sm sm:text-lg leading-relaxed text-gray-600">
                  Kami merancang program-program inovatif yang berorientasi ke depan, dengan tujuan untuk
                  <br />
                  <span className="font-bold italic sm:text-xl text-red-500">
                    “Impact the generation one peer at a time”
                  </span>
                </p>
              </div>
  
              {/* Logo Section */}
              <div className="flex justify-center">
                <img
                  src={Logo_INAkademia}
                  alt="Logo"
                  className="h-40 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  };
  
  export default About;