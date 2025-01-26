import React, { useState } from 'react';

import Nav from '../../Components/Navbar/Nav';
import Footer from '../../Components/Footer/footer';

// Import images

import Creative from '../../Assets/Team/Creative/Creative.png'
import PartnerShip from '../../Assets/Team/PartnerShip/PartnerShip.png'
import Programs from '../../Assets/Team/Programs/Programs.png'
import Website from '../../Assets/Team/Website/Website.png'



import Mattheus from '../../Assets/Team/PartnerShip/Mattheus.webp';
import Sheperd from '../../Assets/Team/Operations/Sheperd.jpeg';
import Justin from '../../Assets/Team/PartnerShip/Justin.webp';
import Jocelyn from '../../Assets/Team/PartnerShip/Jocelyn.webp';
import Kenneth from '../../Assets/Team/PartnerShip/Kenneth.webp';
import Alicia from '../../Assets/Team/PartnerShip/Alicia.webp';
import Ribben from '../../Assets/Team/PartnerShip/Ribben.webp';
import JonathanH from '../../Assets/Team/Programs/Jonathan.webp';
import Czar from '../../Assets/Team/Programs/Czar.webp';
import Valeska from '../../Assets/Team/Programs/Valeska.webp';
import Marcello from '../../Assets/Team/Programs/Marcello.webp';
import Nayla from '../../Assets/Team/Programs/nayla.webp';
import Viktor from '../../Assets/Team/Programs/Viktor.webp';
import Berwyn from '../../Assets/Team/Programs/Berwyn.webp';
import Ferdinand from '../../Assets/Team/Programs/Ferdinand.webp';
import MichaelEvan from '../../Assets/Team/Programs/michael.webp';
import KenjiG from '../../Assets/Team/Programs/kenji.webp';
import DanielMark from '../../Assets/Team/Programs/Daniel.webp';
import JonathanIshak from '../../Assets/Team/Programs/Ishak.webp';
import Randall from '../../Assets/Team/Programs/Randall.webp';
import DanielOliver from '../../Assets/Team/PartnerShip/Mattheus.webp';
import Bryant from '../../Assets/Team/PartnerShip/Mattheus.webp';
import Arlyne from '../../Assets/Team/Creative/Arlyne.webp';
import Enrichie from '../../Assets/Team/Creative/enrichie.webp';
import Samantha from '../../Assets/Team/Creative/Samantha.webp';
import Nicole from '../../Assets/Team/Creative/Nicole.webp';
import Irving from '../../Assets/Team/PartnerShip/Mattheus.webp';
import Claire from '../../Assets/Team/Creative/Claire.webp';
import MichaelL from '../../Assets/Team/Website/MikhaelJ.webp';
import Willie from '../../Assets/Team/Website/Willie.webp';
import MichaelR from '../../Assets/Team/Website/MichaelR.webp';
import Marco from '../../Assets/Team/Website/Marco.webp';
import Klein from '../../Assets/Team/Website/klein.JPG';
import JasonK from '../../Assets/Team/Website/Jason.webp';
import Kriestian from '../../Assets/Team/Website/Kriestian.webp';

const teamMembers = {
    "Partnerships": [
        { nama: 'Mattheus', Image: Mattheus },
        { nama: 'Justin', Image: Justin },
        { nama: 'Jocelyn', Image: Jocelyn },
        { nama: 'Kenneth', Image: Kenneth },
        { nama: 'Alicia', Image: Alicia },
        { nama: 'Ribben', Image: Ribben },
    ],
    "Programs": [
        { nama: 'Jonathan H.', Image: JonathanH },
        { nama: 'C’zar', Image: Czar },
        { nama: 'Valeska', Image: Valeska },
        { nama: 'Marcello', Image: Marcello },
        { nama: 'Nayla', Image: Nayla },
        { nama: 'Viktor', Image: Viktor },
        { nama: 'Berwyn', Image: Berwyn },
        { nama: 'Ferdinand', Image: Ferdinand },
        { nama: 'Michael Evan', Image: MichaelEvan },
        { nama: 'Kenji G.', Image: KenjiG },
        { nama: 'Daniel Mark', Image: DanielMark },
        { nama: 'Ishak', Image: JonathanIshak },
        { nama: 'Randall', Image: Randall },
        // { nama: 'Daniel Oliver', Image: DanielOliver },
        // { nama: 'Bryant', Image: Bryant }
    ],
    "Creative": [
        { nama: 'Arlyne', Image: Arlyne },
        { nama: 'Enrichie', Image: Enrichie },
        { nama: 'Samantha', Image: Samantha },
        { nama: 'Nicole', Image: Nicole },
        // { nama: 'Irving', Image: Irving },
        { nama: 'Claire', Image: Claire },
    ],
    "WebDiv": [
        { nama: 'Michael L.', Image: MichaelL },
        { nama: 'Willie', Image: Willie },
        { nama: 'Michael R.', Image: MichaelR },
        { nama: 'Marco', Image: Marco },
        { nama: 'Jason K.', Image: JasonK },
        { nama: 'Kriestian', Image: Kriestian },
        { nama: 'Klein', Image: Klein },
    ]
};

