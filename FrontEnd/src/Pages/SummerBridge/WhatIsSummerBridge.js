import React from 'react';

import Nav from '../../Components/Navbar/Nav';
import Footer from '../../Components/Footer/footer';
import TestimonialCard from './TestimonialCard'

import Bridge from '../../Assets/bridgeicon.png'
import Reader from '../../Assets/readinglogo.png'

const WhatIsSummerBridge = () => {
    const testimonials = [
  {
    id: 1,
    name: "Muhammad Raihan Hakim",
    course: "Business Course SB",
    university: "Universitas Negeri Semarang",
    testimonial:
      "“Hallo sobat INAkademia!! Kenalin nama aku Muhammad Raihan Hakim, semester depan mahasiswa di Universitas Negeri Semarang. Aku baru aja mengikuti Bisnis Course dari INAkademia, pengalaman aku mengikuti course ini sangat excited karena Bisnis merupakan salah satu bidang yang aku gemari. Program Bisnis Course dari INAkademia ini sangat komprehensif dan Aplikatif, materinya juga sangat menarik dan sangat cocok buat kalian yang tertarik dibidang bisnis maupun yang mau memulai bisnis. Para pengajarnya juga berasal dari Mahasiswa yang sedang menempuh pendidikan di Universitas Top dunia. Terimakasih INAkademia atas pengalaman belajar yang luar biasa!”",
  }, {
    id: 2,
    name: "Muhammad Arif Khalfani Ismail",
    course: "ComSci Course SB",
    university: "Stanford University",
    testimonial:
      "“Program Summer Bridge sangat membantu saya untuk tetap produktif saat liburan. Saya mempelajari banyak sekali hal baru tentang coding, terutama materi file reading. Semua materi yang dijelaskan sangat menarik dan mudah dipahami dikarenakan adanya assignment per materi. Saya ingin mengucapkan banyak terima kasih kepada Ko Berwyn karena telah menjelaskan dengan baik dan selalu menjawab pertanyaan saya diluar kelas. Terima kasih banyak tim INAkademia untuk semuanya! Tetap semangat untuk menyebar kebaikan!”",
  }, {
    id: 3,
    name: "Christian Reinner Putra Ketaren",
    course: "Economics Course SB",
    university: "Universitas Indonesia",
    testimonial:
      "“Saya tertarik untuk mengikuti Summer Bridge selagi menunggu jadwal kuliah saya yang masih lama dan ingin mengetahui materi apa saja yang ada di perkuliahan Ilmu Ekonomi. Saya merasa bahwa 4 sesi yang diberikan cukup membantu saya untuk mulai memahami tentang apa saja yang akan saya pelajar di perkuliahan nanti. Kakak pengajarnya begitu komunikatif, menjelaskan dengan baik dan dapat memberikan contoh-contoh yang mudah dipahami. Pokoknya tidak rugi dech mengikuti Summer Class ini. Sukses selalu Summer Bridge.”",
  },
];
    return (
        <div>
            <Nav osisl/>
            <section className="bg-white">
                <header className=" bg-[#f2f5f6] pb-20 md:pb-40 pt-40">
                    <div className="container mx-auto px-4 md:px-8">
                        <h1 className="font-['ClashDisplay'] text-4xl md:text-5xl text-center">
                            Summer Bridge
                        </h1>
                        <p className="text-center text-lg md:text-xl mt-4">
                        </p>
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

                <div className="bg-white py-12 px-6 lg:px-16">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start">
                            <div className="lg:w-2/5 flex justify-center mb-8 lg:mb-0">
                                <img
                                    src={Bridge}
                                    alt="BridgeLogo"
                                    className="w-2/3 lg:w-[300px]"
                                />
                            </div>

                            <div className="lg:w-3/5 text-center lg:text-justify">
                                <p className="font-[PlusJakartaSansMed] text-xs sm:text-base text-gray-700 leading-relaxed lg:mr-16">
                                    Summer Bridge merupakan program tahunan dari INAkademia yang dirancang untuk
                                    menjembatani pengetahuan pelajar SMA dengan dunia perkuliahan, memberikan gambaran
                                    nyata mengenai berbagai jurusan universitas. Program ini membantu pelajar
                                    mengeksplorasi minat untuk menentukan pilihan jurusan atau mendapatkan awal yang
                                    kuat jika sudah yakin dengan pilihannya. Pada tahun 2024, selama dua minggu, peers
                                    dari mana saja dapat belajar melalui platform daring dengan bimbingan tutor
                                    berkualitas untuk memperdalam keterampilan di bidang Bisnis, Ilmu Komputer, dan
                                    Ekonomi. Program ini tidak hanya mudah diakses dan gratis, tetapi juga memberikan
                                    manfaat nyata bagi pengembangan pengetahuan dan keterampilan untuk peers.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start mt-12">
                            <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                                <img
                                    src={Reader}
                                    alt="ReaderSymbol"
                                    className="w-2/3 lg:w-[300px]"
                                />
                            </div>

                            <div className=" lg:w-1/2 text-center lg:text-left">
                                <div
                                    className="font-['ClashDisplay'] text-xl sm:text-3xl lg:4xl xl:text-5xl text-red-500">
                                    <p className="font-['ClashDisplay']">
                                        160 <span className="font-['ClashDisplay'] text-gray-900">peserta dari</span>
                                    </p>
                                    <p className="font-['ClashDisplay'] mt-1 lg:mt-3">
                                        19 <span className="font-['ClashDisplay'] text-gray-900">provinsi sudah</span>
                                    </p>
                                    <p className="font-['ClashDisplay']  text-gray-900 mt-1 lg:mt-3">
                                        berpartisipasi dalam
                                    </p>
                                    <p className="font-['ClashDisplay'] text-gray-900 mt-1 lg:mt-3">
                                        Summer Bridge 2024
                                    </p>
                                    <p className="text-sm sm:text-base lg:text-lg font-bold text-center lg:text-right italic text-red-500 mt-4 lg:mr-28 xl:mr-36">Kamu
                                        kapan?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-8 px-4">
                    <div className="container mx-auto">
                        <div className="lg:overflow-x-auto lg:flex space-y-5 lg:space-y-0 lg:space-x-4">
                            {testimonials.map((testimonial) => (
                                <TestimonialCard
                                    key={testimonial.id}
                                    name={testimonial.name}
                                    profile={testimonial.profile}
                                    course={testimonial.course}
                                    university={testimonial.university}
                                    testimonial={testimonial.testimonial}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mx-4 py-10 flex justify-center items-center ">
                    <div
                        className="lg:w-1/2 text-center font-['ClashDisplay'] text-xl sm:text-3xl lg:4xl text-red-500">
                        <p className="font-['ClashDisplay']">
                            Summer Bridge 2025 <span
                            className="font-['ClashDisplay'] text-gray-900">is coming soon!</span>
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-10 pb-40">
                    <div className="bg-white rounded-xl p-6 w-full max-w-xl md:mx-0 mx-8 text-center shadow-2xl">
                        <p className="font-[PlusJakartaSansMed] text-gray-700 text-xs sm:text-sm md:text-base mb-2">
                            Bagi teman-teman mahasiswa yang tertarik bergabung sebagai{" "}
                            <span className="italic">Tutor</span>, dapat mengirim pesan ke email berikut:
                        </p>
                        <p className="font-['ClashDisplay'] text-red-500 text-md sm:text-lg md:text-xl">
                            inakademia.hub@gmail.com
                        </p>
                    </div>
                </div>

            </section>
            <Footer/>
        </div>

    )

}

export default WhatIsSummerBridge;