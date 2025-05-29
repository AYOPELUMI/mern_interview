import React from 'react'

const Hero = () => {
    return (
        <div className='w-screen px-4 '>
            <div className='max-w-[41%] overflow-hidden rounded-full'>
                <img src="/images/picture" alt="photo" className='size-full aspect-square ' />
            </div>
            <div className='flex-1 flex flex-col '>
                <p className='text-lg font-normal text-[#aaa]'>Web Designer</p>
                <span className='text-4xl mb-5 yexy-white'>Alex Smith</span>
                <p className='text-sm font-normal text-[#d5d5d5]'>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
            </div>
        </div>
    )
}

export default Hero