import React from 'react';

const ProfileBox = (props) => {
  return (
      <div className='mt-80'>
          <div class="relative max-w-md mx-auto md:max-w-lg lg:max-w-3xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-2xl mt-16">
              <div class="px-6">
                  <div class="flex flex-wrap justify-center">
                      <div class="w-full flex justify-center">
                          <div class="relative">
                              <img src={props.img} alt={props.alt}
                                   class="rounded-full justify-center align-middle border-none absolute -mt-28 -ml-20 md:-ml-24 lg:-ml-28 max-w-[170px] md:max-w-[200px] lg:max-w-[230px]"/>
                          </div>
                      </div>
                  </div>
                  <div class="text-center mt-24 lg:pt-12 md:pt-6">
                      <h3 class="text-2xl md:text-3xl font-[500] mb-1 font-[ClashDisplay]">{props.name}'s Portofolio</h3>
                  </div>
                  <div class="mt-2 pb-6 border-slate-200 text-center">
                      <div class="flex flex-wrap justify-center">
                          <div class="w-full px-4">
                              <p class="text-sm md:text-md lg:text-lg font-light mb-4 font-[PlusJakartaSansMed]">{props.quote}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ProfileBox;