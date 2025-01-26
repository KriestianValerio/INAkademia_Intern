import React from 'react';
import { Link } from "react-router-dom";

// Import Component
import Nav from '../Components/Navbar/Nav';
import Footer from '../Components/Footer/footer';

import Void from '../Assets/UndrawVoid.png'

const ErrorPage = () => {
    return (
        <div className='overflow-hidden'>
            <Nav/>
                <div className='font-["ClashDisplay"] grid h-screen place-content-center bg-white px-4'>
                    <div className="text-center">
                        <img src={Void}/>
                        <h1 className="mt-6 text-2xl font-semibold md:font-bold tracking-tight text-gray-900 sm:text-4xl">You are not a member</h1>
                        <div className="font-[PlusJakartaSansMed] mt-4 text-gray-500">Mau daftar jadi member?                   
                            <Link
                                to={"/signup"}
                                className="text-blue-500 font-semibold hover:underline"
                            >
                            Klik disini.
                            </Link>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default ErrorPage;