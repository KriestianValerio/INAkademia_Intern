import React from 'react'
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

import Peer2PeerTutoring from '../../Images/Community7.JPG'

const CarouselProgram = () => {
  return (
    <div className="md:hidden mx-auto container h-[500px] xs:h-[300px] sm:h-[500px] font-[PlusJakartaSansMed] max-[450px]:-mt-20 -mt-6 sm:mt-5 md:mt-10">
      <Carousel className='items-start' slideInterval={5000} indicators={false}>
        <Card
          target='blank'
          className=""
          imgAlt="Peer2PeerTutoring"
          imgSrc={Peer2PeerTutoring}
        >
          <h5 className="text-[10px] xs:text-[8px] tracking-tight text-center">
          Peer 2 Peer Tutoring
          </h5>
        </Card>
        <Card
          target='blank'
          className=""
          imgAlt="Community"
          imgSrc={Peer2PeerTutoring}
        >
          <h5 className="text-[10px] xs:text-[8px] tracking-tight text-center">
          Community
          </h5>
        </Card>
        <Card
          target='blank'
          className=""
          imgAlt="INARoom"
          imgSrc={Peer2PeerTutoring}
        >
          <h5 className="text-[10px] xs:text-[8px] tracking-tight text-center">
          INARoom
          </h5>
        </Card>
        {/* <div class='flex items-center' target='blank'>
          <img class=" object-cover w-fit" src={Peer2PeerTutoring} alt='Peer2PeerTutoring'/>
          <div class=" absolute inset-x-0 bottom-0">
            <span class="mx-5 md:mx-10 flex flex-col items-center">
              <span className='mb-3 sm:mb-6 text-white text-center text-xl xs:text-3xl md:text-4xl py-2 bottom-0 inset-x-0'>
                    Peer 2 Peer Tutoring
              </span>
            </span>
          </div>
        </div>
        <div class='flex items-center' target='blank'>
          <img class="object-cover w-fit " src={Peer2PeerTutoring} alt='Peer2PeerTutoring'/>
          <div class=" absolute inset-x-0 bottom-0">
            <span class="mx-5 md:mx-10 flex flex-col items-center">
              <span className='mb-3 sm:mb-6 text-white text-center text-xl xs:text-3xl md:text-4xl py-2 bottom-0 inset-x-0'>
                    Community
              </span>
            </span>
          </div>
        </div>
        <div class='flex items-center' target='blank'>
          <img class="object-cover w-fit " src={Peer2PeerTutoring} alt='Peer2PeerTutoring'/>
          <div class="absolute inset-x-0 bottom-0">
            <span class="mx-5 md:mx-10 flex flex-col items-center">
              <span className='mb-3 sm:mb-6 text-white text-center text-xl xs:text-3xl md:text-4xl py-2 bottom-0 inset-x-0'>
                    INARoom
              </span>
            </span>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
}

export default CarouselProgram;