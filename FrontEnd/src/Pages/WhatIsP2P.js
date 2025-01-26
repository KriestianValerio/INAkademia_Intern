import React from 'react';
import { Link } from 'react-router-dom'

// Import Component
import Nav from '../Components/Navbar/Nav';

// Import Images and Logos
import Logo_INAkademia from '../Assets/INAkademia-Logo.png';

import Footer from '../Components/Footer/footer';


const WhatIsP2P = () => {
    return (
        <div className='overflow-hidden'>
          <Nav osisl/>
          <div className='w-full h-auto md:mt-24 mt-16 sm:px-3 py-16'>
            <div className='container mx-auto'>
            <div className='grid sm:grid-rows-10 grid-cols-none lg:grid-cols-8 lg:grid-rows-none'>
                <div className='lg:hidden block mx-auto rounded-lg grid row-span-3 lg:col-span-3 lg:row-span-1  '>
                    <iframe className='md:mb-20 w-[270px] h-[480px] sm:w-[295.5px] sm:h-[525px] rounded-3xl justify-center lg:justify-end' src="https://drive.google.com/file/d/1sFErvYtzBC3f8czFIiIpq8HjwEcs7gKo/preview" allow="autoplay"/>
                </div>
                <div className='container row-span-7 lg:row-span-1 lg:col-span-5 px-10 flex-col items-center mt-0 sm:mt-18 sm:mb-24'>
                    <div className='font-[PlusJakartaSansMed] md:text-left text-justify text-sm xs:text-normal sm:text-lg md:text-lg lg:text-lg xl:text-xl leading-normal mt-4'>
                     <div className="text-left font-['ClashDisplay'] text-2xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-6xl leading-normal lg:pl-24">What Is P2P?</div>
                        <p className='pt-2 sm:pt-10 lg:pl-24 text-justify'>
                        INAkademia P2P adalah program bimbingan belajar gratis oleh student-tutors, terbuka bagi semua pelajar SMP dan SMA. 
                        <br/>
                        <br/>
                        Kami percaya bahwa setiap peers berhak mendapat kesempatan untuk berhasil. Program peer-2-peer kami tidak hanya dirancang 
                        untuk memberikan dukungan kepada peers yang tidak memiliki akses ke layanan kursus, tetapi juga mendorong sesama peers 
                        untuk memberanikan diri mengajar peers lainnya. Kami ingin menunjukkan kepada para remaja bahwa siapa pun, tanpa memandang 
                        nilai yang tinggi, dapat melayani dan memberi dampak bagi orang lain.                         
                        </p>
                    </div>
                </div>
                <div className='hidden lg:block mx-auto rounded-lg grid lg:col-span-3 '>
                    <iframe className='w-auto h-full rounded-3xl justify-center lg:justify-end' src="https://drive.google.com/file/d/1sFErvYtzBC3f8czFIiIpq8HjwEcs7gKo/preview" allow="autoplay"/>
                </div>
                </div>
            </div>
          </div>
          <Footer/>
        </div>
        // <div>
        //     <Nav osisl/>
        //     <div className='lg:mt-[100px] md:mt-[90px] mt-[30px]'>
        //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        //             <path fill="#f3f4f5" fill-opacity="1" d="M0,192L30,186.7C60,181,120,171,180,160C240,149,300,139,360,144C420,149,480,171,540,176C600,181,660,171,720,160C780,149,840,139,900,133.3C960,128,1020,128,1080,160C1140,192,1200,256,1260,266.7C1320,277,1380,235,1410,213.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        //         </svg>
        //     </div>
        //     <div className='-mt-[45px] lg:-mt-[230px] md:-mt-[170px] font-[500] relative'>
        //         <Link to='/' className='font-["Plus Jakarta Sans"] ml-[20px]'>{`<< Go Back`}</Link>
        //         <div className='block lg:h-[300px] md:h-[300px] h-[200px] p-auto'>
        //             <div className='relative lg:h-[300px] md:h-[300px] h-[200px] py-auto mt-[10px] lg:mt-[50px] md:mt-[50px]'>
        //                 <div className='absolute lg:inline-flex md:inline-flex sm:inline-flex bg-white shadow-lg rounded-xl lg:mx-[100px] md:mx-[100px] lg:h-[300px] md:h-[300px] h-auto py-[10px] mx-[10px] block'>
        //                     <div className='col-span-3 m-auto lg:ml-[30px] md:ml-[30px] lg:pt-0 md:pt-0 pt-[5px] lg:w-[70%] md:w-[90%] sm:w-[90%]'>
        //                         <h1 className='lg:text-[50px] font-[500] font-[ClashDisplay] md:text-[30px] sm:text-[30px] text-[20px] lg:text-justify md:text-justify text-center'>
        //                             What Is P2P?
        //                         </h1>
        //                         <p className='font-["Plus Jakarta Sans"] lg:text-[15px] md:text-[13px] sm:text-[13px] text-[12.5px] mx-[5px] lg:text-justify md:text-justify text-center'>
        //                             INAkademia P2P adalah program bimbingan belajar gratis oleh student-tutors, terbuka bagi semua pelajar SMP dan SMA.
        //                             Kami percaya bahwa setiap peers berhak mendapat kesempatan untuk berhasil. Program peer-2-peer kami tidak hanya dirancang 
        //         //                  untuk memberikan dukungan kepada peers yang tidak memiliki akses ke layanan kursus, tetapi juga mendorong sesama peers 
        //         //                  untuk memberanikan diri mengajar peers lainnya. Kami ingin menunjukkan kepada para remaja bahwa siapa pun, tanpa memandang 
        //         //                  nilai yang tinggi, dapat melayani dan memberi dampak bagi orang lain. 
        //                         </p>
        //                     </div>
        //                     <div className='lg:w-[30%] md:w-[30%] lg:grid md:grid lg:grid-rows-5 md:grid-rows-5 hidden px-[10px]'>
        //                         <div className='row-span-1'></div>
        //                         {/* <img src={Pic} alt="" className='row-span-3 h-full w-full object-cover object-center rounded-full' /> */}
        //                         <iframe className='row-span-3 h-full w-full object-cover object-center rounded-lg' src="https://drive.google.com/file/d/1sFErvYtzBC3f8czFIiIpq8HjwEcs7gKo/preview" allow="autoplay"/>
        //                         <div></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='mb-[30px] h-[150px] mt-[10px]'>
        //             {/* <img src={Pic} alt="" className='row-span-3 w-[65%] lg:hidden md:hidden block object-cover object-center rounded-lg h-full mx-auto' /> */}
        //             <iframe className='row-span-3 w-auto lg:hidden md:hidden block object-cover object-center rounded-lg h-full mx-auto' src="https://drive.google.com/file/d/1sFErvYtzBC3f8czFIiIpq8HjwEcs7gKo/preview" allow="autoplay"/>
        //         </div>
        //     </div>
        //     <div className='absolute bottom-0 w-full'>
        //         <Footer />
        //     </div>
        // </div>
    )


}

export default WhatIsP2P;