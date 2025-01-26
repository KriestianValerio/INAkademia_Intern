import React, { useState, useEffect } from 'react';

const MathLabTandC = ({ onClose }) => {
    const [canClose, setCanClose] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const popupContent = document.getElementById('popup-content');
            if (popupContent) {
                const { scrollTop, scrollHeight, clientHeight } = popupContent;
                if (scrollTop + clientHeight >= scrollHeight) {
                    setCanClose(true);
                }
            }
        };

        const popupContent = document.getElementById('popup-content');
        if (popupContent) {
            popupContent.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (popupContent) {
                popupContent.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg h-[50vh] overflow-y-auto w-11/12 md:w-2/3 lg:w-1/2" id="popup-content">
                <h2 className="text-2xl font-bold mb-4">Cara kerja kelas MathLab by Kenji Gunawan: </h2>
                <li>⁠Peserta akan mengikuti Pre-test melalui Google Form yang akan diberikan pada hari pelaksanaan oleh tim INAkademia.</li>
                <li>S⁠elama tes berlangsung, peserta wajib menghadiri zoom meeting yang akan diawasi oleh panitia.</li>
                <li>Tes akan berlangsung selama 2 jam secara serentak.</li>
                <li>Peserta yang mendapatkan nilai diatas 60 dinyatakan lolos dan dapat mengikuti kelas MathLab.</li>
                <li>Peserta yang mendapatkan nilai di bawah 60 tidak langsung lolos, namun akan diputuskan oleh panitia sesuai dengan situasi dan kondisi.</li>
                <li>Kelas MathLab akan dimulai pada tanggal 7 Februari - 18 April 2025, diikuti dengan ujian pertengahan pada tanggal 15 Maret dan ujian akhir pada tanggal 19 - 22 April 2025.</li>
                <li>Akan ada hadiah bagi 3 peserta yang mendapatkan nilai dan poin tertinggi pada akhir sesi MathLab.</li>        
                <li>Sertifikat penyelesaian akan diberikan kepada peserta dengan tingkat kehadiran minimal 75% di akhir program MathLab.</li>  

                <h2 className="text-2xl font-bold mb-4 mt-8">Syarat dan ketentuan mengikuti kelas MathLab: </h2>
                <p className="mb-4">Tolong cermati syarat dan ketentuan berikut!</p>
                <li>⁠Setiap peserta diharapkan hadir tepat waktu di setiap sesi dan mengisi absensi yang akan disediakan oleh panitia.</li>
                <li>Selama kelas berlangsung, dilarang menggunakan kata-kata kasar, menghina, atau melakukan tindakan yang mengganggu suasana belajar, baik terhadap fasilitator maupun sesama peserta.</li>
                
                <button
                    onClick={onClose}
                    disabled={!canClose}
                    className={`mt-4 px-4 py-2 rounded ${canClose ? 'bg-[#E03B37] text-white cursor-pointer' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default MathLabTandC;