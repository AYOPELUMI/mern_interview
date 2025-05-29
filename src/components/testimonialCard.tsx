import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

const TestimonialCard = ({ img, testimony, author, firm }: { img: string; author: string; testimony: string; firm: string }) => {
    return (
        <div className='bg-[#282828] border border-[#444] relative pt-[30px] pr-5 pb-5 pl-[60px] rounded-lg ml-5 '>
            <div className="absolute size-20 -top-[30px] -left-[30px] rounded-full overflow-hidden">
                <img src={img} className='size-full aspect-square object-cover' />
            </div>
            <p className='text-sm italic mb-2.5 font-normal leading-[1.75em] text-[#d5d5d5] text-wrap break-all'>
                {testimony}
            </p>
            <div className="mt-[15px]">
                <h5 className="text-[#e5e5e5] mb-0.5 text-[0.9em] font-semibold">
                    {author}
                </h5>
                <p className="text-[#bbb] text-[0.8em] font-normal leading-[1.75rem]">
                    {firm}
                </p>
            </div>
            <FaQuoteLeft className="absolute left-5 bottom-[46px] text-[#454545] text-xl" />
            <FaQuoteRight className="absolute -right-6 -bottom-6 text-[#454545] text-[44px] z-[-1]" />


        </div>
    )
}

export default TestimonialCard