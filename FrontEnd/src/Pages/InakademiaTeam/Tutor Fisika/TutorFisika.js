import React from 'react'

// Import Component
import BidangSection from '../../../Components/Tutor/BidangSection'
import OsisTeam from '../../../Components/Tutor/OsisTeam'

//Import Image
import Berwyn from '../../../Images/about us foto.png'

const TutorFisika = () => {
  return (
    <div>
      <OsisTeam
        bidang="Fisika"
        person1={<BidangSection img={Berwyn} alt="Berwyn" name="Berwyn" desc="hellooo semuanya! salam kenal yaa, nama aku Nathaline tapii biasanya dipanggil alinee! Di OSIS taun ini aku adalah ketua osiss. so thankful to have this opportunity to be a big part in OSIS yay! this is my second year in OSIS and so far it has been a really wonderful experience being part of this family <3 selain OSIS aku juga participate di ONEJOURNAL, panitia SOC, STN, TEDX and many more! i would definitely persuade you guys to join too karna seseru itu. And by the way aku tuh orangnya dari kecil kdrama addict bangett! Jadi most of the time aku selalu nonton nonton nonton dan nonton :) from korean dramas to moviesnya semua aku sukaa banget HEHEH selain itu aku juga sering dengerin musik, suka olahraga, and pastinya cobain makanan baru - a big foodie right here! kalo mau give me recommendations or simply ngobrol – ngobrol langsung ke ig aku ajaa yaa @nathalinemarielle <3 last but not the least, one fun fact about me itu i shower super duper late at night and kramasnya kayak flash less than 5 mins HEHHEHE anywayss lets be friends!!"/>}
        dirBPH= "/TutorHub/TutorFisika"
      />
    </div>
  )
}

export default TutorFisika