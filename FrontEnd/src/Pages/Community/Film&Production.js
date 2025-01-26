import React from 'react'
import { NavLink } from 'react-router-dom';

import Layout from '../../Components/Layout/KegiatanLayout'
import Film from '../../Images/Community2.JPG'
import OsisNav from '../../Components/Tutor/OsisNav'
import Nav from '../../Components/Navbar/Nav'
import Footer from '../../Components/Footer/footer'

import TutorImage1 from '../../Images/about us foto.png'
import Wave from '../../Assets/wave_black.svg'

const FilmAndProduction = () => {
    return(
        <div>
            <Nav/>
            <Layout
            cat = "Community"
            title = "FILM & PRODUCTION"
            quote = '"Bikin film kece dong!!"'
            latterPar1 = "Terdapat berbagai ekskul dan klub olahraga yang bisa diikuti siswa-siswi SMAK 1. Mulai dari basket, voli, futsal, hingga catur, dan masih banyak lagi. Klub olahraga di SMAK 1 sendiri biasa dikenal dengan nama KR1ZA. Sudah banyak murid SMAK 1 yang berhasil meraih juara. Salah satu pencapaiannya adalah KR1ZA Basket Putri yang berhasil mendapatkan juara 1 di DBL Putri 2019."
            img = {Film}
            alt = "kr1za"
            latterPar2 = "Untuk dapat menjadi anggota KR1ZA sendiri, terdapat seleksi yang harus diikuti. Sebaliknya, siapa pun bisa mengikuti ekskul untuk memperdalam dan melatih kemampuannya dalam olahraga pilihan."
            dir="/community"
            />
            <div id='bidang' className='bg-dark-blue w-full h-auto text-black py-14 mt-16'>
                    <div className='container mx-auto'>
                    <div className='text-center px-12 sm:px-24  md:px-32 lg:px-36 xl:px-52'>
                        <image src={Wave}/>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold'>
                        Prodution Team
                        </h1>
                        {/* <div className='grid grid-cols-3 lg:grid-cols-5 gap-10 mt-10 place-items-center'> */}
                        <div className=''>
                        {/* <div className="col-span-3 lg:col-span-5"> */}
                        <div>
                        <NavLink to="TutorFisika" >
                            <OsisNav
                            img={TutorImage1}
                            Title="Fisika"
                            />
                        </NavLink>
                        </div>
                        <div>
                        <NavLink to="Kimia" >
                            <OsisNav
                            img={TutorImage1}
                            Title="Kimia"
                            />
                        </NavLink>
                        </div>
                        <div>
                        <NavLink to="Matematika" >
                            <OsisNav
                            img={TutorImage1}
                            Title="Matematika"
                            />
                        </NavLink>
                        </div>
                        <div>
                        <NavLink to="Accounting" >
                            <OsisNav
                            img={TutorImage1}
                            Title="Accounting"
                            />
                        </NavLink>
                        </div>
                        <div>
                        <NavLink to="Biologi" >
                            <OsisNav
                            img={TutorImage1}
                            Title="Biologi"
                            />
                        </NavLink>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            <Footer/>
            </div>

        
        
    )
}

export default FilmAndProduction