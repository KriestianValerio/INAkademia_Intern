import React from 'react'
import Circle from '../Assets/circle-bg.png'
import Pic from '../Assets/Test-Pic.webp'
import Wave from '../Assets/wave.png'

export default function () {
  return (
    <div className='m-0 overflow-x-hidden'>
        {/* circle on top */}
        <div className='h-[300px] -ml-[300px] -mr-[300px]'>
            <img src={Circle} alt="" className=' -mt-[300px] w-[3000px] h-[250%] opacity-[15%] ' />
        </div>
        <div className='mt-[320px] w-full'>
            <h1 className='text-center text-[100px] font-[500] font-[ClashDisplay]'>Our Communities</h1>
            {/* Sections */}
            <div className='rounded-md grid grid-cols-2 gap-[3px] mx-[250px]'>
                <div className=''>
                    <img src={Pic} alt="" className='rounded-tl-3xl h-[600px] w-full' />
                    <p className='text-white rounded-bl-3xl py-[30px] text-center font-[PlusJakartaSansMed] text-[30px] font-[600] bg-[#f4202b]'>Film & Production</p>
                </div>
                <div className=''>
                    <img src={Pic} alt="" className='rounded-tr-3xl h-[600px] w-full' />
                    <p className='text-white rounded-br-3xl py-[30px] text-center font-[PlusJakartaSansMed] text-[30px] font-[600] bg-[#f4202b]'>Music</p>
                </div>
            </div>
            {/* Terms & Conditions */}
            <div className='h-[400px] z-2 opacity-100'>
                <div className="rounded-[1000px] opacity-100 bg-[#f4202b] font-[PlusJakartaSansMed] font-[600] text-white py-[20px] text-center text-[50px] mx-[250px] mt-[70px]">Terms and Conditions</div>
                <div className='px-[50px] mt-[30px] opacity-100 font-[PlusJakartaSansMed] text-justify text-[20px] shadow-2xl mx-auto rounded-3xl py-[50px] relative w-[1400px] z-2'>
                    <p>1. Memahami bahwa tujuan dari INAkademia Community adalah untuk memajukan bidang-bidang tertentu melalui wadah yang menggabungkan peers dengan minat yang sama.</p>
                    <p>2. Setiap peers INAkademia Community diharapkan untuk saling menghormati dan menghargai satu sama lain, tanpa memandang perbedaan jenis kelamin, ras, agama, atau latar belakang budaya.</p>
                    <p>3. Bahasa dan tindakan yang menghina, merendahkan, atau mendiskriminasi peers INAkademia Community dilarang keras dalam bentuk apapun.</p>
                    <p>4. Setiap peers diharapkan untuk memberikan kontribusi positif dan membantu sesama anggota dengan pengetahuan dan pengalaman mereka.</p><br />
                    <p>Peraturan ini ditujukan untuk menciptakan lingkungan yang inklusif, positif, dan bermanfaat bagi semua peers INAkademia. Semua peers diharapkan untuk menigkuti peraturan ini dan berkontribusi secara positif untuk membangun komunitas yang berdampak.</p>
                </div>
            </div>
            <img src={Wave} alt="" className='w-full h-[350px] -mt-[50px]' />

        </div>
    </div>
  )
}
