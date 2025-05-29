import Button from '@/components/button'
import React from 'react'

const Hero = () => {
    return (
        <div className=' px-4 flex gap-16 mx-[10%] my-[5%] items-center'>
            <div className=' overflow-hidden rounded-full border-[18px] border-[#444]'>
                <img src="/images/picture.jpg" alt="photo" className='size-full aspect-square ' />
            </div>
            <div className=' flex flex-col px-[15px]'>
                <p className='text-lg font-normal text-[#aaa]'>Web Designer</p>
                <span className='text-4xl mb-5 yexy-white'>Alex Smith</span>
                <p className='text-sm font-normal text-[#d5d5d5] text-wrap break-after-all'>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
                <div className="mt-7 flex gap-10">
                    <Button text='Download CV' color="#7066ff" />
                    <Button text="Contact" color='#fff' textColor="#333" />

                </div>
            </div>
        </div>
    )
}

export default Hero