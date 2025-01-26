import React from 'react'

import { useNavigate,Link } from 'react-router-dom'; 

import ContentHeader from '../../Components/Content/ContentHeader'
import ContentText from '../../Components/Content/ContentText'
import Nav from '../../Components/Navbar/Nav'
import Footer from '../../Components/Footer/footer'
import image1 from '../../Assets/Test-Pic.webp'

const Kegiatan = () => {
    return(
        <div>
            <Nav/>
            <div className="">
                <h1 className="text-6xl text-center mx-auto mt-64 font-[ClashDisplay]">Our Communities</h1>
                <div className="grid grid-cols-2 gap-20 mt-12 px-52">
                    <div className="bg-[url('Assets/Test-Pic.webp')] font-[ClashDisplay] bg-contain text-white text-3xl text-center mx-auto px-3 pt-64 pb-5 rounded-2xl w-full">
                        Film and Production <br></br>
                        <button className="bg-red-600 text-lg w-full rounded-3xl py-1">Explore More</button>
                    </div>
                    <div className="bg-[url('Assets/Test-Pic.webp')] font-[ClashDisplay] bg-contain text-white text-3xl text-center mx-auto px-3 pt-64 pb-5 rounded-2xl w-full">
                        Music<br></br>
                        <button className="bg-red-600 text-lg w-full rounded-3xl py-1">Explore More</button>
                    </div>
                </div>
            </div>
            <div className="px-auto justify-center mt-28 pb-24 px-24 shadow-red-400 shadow-xl">
                <h1 className="text-6xl text-center mx-auto font-[ClashDisplay]">Terms & Condition</h1>
                <div className="mt-6 px-6">
                    1. Memahami bahwa tujuan dari INAkademia Community adalah untuk memajukan bidang - bidang tertentu melalui wadah yang menggabungkan peers dengan minat yang sama.
                    <br></br>2. Setiap peers INAkademia Community diharapkan untuk saling menghormati dan menghargai satu sama lain, tanpa memandang perbedaan jenis kelamin, ras, agama, atau latar belakang budaya.
                    <br></br>3. Bahasa dan tindakan yang menghina, merendahkan, atau mendiskriminasi peers INAkademia Community dilarang keras dalam bentuk apapun
                    <br></br>4. Setiap peers diharapkan untuk memberikan kontribusi positif dan membantu sesama anggota dengan pengetahuan dan pengalaman mereka.
                    <br></br><br></br>Peraturan ini ditujukan untuk menciptakan lingkungan yang inklusif, positif, dan bermanfaat bagi semua peers INAkademia. Semua peers diharapkan untuk mengikuti peraturan ini dan berkontribusi secara positif untuk membangun komunitas yang berdampak.
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Kegiatan