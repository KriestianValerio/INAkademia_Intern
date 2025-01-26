import React from 'react'
import Nav from '../../Components/Navbar/Nav'
import Footer from '../../Components/Footer/footer'
import WhatIsP2P from '../../Images/Community7.JPG';
import UndrawEducator from '../../Assets/UndrawEducator.png'

export default function WhatIsINARoom() {
  return (
    <div className='overflow-hidden'>
        <Nav osisl/>
        
        <div className='bg-[#fefeff] mt-8 py-16'>
        
            <div className='mx-10 lg:mx-20 xl:mx-36 flex-col items-center flex md:flex-row'>
            <div className='md:hidden block rounded-3xl lg:ml-24 mb-10'>
                    <div class='relative flex items-end  font-["ClashDisplay"]'>
                    <div class="grid bg-black max-w-[420px] rounded-3xl justify-end">
                        <img class="object-cover h-[200px] md:h-[300px] w-[420px] rounded-3xl" src={WhatIsP2P} alt='Peer2PeerTutoring'/>
                    </div>
                    </div>
                </div>
                <div className="container mx-auto items-center max-w-[605px] ">
                    <div className=" flex flex-col items-start">
                        <div className=" text-left font-['ClashDisplay'] text-2xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-6xl leading-normal">
                            <div>What is INARoom?</div>
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
                    <div class='relative flex items-end  font-["ClashDisplay"]'>
                    <div class="grid bg-black max-w-[420px] rounded-3xl justify-end">
                        <img class="object-cover h-[500px]  md:h-[300px] w-[420px] rounded-3xl" src={WhatIsP2P} alt='Peer2PeerTutoring'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

