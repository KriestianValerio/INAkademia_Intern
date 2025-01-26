import React from 'react';

const WorkLayout = (props) => {
    return (
        <div className='mt-20'>
            <div className='relative max-w-md mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mt-6 min-w-0 break-words bg-white w-full mb-6 justify-center align-middle'>
                <div className='lg:flex lg:gap-10 grid-rows-2'>
                    <div>
                        <div className='text-left mt-6 mb-12 lg:mt-0 lg:mb-0 xl:pr-10 xl:mt-6 xl:mb-12'>
                            <h1 className='font-[ClashDisplay] text-xl md:text-2xl lg:text-3xl sm:text-center xl:text-left'>{props.header}</h1>
                            <p className='font-[PlusJakartaSansMed] font-medium text-justify leading-tight xl:text-lg tracking-tighter mt-6 lg:mt-3 '>{props.text}</p>
                        </div>
                    </div>
                    {props.video ?
                        <iframe className='object-cover sm:h-[50%] sm:w-[50%] md:h-[55%] md:w-[55%] lg:h-[23rem] lg:w-[22rem] xl:h-96 xl:w-80 rounded-3xl sm:mx-auto lg:my-auto xl:m-0 min-w-[400px]' src={props.embed}></iframe>
                        :
                        <img src={props.embed} alt={props.alt}
                             className='object-cover sm:h-[50%] sm:w-[50%] md:h-[55%] md:w-[55%] lg:h-[23rem] lg:w-[22rem] xl:h-96 xl:w-80 rounded-3xl sm:mx-auto lg:my-auto xl:m-0 min-w-[400px]'
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkLayout;