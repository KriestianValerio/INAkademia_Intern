import React from 'react'
import Nav from '../Components/Navbar/Nav'
import MathLabImg from '../Assets/MathLab.png';
import NakKecil from '../Image/NakKecil.png';
import TujuanMathLab from '../Assets/TujuanMathLab.png'
import Kenji from '../Assets/Kenji.png'
import Footer from '../Components/Footer/footer'

function WhatIsMathLab() {
  return (
    <div>
        <Nav osisl/>
        <div className='mt-[70px] lg:mt-[84px]'>
            <img src={MathLabImg} className=''/>

            {/* Intro to MathLab */}
            <div className='lg:flex mx-auto w-full lg:px-[20vw] px-[5vw] mt-8 items-center gap-[5%]'>
                <div className='mx-auto'>
                    <div className='font-[ClashDisplay] lg:text-[45px] text-[35px]'>
                        Intro to MathLab
                    </div>
                    <div className='text-justify'>
                        MathLab adalah sebuah kelas matematika yang digagas oleh Kenji Gunawan bersama INAkademia. Kelas ini dirancang untuk mengupas dan mengajarkan penerapan praktis matematika dalam kehidupan sehari-hari, serta mempersiapkan pelajar untuk ujian Penalaran Matematika (PM) dan Pengetahuan Kuantitatif (PK) dalam SNBT.
                    </div>
                </div>
            </div>

            {/* Tujuan MathLab */}
            <div className='flex mx-auto lg:w-[60vw] w-[90vw] p-[50px] mt-12 items-center rounded-lg shadow-2xl shadow-slate-500'>
                <div className='w-[25%]'>
                    <img src={TujuanMathLab} className='rounded-lg'/>
                </div>
                <div className='w-[70%] mx-auto'>
                    <div className='font-[ClashDisplay] lg:text-[45px] text-[35px]'>
                        Apa sih tujuan MathLab?
                    </div>
                    <div className='text-justify text-[15px] lg:text-[18px]'>
                        <ul>
                            1. Membantu pelajar memahami konsep matematika dari dasar hingga aplikasi nyata.
                        </ul>
                        <ul>
                            2. Mengajarkan cara berpikir matematis secara mendalam, termasuk kemampuan dasar (operasi tambah, kurang, kali, bagi) hingga permodelan matematika.
                        </ul>
                        <ul>
                            3. Menyediakan persiapan khusus untuk menghadapi soal-soal penalaran matematika dalam ujian SNBT.
                        </ul>
                        <ul>
                            4. Meningkatkan apresiasi terhadap matematika dengan menunjukkan relevansinya dalam pengambilan keputusan sehari-hari.
                        </ul>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className='mt-24'>
                <div className='w-[80vw] lg:ml-[20vw] ml-[5vw] font-[ClashDisplay] text-[45px]'>Timeline</div>
                <div className='overflow-x-auto lg:w-[85vw] w-[100vw] lg:ml-[15vw] '>
                    <div className='flex w-max gap-[30px] pb-[40px]'>
                        <div className='ml-[5vw] h-[200px] w-[370px] font-[PlusJakartaSansMed] shadow-slate-500 shadow-xl rounded-2xl p-[20px]'>
                            <div className='font-bold text-[25px]'>
                                24, 25, atau 26 Januari 2025
                            </div>
                            <div className='mt-4'>
                                Pelaksanaan Pre-test
                            </div>
                        </div>
                        <div className='h-[200px] w-[370px] font-[PlusJakartaSansMed] shadow-slate-500 shadow-xl rounded-2xl p-[20px]'>
                            <div className='font-bold text-[25px]'>
                                7 Februari 2025
                            </div>
                            <div className='mt-4'>
                                <div>Minggu Pertama</div>
                                <div>*Sesi diadakan per minggu hingga Ujian Tengah Semester (UTS)</div>
                            </div>
                        </div>
                        <div className='h-[200px] w-[370px] font-[PlusJakartaSansMed] shadow-slate-500 shadow-xl rounded-2xl p-[20px]'>
                            <div className='font-bold text-[25px]'>
                                15 Maret 2025
                            </div>
                            <div className='mt-4'>
                                <div>Pelaksanaan Ujian Tengah Semester (UTS)</div>
                            </div>
                        </div>
                        <div className='h-[200px] w-[370px] font-[PlusJakartaSansMed] shadow-slate-500 shadow-xl rounded-2xl p-[20px]'>
                            <div className='font-bold text-[25px]'>
                                15 Maret 2025
                            </div>
                            <div className='mt-4'>
                                <div>Minggu Ketujuh (7)</div>
                                <div>*Sesi diadakan setiap minggu hingga ujian akhir</div>
                            </div>
                        </div>
                        <div className='h-[200px] w-[370px] font-[PlusJakartaSansMed] shadow-slate-500 shadow-xl rounded-2xl p-[20px] mr-[30px]'>
                            <div className='font-bold text-[25px]'>
                                18 April 2025
                            </div>
                            <div className='mt-4'>
                                <div>Sesi terakhir</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Tutor */}
            <div className='mt-12 w-[60vw] mx-auto'>
                <div className='lg:grid-cols-2 lg:grid'>
                    <div>
                        <img src={Kenji} className='w-auto '/>
                    </div>
                    <div className='items-center my-auto'>
                        <div className='font-[ClashDisplay] lg:text-[45px] text-[35px]'>Kenji Gunawan</div>
                        <div className='font-[PlusJakartaSansMed italic lg:text-[25px] text-[18px] font-bold'>Menuju <span className='text-red-600'>UTBK Emas 2025</span>!</div>
                        {/* Achievements */}
                        <div className='mt-4 lg:text-[25px] text-[15px]'>
                            <ul>
                                - Mahasiswa UC San Diego Applied Mathematics
                            </ul>
                            <ul>
                                - Cast Ruangguru Clash of Champions
                            </ul>
                            <ul>
                                - Medalis Emas OSN SMA 2022 Bidang Matematika
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Halo Guys! */}
                <div className='flex items-center'>
                    <div className='text-[65px] font-bold text-red-600 font-[ClashDisplay]'>“</div>
                    <div className='text-[25px] font-bold font-[PlusJakartaSansMed] ml-[30px]'>
                        Halo Guys!
                    </div>
                </div>
                <div className='text-justify'>
                    <div className='mb-4'>
                        Aku Kenji Gunawan, mahasiswa bidang Applied Mathematics di UC San Diego. Mungkin kalian kenal aku dari Clash of Champions; di mana kita sama-sama ngerjain tantangan hitung-hitungan kayak cryptarithm dan menghafal lukisan.
                    </div>
                    <div className='mb-4'>
                        Dengan kesempatan ini, aku kepikiran sama pendidikan matematika di Indonesia. Banyak orang yang sebenernya mau bisa Matematika, tapi gak tau mau mulai dari mana. Selain itu, guru-guru di sekolah juga hanya membahas materinya sekadar persiapan ujian saja, sehingga ketika dimodifikasi menjadi soal Penalaran Matematika dalam SNBT; banyak yang kesulitan. Aku juga sempet bolak-balik ngobrol sama temen-temen mahasiswa Indonesia untuk membahas tentang kurikulum Matematika yang dialami, dan terlihat bahwa banyak orang yang gagal untuk memahami konsep-konsep kalkulus yang diajarkan di tingkat kuliah.
                    </div>
                    <div className='mb-4'>
                        Jadi, gimana kalo aku bikin kelas matematika yang bakal mengupas tuntas yang sebenernya dibahas di SMA? Gimana kalo aku juga ngajarin fungsinya di kehidupan sehari-hari? Dan menggunakan hasil analisis kita untuk membuat keputusan dalam kehidupan sehari-hari, sekaligus mempersiapkan buat PK dan PM dalam SNBT?
                    </div>
                    <div className='mb-4'>
                        Ya, jadi aku menggagas kelas "MathLab by Kenji" dengan INAkademia. Dengan temen-temen INAkademia yang juga ngebantu dalam proses ini, semoga nantinya bisa ketemu sama kalian, dan bisa lancar kelasnya! Dan tidak lupa juga, kalian sudah belajar yang banyak dan tahu cara berpikir matematis itu gimana nantinya. Kelas ini bakalan mulai dari kemampuan tambah kurang kali bagi; terus kita lanjut ke permodelan matematika sehingga ada gunanya dalam kehidupan sehari-hari. 
                    </div>
                    <div className='mb-4'>
                        Intinya, kalau kamu sudah punya nalar dalam Matematika, tetapi tidak pernah mengerti kayak dulu lagi sejak mulai diajarkan aljabar, kelas ini cocok buat kamu!
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-20'></div>
        <Footer />
    </div>
  )
} 

export default WhatIsMathLab