const MeetOurTeam = () => {
    const [selectedDivision, setSelectedDivision] = useState(null);

    const handleDivisionClick = (division) => {
        // Map the selected division to the corresponding team members
        const divisionMap = {
            "Strategy and Partnerships": "Partnerships",
            "Programs": "Programs",
            "Website Division": "WebDiv",
            "Creative": "Creative"
        };
        setSelectedDivision(divisionMap[division]);
    };

    return (
        <div>
            <Nav osisl/>
            <section className="bg-white">
                <header className="bg-[#f2f5f6] pb-20 md:pb-40 pt-40">
                    <div className="container mx-auto px-4 md:px-8 text-center">
                        <h1 className="font-['ClashDisplay'] text-4xl md:text-5xl">
                           Meet Our Team!
                        </h1>
                    </div>
                </header>
                <div className="relative rotate-180 mt-5">
                    <svg
                        className="absolute w-full h-auto drop-shadow-xl"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 200"
                    >
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,80L48,96C96,112,192,128,288,128C384,128,480,112,576,101.3C672,91,768,85,864,96C960,107,1056,133,1152,138.7C1248,144,1344,123,1392,112L1440,101L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        ></path>
                    </svg>
                </div>

                <div className="container mx-auto py-12 px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="bg-[#f2f5f6] border-2xl p-4 lg:w-[20%] flex flex-col items-center mb-8 lg:mb-0 lg:py-8 lg:px-8 rounded-lg ">
                            <h2 className="text-2xl text-center font-bold mb-4">Our Divisions</h2>
                            <button 
                                className="hover:text-red-500 text-black py-2 rounded mb-2 w-full"
                                onClick={() => handleDivisionClick("Strategy and Partnerships")}
                            >
                                Strategy and Partnerships
                            </button>
                            <button 
                                className="hover:text-red-500 text-black py-2 rounded mb-2 w-full"
                                onClick={() => handleDivisionClick("Programs")}
                            >
                                Programs
                            </button>
                            <button 
                                className="hover:text-red-500 text-black py-2 rounded mb-2 w-full"
                                onClick={() => handleDivisionClick("Website Division")}
                            >
                                Website Division
                            </button>
                            <button 
                                className="hover:text-red-500 text-black py-2 rounded mb-2 w-full"
                                onClick={() => handleDivisionClick("Creative")}
                            >
                                Creative
                            </button>
                        </div>
                        <div className="w-full">
                            {
                                selectedDivision ? (
                                    <div className="p-4">
                                        <div className="hidden justify-center mb-4 lg:flex">
                                            {selectedDivision === "Partnerships" && (
                                                <img src={PartnerShip} alt="Partnership" className="w-1/4 h-auto" />
                                            )}
                                            {selectedDivision === "Programs" && (
                                                <img src={Programs} alt="Programs" className="w-1/4 h-auto" />
                                            )}
                                            {selectedDivision === "WebDiv" && (
                                                <img src={Website} alt="Website" className="w-1/4 h-auto" />
                                            )}
                                            {selectedDivision === "Creative" && (
                                                <img src={Creative} alt="Creative" className="w-1/4 h-auto" />
                                            )}
                                        </div>
                                        <div className="flex overflow-x-auto">
                                            {teamMembers[selectedDivision].map((member, index) => (
                                                <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md m-2 w-1/4 min-w-[200px]">
                                                    <img src={member.Image} alt={member.nama} className="w-full h-auto rounded" />
                                                    <h3 className="text-lg font-bold text-center">{member.nama}</h3>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-4 flex justify-center">
                                        <div key={1} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md m-2 w-1/4 min-w-[200px]">
                                            <img src={Sheperd} alt="sheperd" className="w-full h-auto rounded" />
                                            <h3 className="text-2xl font-bold text-center">Sheperd</h3>
                                            <h3 className="mt-3 text-lg font-bold text-center">Head of Operations</h3>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>

    )

}

export default MeetOurTeam;