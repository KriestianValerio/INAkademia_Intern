import React from 'react';

// Import Component
import Nav from '../Components/Navbar/Nav';
import Footer from '../Components/Footer/footer';
import HomeParticle from '../Components/Home/HomeParticle';
import CarouselProgram from '../Components/Carousel/CarouselProgram'


// Import Images and Logos
import WhatIsP2P from '../Images/about us foto.png';
import OurMission from '../Images/zoom meeting.png'
import InakademiaWA from '../Assets/InakademiaWord.png'
import Peer2PeerTutoring from '../Images/Community7.JPG'
import CheckCircle from '../Assets/check-circle.svg'
import CheckCircleWhite from '../Assets/check-circle-white.png'
import MathLabImage from '../Images/mathlabimage.png'
import MathLabLogo from '../Image/mathlablogo.png'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Import Videos

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Home = () => {

    const testimonials = [
  {
    name: "Rizky",
    text: "\"Menurut saya INAkademia ini merupakan suatu program tutoring yang sangat keren dan inspiratif. Selain diajar oleh tutor yang sangat berpengalaman dan keren, kita juga tidak dipungut biaya sepeserpun lohhh. Jadii yuk buat teman\" diluar sana segera join INAkademia P2P dan juga Community and improve our skills together with INAkademia 🙌🏻”\n",
  },
  {
    name: "Naufal",
    text: "\"Program P2P gratis Inakademia ini sangat membantu saya dalam memahami pelajaran sekolah bahkan lebih duluan dibanding teman2 saya di sekolah. Materi yang diajarkan tutor sangat mudah dimengerti loo guyss dan tutornya sangat OP dan friendly. Fisika MTK diajarkan mulai dari konsep dasar, latihan soal dan trik2 yang mungkin tidak diajarkan disekolah. So tunggu apa lagi. Yuks join Inakademia!”\n",
  },
  {
    name: "Rafael",
    text: "\"Shout out to tutors of INAkademia. Jujur membantu banget buat lebih memahami pelajaran di sekolah. Sebuah pengalaman yang berkesan dan profesional.”\n",
  },
];

    return (
        <div className='overflow-hidden'>
            <Nav osisl/>

            <div className="mb-[-1] relative w-screen h-screen flex justify-start items-center bg-white overflow">
                <div className="flex justify-center items-center">
                    <div
                        className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-red-600/100 to-transparent"></div>
                    <div
                        className="z-30 absolute bottom-[-100px] lg:bottom-[-200px] right-[-200px] w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-tl from-red-600/100 to-transparent"></div>
                    </div>
                <div className="text-left flex justify-center items-start mx-5 sm:mx-auto md:ml-10 lg:ml-20 md:mx-0 mt-20">
                    <div>
                        <div className="font-['ClashDisplay'] text-3xl sm:text-6xl lg:text-7xl xl::text-8xl text-gray-800">Welcome to</div>
                        <img
                            src={InakademiaWA}
                            alt="INakademiaWordArt"
                            className="w-[270px] sm:w-[500px] xl:w-[750px] mx-auto"
                        />

                        <img
                            src={InakademiaWA}
                            alt="ReflectedInakademiaWordArt"
                            className="w-[270px] sm:w-[500px] xl:w-[750px] mx-auto mt-[-10px] md:mt-[-20px] opacity-15 transform scale-y-[-1]"
                        />
                    </div>
                </div>
            </div>

            <div
                className="z-20 md:pt-10 relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center overflow-hidden"
                style={{backgroundImage: `url(${MathLabImage})`}}
            >
                <div
                    className="absolute z-0 top-0 w-full h-[15vw] min-h-[60px] max-h-[160px] sm:max-h-[130px] md:max-h-[125px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"
                         className="w-full h-full">
                        <path
                            fill="#FFFFFF"
                            fillOpacity="1"
                            d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,186.7C672,192,768,192,864,170.7C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        ></path>
                    </svg>
                </div>

                <div
                    className="-z-10 md:mx-auto relative bg-center w-screen min-h-screen flex flex-col justify-center items-center text-center bg-opacity-75 bg-[#273273CC] overflow-visible">
                    <img className="min-w-320 sm:min-w-600 md:w-[700px] lg:mt-4" src={MathLabLogo} alt="MathLabLogo"/>
                    <div className="flex flex-col justify-start items-start mx-6 md:mx-0">
                        <h2 className="font-['ClashDisplay'] mt-2 text-xl sm:text-2xl md:text-3xl font-medium text-gray-200">by <span
                            className="font-bold">Kenji Gunawan</span>
                        </h2>
                        <p className="text-justify mt-4 max-w-2xl text-xs sm:text-base md:text-lg text-gray-300">
                            Sebuah kelas Matematika yang dirancang untuk mengupas dan mengajarkan penerapan
                            praktis matematika dalam kehidupan sehari-hari, serta mempersiapkan pelajar untuk
                            ujian Penalaran Matematika (PM) dan Pengetahuan Kuantitatif (PK) dalam SNBT.
                        </p>
                    </div>
                    <Link to="/student/MathLab" type="button" className="lg:mt-12 sm:my-8 my-4 mt-6 text-white bg-red-500 hover:bg-red-600 font-medium rounded-full text-base lg:text-lg lg:text-xl py-2 px-8 lg:py-3 lg:px-12 text-center me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600">
                        Join Us!
                    </Link>
                </div>

                <div className="pt-5 md:pt-20 absolute bottom-0 w-full h-[15vw] min-h-[60px] max-h-[150px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"
                         className="w-full h-full">
                        <path
                            fill="#FFFFFF"
                            fillOpacity="1"
                            d="M0,224L48,192C96,160,192,96,288,64C384,32,480,32,576,58.7C672,85,768,139,864,149.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </div>


            <div className='w-full h-auto mt-8 pt-16'>

                <div
                    className="relative min-h-screen bg-white flex flex-col items-center px-4 md:px-8 lg:px-12">
                    <div className="absolute top-6 -right-1 grid grid-rows-4 grid-cols-3 gap-3">
                        {Array(12)
                            .fill(0)
                            .map((_, idx) => (
                                <div
                                    key={`top-dot-${idx}`}
                                    className="w-4 h-4  bg-gray-300 rounded-full"
                                ></div>
                            ))}
                    </div>

                    <div className="absolute bottom-56 -left-1 grid grid-rows-4 grid-cols-3 gap-3">
                        {Array(12)
                            .fill(0)
                            .map((_, idx) => (
                                <div
                                    key={`bottom-dot-${idx}`}
                                    className="w-4 h-4 bg-gray-300 rounded-full"
                                ></div>
                            ))}
                    </div>

                    <div
                        className="md:px-20 lg:px-28 flex flex-col md:flex-row items-center w-full md:justify-between space-y-8 md:space-y-0 md:space-x-12">
                        <div
                            className="z-10 overflow-hidden flex-shrink-0 w-56 md:w-72 lg:w-96">
                            <img
                                src={WhatIsP2P}
                                alt="PlaceholderP"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Text Content */}
                        <div className="text-center md:text-right space-y-4">
                            <h2 className="font-['ClashDisplay'] text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl text-gray-900">
                                Meet Our Team!
                            </h2>
                            <p className="md:pb-4 md:mx-0 mx-5 sm:mx-10 font-[PlusJakartaSansMed] text-gray-600 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg pb-12">
                            Tim kami terdiri dari peers yang percaya pada visi dan misi kami, serta sepenuhnya berkomitmen untuk berdampak bagi sesama peers dari berbagai latar belakang.
                            </p>
                            <Link to="/MeetOurTeam" type="button" className="lg:mt-12 sm:my-8 my-4 mt-6 text-white bg-red-500 hover:bg-red-600 font-medium rounded-full text-base lg:text-lg lg:text-xl py-2 px-8 lg:py-3 lg:px-12 text-center me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600">
                                Learn More!
                            </Link>
                        </div>
                    </div>
                    <div className='mt-12'>

                    </div>
                    <div
                        className="pt-18 md:pt-24 md:px-20 lg:px-28  md:flex-row items-center w-full md:justify-between space-y-8 md:space-y-0 md:space-x-20">
                        <div className="text-center md:text-center md:space-y-1 ld:space-y-4">
                            <h2 className="font-['ClashDisplay'] text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl text-gray-900">
                                Our Mission
                            </h2>
                            <p className="pb-4 md:pb-0 text-red-500 text-base sm:text-lg md:text-xl xl:text-2xl font-semibold italic">
                                <span className="text-black">We are</span> Impact-Oriented!
                            </p>
                            <p className="md:mx-0 mx-5 sm:mx-10 pt-3 font-[PlusJakartaSansMed] text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg ">
                                Impact by Connecting, Facilitating, and Educating the generation
                                one peer at a time.
                            </p>
                        </div>
                        {/* <div
                            className="md:py-0 py-10 z-10 overflow-hidden flex-shrink-0 w-56 md:w-72 lg:w-96">
                            <img
                                src={OurMission}
                                alt="Mission"
                                className="w-full h-full bg-cover"
                            />
                        </div> */}
                    </div>
                </div>

                {/*<CarouselProgram className='-mb-32 sm:mb-0'/>*/}

                {/*<div className='container mx-auto'>*/}
                {/*    <div*/}
                {/*        className='-mt-32 sm:mt-0 mx-10 lg:mx-20 xl:mx-36 pt-48 md:grid flex-col md:flex-none grid-cols-none md:grid-cols-3 lg:grid-cols-2 md:grid-rows-none'>*/}
                {/*        <div className='rounded-lg grid place-items-center justify-items-center lg:justify-items-start'>*/}
                {/*            <img src={WhatIsP2P} alt="AboutUs"*/}
                {/*                 className='sm:h-auto w-full xl:w-11/12 rounded-3xl justify-self-center'/>*/}
                {/*        </div>*/}
                {/*        <div className="container mx-auto lg:mt-10 md:flex md:items-center lg:col-span-1 col-span-2">*/}
                {/*            <div className="lg:pl-12 xl:pl-6 md:pl-14 flex flex-col md:items-end">*/}
                {/*                <div*/}
                {/*                    className="mt-4 sm:mt-10 md:mt-0 lg:-mt-10 text-left font-['ClashDisplay'] md:text-right text-2xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-6xl leading-normal lg:pl-12 sm:pt-0 lg:pt-12">*/}
                {/*                    <div>Meet Our Team!</div>*/}
                {/*                </div>*/}
                {/*                <div*/}
                {/*                    className="text-justify md:text-right text-sm xs:text-normal sm:text-lg md:text-lg lg:text-lg xl:text-xl leading-normal lg:place-content-end">*/}
                {/*                    <p className="mr-2 pt-2">A platform to collaborate and learn collectively,*/}
                {/*                        a community where peer-mentor relationships are built,*/}
                {/*                        and a hub where interests are developed through collaborations within and across*/}
                {/*                        generations.*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*                <div className='grid pt-8 place-items-start'>*/}
                {/*                    <a className="bg-red text-white text-base sm:text-lg md:text-xl font-black"*/}
                {/*                       target="blank">*/}
                {/*                        <button type="button"*/}
                {/*                                className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-full text-lg py-3 px-12 text-center me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600">*/}
                {/*                            Join Us!*/}
                {/*                        </button>*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className='bg-[##f2f5f6]'>
                    <div className="relative">
                        <svg
                            className="absolute w-full h-auto drop-shadow-xl"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 900 320"
                        >
                            <path
                                fill="#ffffff"
                                fillOpacity="1"
                                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,106.7C672,85,768,75,864,101.3C960,128,1056,192,1152,202.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                            ></path>
                        </svg>
                    </div>

                    <section className="pb-32 bg-[#f2f5f6] pt-[200px] md:pt-[300px] lg:pt-[400px] ">
                        <h2 className="text-2xl font-bold text-center mb-16 text-2xl sm:text-3xl md:text-4xl text-center text-black capitalize lg:text-6xl ">
                            Why INAkademia? Ini kata mereka!
                        </h2>
                        <div
                            className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 px-4">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-between bg-[#D9D9D9] p-6 rounded-lg shadow-lg max-w-xs w-full md:w-1/3"
                                >
                                    <div className="overflow-y-auto max-h-32 text-gray-700 text-sm mb-2">
                                        {testimonial.text}
                                    </div>
                                    <div className="flex flex-col items-center mt-4">
                                        <h3 className="text-lg font-semibold">~ {testimonial.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/*                    <div className='font-[PlusJakartaSansMed]  container px-6 pb-32 pt-[200px] md:pt-[300px] lg:pt-[400px] mt-40 mx-auto'>*/}
                    {/*                        <h1 className="font-[CLashDisplay] text-2xl sm:text-3xl md:text-4xl text-center text-black capitalize lg:text-6xl">Why*/}
                    {/*                            Inakademia? Ini kata mereka!</h1>*/}
                    {/*                        <div className=' grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 mt-16 xl:grid-cols-3 '>*/}
                    {/*                            <div className="bg-[#d9d9d9] flex flex-col items-center p-8 rounded-xl">*/}
                    {/*                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-[#d9d9d9]"*/}
                    {/*                                     src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"*/}
                    {/*                                     alt=""/>*/}
                    {/*                                <h1 className="mt-4 text-2xl md:text-3xl font-semibold text-center text-black capitalize  ">Rizky</h1>*/}
                    {/*                                <p className="mt-6 mb-2 text-xs sm:text-md md:text-base text-black -mx-4 md:px-6 text-center">*/}
                    {/*                                "Menurut saya INAkademia ini merupakan suatu program tutoring yang sangat keren dan inspiratif. Selain diajar oleh tutor yang sangat berpengalaman dan keren, kita juga tidak dipungut biaya sepeserpun lohhh. Jadii yuk buat teman" diluar sana segera join INAkademia P2P dan juga Community and improve our skills together with INAkademia 🙌🏻”*/}
                    {/*                                </p>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="bg-[#d9d9d9] flex flex-col items-center p-8 rounded-xl">*/}
                    {/*                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-[#d9d9d9]"*/}
                    {/*                                     src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"*/}
                    {/*                                     alt=""/>*/}
                    {/*                                <h1 className="mt-4 text-2xl md:text-3xl font-semibold text-center text-black capitalize   ">Naufal</h1>*/}
                    {/*                                <p className="mt-6 mb-2 text-xs sm:text-md md:text-base text-black -mx-4 sm:mx-0 md:px-6 text-center">"Program P2P gratis Inakademia ini sangat membantu saya dalam memahami pelajaran sekolah bahkan lebih duluan dibanding teman2 saya di sekolah. Materi yang diajarkan tutor sangat mudah dimengerti loo guyss dan tutornya sangat OP dan friendly. Fisika MTK diajarkan mulai dari konsep dasar, latihan soal dan trik2 yang mungkin tidak diajarkan disekolah. So tunggu apa lagi. Yuks join Inakademia!”*/}
                    {/*</p>*/}
                    {/*                            </div>*/}
                    {/*                            <div*/}
                    {/*                                className="bg-[#d9d9d9] lg:col-span-2 xl:col-span-1 flex flex-col items-center p-8 rounded-xl">*/}
                    {/*                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-[#d9d9d9]"*/}
                    {/*                                     src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"*/}
                    {/*                                     alt=""/>*/}
                    {/*                                <h1 className="mt-4 text-2xl md:text-3xl font-semibold text-center text-black capitalize    ">Rafael Jose</h1>*/}
                    {/*                                <p className="mt-6 mb-2 text-xs sm:text-md md:text-base text-black -mx-4 md:px-8 text-center">"Shout out to tutors of INAkademia. Jujur membantu banget buat lebih memahami pelajaran di sekolah. Sebuah pengalaman yang berkesan dan profesional.”*/}
                    {/*</p>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                </div>


                {/*    <div className='relative mb-10 mt-20 w-screen'>*/}
                {/*        <img src={Peer2PeerTutoring}*/}
                {/*             className=" object-cover h-[1300px] md:h-[750px] w-full min-w-screen absolute -z-10" alt=''/>*/}
                {/*        <div className='font-[PlusJakartaSansMed] flex flex-col items-center py-7'>*/}
                {/*            <div*/}
                {/*                className='grid grid-cols-1 mx-2 sm:mx-10 lg:mx-32 xl:mx-68 md:gap-8 gap-14 lg:gap-24 mt-6 xl:mt-16 md:grid-cols-2'>*/}
                {/*                <div*/}
                {/*                    className="w-full pt-5 sm:pt-7 md:pt-10 p-6 sm:p-10 text-center border bg-white rounded-2xl">*/}
                {/*                    <p className="text-2xl sm:text-3xl text-black">Join us as a</p>*/}

                {/*                    <h2 className="text-4xl sm:text-6xl mt-2 text-[#e83c34] uppercase">*/}
                {/*                        STUDENT*/}
                {/*                    </h2>*/}

                {/*                    <div className='mt-12 mb-12 flex flex-col items-center'>*/}
                {/*                        <div className='flex gap-4 flex-col items-start'>*/}
                {/*                            <div className='flex flex-row items-center'>*/}
                {/*                                <img*/}
                {/*                                    src={CheckCircle}*/}
                {/*                                    className='w-7 sm:w-11'*/}
                {/*                                />*/}
                {/*                                <p className="ml-2 md:ml-3 lg:text-lg xl:text-xl text-black">Lorem ipsum*/}
                {/*                                    dolor sit amet</p>*/}
                {/*                            </div>*/}
                {/*                            <div className='flex flex-row items-center'>*/}
                {/*                                <img*/}
                {/*                                    src={CheckCircle}*/}
                {/*                                    className='w-7 sm:w-11'*/}
                {/*                                />*/}
                {/*                                <p className="ml-2 md:ml-3 lg:text-lg xl:text-xl text-black">Lorem ipsum*/}
                {/*                                    dolor sit amet</p>*/}
                {/*                            </div>*/}
                {/*                            <div className='flex flex-row items-center'>*/}
                {/*                                <img*/}
                {/*                                    src={CheckCircle}*/}
                {/*                                    className='w-7 sm:w-11'*/}
                {/*                                />*/}
                {/*                                <p className="ml-2 md:ml-3 lg:text-lg xl:text-xl text-black">Lorem ipsum*/}
                {/*                                    dolor sit amet</p>*/}
                {/*                            </div>*/}
                {/*                            <div className='flex flex-row items-center'>*/}
                {/*                                <img*/}
                {/*                                    src={CheckCircle}*/}
                {/*                                    className='w-7 sm:w-11'*/}
                {/*                                />*/}
                {/*                                <p className="ml-2 md:ml-3 lg:text-lg xl:text-xl text-black">Lorem ipsum*/}
                {/*                                    dolor sit amet</p>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}

                {/*                    <a className="sm:text-lg md:text-xl " target="blank">*/}
                {/*                        <button type="button"*/}
                {/*                                className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-full text-lg py-3 px-10 text-center me-2 mb-2">*/}
                {/*                            Register*/}
                {/*                        </button>*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*                <div*/}
                {/*                    className="bg-red-500 pt-5 sm:pt-7 md:pt-10 p-6 sm:p-10 bg-[#e83c34] text-center rounded-2xl">*/}
                {/*                    <p className="text-2xl sm:text-3xl text-white">Join us as a</p>*/}

                {/*                    <h2 className="text-4xl sm:text-6xl mt-2 text-white uppercase">*/}
                {/*                        TUTOR*/}
                {/*                    </h2>*/}

                {/*                    <div className='mt-12 mb-12 flex flex-col items-center'>*/}
                {/*                        <div className='flex gap-4 flex-col items-start'>*/}
                {/*                            <div className='flex flex-row items-center'>*/}
                {/*                                <img*/}
                {/*                                    src={CheckCircleWhite}*/}
                {/*                                    className='w-7 sm:w-11'*/}
                {/*                                />*/}
                {/*                                <p className="ml-2 md:ml-3 lg:text-lg xl:text-xl text-white">Lorem ipsum*/}
                {/*                                    dolor sit amet</p>*/}
                {/*                            </div>*/}
                {/*                            <div className='flex flex-row items-center'>*/}
                {/*                                <img*/}
                {/*                                    src={CheckCircleWhite}*/}
                {/*                                    className='w-7 sm:w-11'*/}
                {/*                                />*/}
                {/*                                <p className="ml-3 lg:text-lg xl:text-xl text-white">Lorem ipsum dolor sit*/}
                {/*                                    amet</p>*/}
                {/*                            </div>*/}
                {/*                            <div className='flex flex-row items-center'>*/}
                {/*                                <img*/}
                {/*                                    src={CheckCircleWhite}*/}
                {/*                                    className='w-7 sm:w-11'*/}
                {/*                                />*/}
                {/*                                <p className="ml-3 lg:text-lg xl:text-xl text-white">Lorem ipsum dolor sit*/}
                {/*                                    amet</p>*/}
                {/*                            </div>*/}
                {/*                            <div className='flex flex-row items-center'>*/}
                {/*                                <img*/}
                {/*                                    src={CheckCircleWhite}*/}
                {/*                                    className='w-7 sm:w-11'*/}
                {/*                                />*/}
                {/*                                <p className="ml-3 lg:text-lg xl:text-xl text-white">Lorem ipsum dolor sit*/}
                {/*                                    amet</p>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}

                {/*                    <a className="bg-red  sm:text-lg md:text-xl " target="blank">*/}
                {/*                        <button type="button"*/}
                {/*                                className="font-medium text-red-500 bg-white hover:bg-grey-100  rounded-full text-lg py-3 px-10 text-center me-2 mb-2">*/}
                {/*                            Register*/}
                {/*                        </button>*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
            </div>
            <Footer/>
        </div>
    )


}

export default Home;