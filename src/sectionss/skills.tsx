import SkillCard from '@/components/skillCard'
import React from 'react'
import { HiOutlineDesktopComputer, HiOutlineSpeakerphone } from 'react-icons/hi'
import { RiStore3Line } from 'react-icons/ri'
import { TiPencil } from 'react-icons/ti'

const Skills = () => {
    const paragraph = "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.";
    return (
        <section className='"px-[15px]'>
            <h2 className='relative w-fit mb-[30px] text-[21px] pb-[7px] text-[#f5f5f5] font-semibold before:content-[""] before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-[#353535] after:content-[""] after:absolute after:bottom-0 after:w-[30px] after:left-0 after:h-0.5 after:bg-[#007ced]'>
                What I Do
            </h2>
            <div className='flex '>
                <div className=''>
                    <SkillCard icon={TiPencil} heading='Copywrite' paragraph={paragraph} />
                    <SkillCard icon={HiOutlineDesktopComputer} heading='Web Design' paragraph={paragraph} />
                </div>
                <div className='px-[15px]'>

                    <SkillCard icon={RiStore3Line} heading='Ecomerce' paragraph={paragraph} />
                    <SkillCard icon={HiOutlineSpeakerphone} heading='Marketing' paragraph={paragraph} />
                </div>
            </div>
        </section>
    )
}

export default Skills