import React from 'react';

// Import Component
import Nav from '../Components/Navbar/Nav';
import ProfileBox from '../Components/Portofolio/ProfileBox';
import WorkLayout from "../Components/Portofolio/WorkLayout";

export default function () {
  return (
    <div className='m-0 overflow-x-hidden'>
        <Nav/>
       <div className=''>
           <ProfileBox
               img={"https://imgs.search.brave.com/ZiqKu1Zk2QMzU_JajfKEZzQOH5nIsLVFNgv5m6yMkBA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9nZXR0/eWltYWdlcy02MTUz/MTI3MTQuanBnP2Ny/b3A9MXh3OjEuMHho/O2NlbnRlcix0b3Am/cmVzaXplPTY0MDoq"}
               name={"Roland"}
               quote={'Check out some of my works!'}
               alt={"Roland"}
           />
           <WorkLayout
               video={true}
               header={'Short Movie Berjudul "Lorem Ipsum"'}
               text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat rhoncus enim eget auctor. Phasellus viverra dolor id odio eleifend, ut euismod sem vulputate. Donec tempus a nibh quis sollicitudin. Maecenas eu ullamcorper quam. Phasellus quis pulvinar odio. Vestibulum interdum, sem sed varius ornare, diam nunc gravida leo, hendrerit vehicula tortor ipsum nec augue. Vestibulum rutrum condimentum libero. Sed posuere dignissim nulla in ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla pulvinar est orci, imperdiet iaculis lectus pharetra ac. Cras suscipit hendrerit ultricies. Cras gravida erat libero, dictum aliquet arcu mattis dictum'}
               embed={'https://drive.google.com/file/d/1sFErvYtzBC3f8czFIiIpq8HjwEcs7gKo/preview'}
           />
           <WorkLayout
               video={false}
               header={'Short Movie Berjudul "Lorem Ipsum"'}
               text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat rhoncus enim eget auctor. Phasellus viverra dolor id odio eleifend, ut euismod sem vulputate. Donec tempus a nibh quis sollicitudin. Maecenas eu ullamcorper quam. Phasellus quis pulvinar odio. Vestibulum interdum, sem sed varius ornare, diam nunc gravida leo, hendrerit vehicula tortor ipsum nec augue. Vestibulum rutrum condimentum libero. Sed posuere dignissim nulla in ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla pulvinar est orci, imperdiet iaculis lectus pharetra ac. Cras suscipit hendrerit ultricies. Cras gravida erat libero, dictum aliquet arcu mattis dictum'}
               embed={'https://imgs.search.brave.com/LBD6kKBih2dOEVNxTGDXIaw6rrnOGH4C_ASPuF_hnt0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhvdWdodGNvLmNv/bS90aG1iL3JlSTNk/UFVLRzFLLUs2NWdG/X0FQcmNHWFBuND0v/MjUweDAvZmlsdGVy/czpub191cHNjYWxl/KCk6bWF4X2J5dGVz/KDE1MDAwMCk6c3Ry/aXBfaWNjKCkvMTE5/NTA1MjU4LXJlc2l6/ZS01NmE0OGNmMTVm/OWI1OGI3ZDBkNzgx/OTMuanBn'}
           />

           {/*bkl buat map dri list ja ^*/}

       </div>
    </div>
  )
}
