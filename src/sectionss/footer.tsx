import React from 'react'

const links = ["Teitter", "Instagram", "Facebook"]
const Footer = () => {
    return (
        <footer className='mt-16 border-t border-[#333] bg-[#252525] px-[45px] py-[15px] absolute bottom-0 left-0 w-full'>
            <div className='float-left flex'>
                {links.map((link) => (
                    <a href='#' target='_blank' title={link} className='text-[#ddd] text-[13px] leading-[21px] opacity-60 hover:opacity-100  no-underline'>{link}</a>
                ))}


            </div>

            <span className='float-right text-[#ddd] text-[13px] leading-[21px] '>© 2024 All rights reserved</span>
        </footer>
    )
}

export default Footer