import React from 'react'

const SectionHeader = ({ text }: { text: string }) => {
    return (
        <h2 className='relative w-fit mb-[30px] text-[21px] pb-[7px] text-[#f5f5f5] font-semibold before:content-[""] before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-[#353535] after:content-[""] after:absolute after:bottom-0 after:w-[30px] after:left-0 after:h-0.5 after:bg-[#007ced]'>
            {text}
        </h2>
    )
}

export default SectionHeader