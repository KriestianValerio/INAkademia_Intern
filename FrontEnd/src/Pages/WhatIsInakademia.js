import React from 'react';
import { Link } from 'react-router-dom'

// Import Component
import Nav from '../Components/Navbar/Nav';

// Import Images and Logos
import Word_Logo from '../Assets/wordmark_inakademia.png'
import Logo from '../Assets/INAkademia-Logo.png'

import Footer from '../Components/Footer/footer';

const WhatIsInakademia = () => {
    return (
        <div className="overflow-hidden">
            <Nav osisl/>
            <div className='col-span-6 flex flex-col justify-start text-left pt-18 bg-gray-100'>
                <div className='px-5 md:px-10 lg:px-16 xl:px-20 pt-10 lg:pt-20 pb-0 md:pb-24 lg:pb-12 xl:pb-16'>
                    <img src={Word_Logo} className="md:mx-auto lg:mx-[0.1rem] object-cover w-full md:h-[20rem] z-[1px] md:w-[20rem] lg:h-[24] lg:w-full xl:h-[24] rounded-2xl" alt=''/>
                </div>
            </div>
            <div className="bg-white w-screen z-100 py-8 pt-20 drop-shadow-md md:px-0 px-5"
            style={{ boxShadow: "0px -5px 20px 0px rgba(0, 0, 0, 0.25)" }}>
                <div className="flex flex-col px-5 md:px-24 lg:px-36">
                    <div className="font-[ClashDisplay] text-lg md:text-3xl lg:text-5xl">What Is INAkademia?</div>
                    <div className="font-[PlusJakartaSansMed] text-justify pt-2 text-sm md:text-base">
                    INAkademia adalah organisasi yang berorientasi pada dampak. Visi kami adalah untuk mewujudkan generasi muda yang cerdas, profesional, berakhlak mulia, 
                    dan memiliki hati untuk membantu sesama dan berdampak bagi bangsa. Untuk merealisasikan hal tersebut, kami menyediakan sebuah platform dimana peers dapat berkolaborasi 
                    dan belajar bersama, sebuah komunitas dimana dapat terbangun hubungan teman-mentor, serta menjadi tempat dimana peers dapat mengembangkan minat mereka melalui kolaborasi 
                    intragenerasi, bahkan antargenerasi. Secara singkat, kami ada untuk Menghubungkan (Connect), Memfasilitasi (Facilitate), dan Mendidik (Educate) generasi muda.
                    </div>
                    <div className="grid grid-cols-5 bg-white z-100 py-4 mt-16 drop-shadow-md px-5 md:px-12 rounded-2xl mb-12"
                    style={{ boxShadow: "5px rgba(0, 0, 0, 0.25)" }}>
                        <div className="col-span-4">
                            <div className="font-[PlusJakartaSansMed] text-sm lg:text-lg">Dengan mengusung tiga nilai utama kami, yaitu</div>
                            <div className="font-[PlusJakartaSansMed] italic text-lg lg:text-3xl font-bold mt-1 lg:mt-2">"<span className="text-red-600"> Berdampak, Terhubung, Terbuka</span>"</div>
                            <div className="font-[PlusJakartaSansMed] text-sm lg:text-lg mt-7 lg:mt-12">Kami merancang program-program inovatif yang berorientasi ke depan, dengan tujuan untuk</div>
                            <div className="font-[PlusJakartaSansMed] italic text-lg lg:text-3xl font-bold mt-1 lg:mt-2">"<span className="text-red-600"> Impact the generation one peer at a time</span>"</div>
                        </div>
                        <div className="md:my-auto">
                            <img src={Logo}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WhatIsInakademia