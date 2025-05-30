import React from 'react'
interface FunFactCardProps {
    icon: React.ComponentType<{ className?: string }>; // Accepts any component that takes a className prop
    info: string;
    number: number;
}
const FunFactCard: React.FC<FunFactCardProps> = ({ icon: Icon, info, number }) => {
    return (
        <div className='bg-[#333] border border-[#444] mb-[15px] mx-2.5 pt-[25px] pb-[15px] px-[15px] rounded-xl text-center w-full max-w-[25%]  hover:-translate-y-[5px] hover:shadow-[0_12px_17px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-in-out'>
            <Icon className='text-[#007ced] text-3xl leading-[45px] mx-auto' />
            <h4 className='text-[#f5f5f5] font-semibold text-base m-[15px]'>
                {info}
            </h4>
            <span className="text-[#d5d5d5] text-[48px] leading-[52px] mt-[15px] mb-2.5">{number}</span>
        </div>
    )
}

export default FunFactCard