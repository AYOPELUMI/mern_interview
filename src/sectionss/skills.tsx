import SectionHeader from '@/components/sectionHeader'
import SkillCard from '@/components/skillCard'
import React from 'react'
import { HiOutlineDesktopComputer, HiOutlineSpeakerphone } from 'react-icons/hi'
import { RiStore3Line } from 'react-icons/ri'
import { TiPencil } from 'react-icons/ti'

const Skills = () => {
    const paragraph = "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.";
    return (
        <section className='"px-[15px]'>
            <SectionHeader text='What I Do' />
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