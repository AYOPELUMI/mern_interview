import FunFactCard from '@/components/funFactCard'
import SectionHeader from '@/components/sectionHeader'
import React from 'react'
import { BiSolidCoffeeTogo } from 'react-icons/bi'
import { MdFavoriteBorder, MdStarBorder } from 'react-icons/md'
import { PiWatchBold } from 'react-icons/pi'


const facts = [
    {
        icon: MdFavoriteBorder,
        info: "Happy Clients",
        number: 578,
    },
    {
        icon: PiWatchBold,
        info: "Woeking Hours",
        number: 4780,
    },
    {
        icon: MdStarBorder,
        info: "Awards Won",
        number: 10,
    },
    {
        icon: BiSolidCoffeeTogo,
        info: "Coffee",
        number: 1286,
    },
]
const FunFacts = () => {
    return (
        <section className='"px-[15px]'>
            <SectionHeader text='Fun facts' />
            <div className='flex '>
                {facts.map((fact) => (
                    <FunFactCard key={fact.info} icon={fact.icon} info={fact.info} number={fact.number} />
                ))}
            </div>

        </section>
    )
}

export default FunFacts