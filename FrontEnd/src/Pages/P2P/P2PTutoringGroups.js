import React from 'react'
import Nav from '../../Components/Navbar/Nav'
import Pic from '../../Assets/Test-Pic.webp'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/footer'
import WhatIsP2P from '../../Images/Community7.JPG';
import UndrawEducator from '../../Assets/UndrawEducator.png'

export default function P2PTutoringGroups() {
  return (
    <div className='overflow-hidden'>
        <Nav osisl/>
        {/* <div className='lg:mt-[100px] md:mt-[90px] mt-[30px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f3f4f5" fill-opacity="1" d="M0,192L30,186.7C60,181,120,171,180,160C240,149,300,139,360,144C420,149,480,171,540,176C600,181,660,171,720,160C780,149,840,139,900,133.3C960,128,1020,128,1080,160C1140,192,1200,256,1260,266.7C1320,277,1380,235,1410,213.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
            </svg>
        </div>
        <div className='-mt-[45px] lg:-mt-[230px] md:-mt-[170px] font-[500] relative'>
            <div className='block lg:h-[300px] md:h-[300px] h-[200px] p-auto'>
                
            <div className='relative lg:h-[300px] md:h-[300px] h-[200px] py-auto mt-[10px] lg:mt-[50px] md:mt-[50px]'>
            <Link to='/' className='font-["Plus Jakarta Sans"] ml-[80px]'>{`<< Go Back`}</Link>
                <div className='relative lg:h-[300px] md:h-[300px] h-[200px] py-auto mt-[10px] lg:mt-[50px] md:mt-[50px]'>
                    <div className='absolute lg:inline-flex md:inline-flex sm:inline-flex bg-white shadow-lg rounded-xl lg:mx-[100px] md:mx-[100px] lg:h-[300px] md:h-[300px] h-auto py-[10px] mx-[10px] block'>
                        <div className='col-span-3 m-auto lg:ml-[30px] md:ml-[30px] lg:pt-0 md:pt-0 pt-[5px] lg:w-[70%] md:w-[70%] sm:w-[70%]'>
                            <h1 className='lg:text-[50px] font-[500] font-[ClashDisplay] md:text-[30px] sm:text-[30px] text-[20px] lg:text-justify md:text-justify text-center'>
                                P2P Tutoring Groups?
                            </h1>
                            <p className='font-["Plus Jakarta Sans"] lg:text-[15px] md:text-[15px] sm:text-[13px] text-[12.5px] mx-[5px] lg:text-justify md:text-justify text-center'>Setiap Lead Tutor kami memiliki Tuts (Tutoring groups) yang akan kami bagi sesuai kelas dan/atau pelajaran. Peers akan dimasukkan ke Tuts yang sesuai. Dikarenakan jumlah tutor kami yang terbatas, kami akan meminta peers untuk menjawab sejumlah pertanyaan di Tutoring Group Request Form kami. Sesudah verifikasi, peers akan mendapatkan email konfirmasi dan kemudian dihubungi oleh tim kami</p> */}
        
        <div className='bg-[#fefeff] mt-24 py-16'>
        
            <div className='mx-10 lg:mx-20 xl:mx-36 flex-col items-center flex md:flex-row'>
            <div className='md:hidden block rounded-3xl lg:ml-24 mb-10'>
                    <div class='relative flex items-end  font-["ClashDisplay"]'>
                    <div class="grid bg-black max-w-[420px] rounded-3xl justify-end ">
                        <img class="object-cover h-[200px] md:h-[300px] w-[420px] rounded-2xl" src={WhatIsP2P} alt='Peer2PeerTutoring'/>
                    </div>
                    </div>
                </div>
                <div className="container mx-auto items-center max-w-[605px] ">
                    <div className=" flex flex-col items-start">
                        <div className=" text-left font-['ClashDisplay'] text-2xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-6xl leading-normal">
                            <div>What is P2P?</div>
                        </div>
                        <div className="font-[PlusJakartaSansMed] md:text-left text-justify text-sm xs:text-normal sm:text-lg md:text-lg lg:text-lg xl:text-xl leading-normal mt-4">  
                            <p className="">A platform to collaborate and learn collectively, 
                                a community where peer-mentor relationships are built, 
                                and a hub where interests are developed through collaborations within and across generations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='md:block hidden rounded-3xl md:ml-20 mt-10'>
                    <div class='relative flex items-start items-left font-["ClashDisplay"]'>
                    <div class="grid bg-black max-w-[420px] rounded-3xl justify-start">
                        <img class="object-cover h-[500px]  md:h-[300px] w-[420px] rounded-3xl" src={WhatIsP2P} alt='Peer2PeerTutoring'/>
                    </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-20'>
                <div className='lg:block hidden'>
                    <div className=' mx-10 xl:mx-40 border shadow-xl rounded-xl py-10 px-16 flex flex-row drop-shadow-2xl'>
                        <img src={UndrawEducator} alt="" className='mt-8 h-full'/>
                        <div className='ml-14'>
                            <div className='font-["ClashDisplay"] text-4xl '>
                                Keuntungannya apa aja sih?
                            </div>
                            <ol className='font-[PlusJakartaSansMed] mt-8 text-xl list-outside list-decimal'>
                                <li>Peers akan mendapatkan bimbingan yang lebih <span className='text-red-500'>intensif</span>  dan <span className='text-red-500'>personal</span> bersama lead tutor yang khusus untuk group peers</li>
                                <li>Peers dapat bertanya soal maupun konsep kepada lead tutor melalui chat <span className='text-red-500'>tanpa menunggu</span> diadakannya sessions</li>
                                <li>Peers dalam Tuts dapat <span className='text-red-500'>menjadwalkan sesi khusus</span> bersama lead tutor jika membutuhkan bantuan lebih lanjut, sesuai dengan ketersediaan jadwal lead tutor</li>
                                <li>Peers dapat menemukan relasi dan komunitas pelajar yang saling <span className='text-red-500'>membantu, membangun, dan belajar</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className='mx-4 lg:hidden block py-10 px-8 sm:px-16 flex rounded-xl flex-col shadow-2xl'>
                    <div className='flex-row flex items-center'>
                        <img src={UndrawEducator} alt="" className=' h-[60px] sm:h-[80px] lg:h-full' />
                        <div className='font-["ClashDisplay"] ml-2 sm:ml-8 max-[350px]:text-sm text-2xl sm:text-3xl '>
                                Keuntungannya apa aja sih?
                        </div>
                    </div>
                    <hr class="mt-8 border-gray-200 dark:border-gray-700" />
                    <div className='mx-2 text-justify sm:text-left'>
                        <ol className='font-[PlusJakartaSansMed] mt-8 max-[350px]:text-xs text-sm sm:text-md md:text-xl list-outside list-decimal'>
                            <li>Peers akan mendapatkan bimbingan yang lebih <span className='text-red-500'>intensif</span>  dan <span className='text-red-500'>personal</span> bersama lead tutor yang khusus untuk group peers</li>
                            <li>Peers dapat bertanya soal maupun konsep kepada lead tutor melalui chat <span className='text-red-500'>tanpa menunggu</span> diadakannya sessions</li>
                            <li>Peers dalam Tuts dapat <span className='text-red-500'>menjadwalkan sesi khusus</span> bersama lead tutor jika membutuhkan bantuan lebih lanjut, sesuai dengan ketersediaan jadwal lead tutor</li>
                            <li>Peers dapat menemukan relasi dan komunitas pelajar yang saling <span className='text-red-500'>membantu, membangun, dan belajar</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
