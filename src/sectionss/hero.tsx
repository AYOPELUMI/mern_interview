import Button from '@/components/button'
import React from 'react'

const Hero = () => {
    return (
        <div className='p-[15px] flex mx-0 xl:mx-[10%] my-[5%] items-center w-full'>
            {/* Image Container */}
            <div className='overflow-hidden rounded-full border-[18px] w-[34.4%] border-[#444]'>
                <img
                    src="/images/picture.jpg"
                    alt="photo"
                    className='w-full h-auto aspect-square object-cover'
                />
            </div>

            {/* Text Container */}
            <div className='flex flex-col px-[30px] pl-[55px] w-[51%]'>
                <p className='text-lg font-normal text-[#aaa]'>Web Designer</p>
                <span className='text-[48px] leading-[56px]  mb-5 text-white'>Alex Smith</span>
                <p className='text-sm font-normal text-[#d5d5d5]'>
                    Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
                </p>
                <div className="mt-7 flex gap-4">
                    <Button text='Download CV' color="#7066ff" />
                    <Button text="Contact" color='#fff' textColor="#333" />
                </div>
            </div>
        </div>
    )
}

export default Hero