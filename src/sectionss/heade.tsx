import React from 'react'

const links = [
    { label: "About Me", href: "about" },
    { label: "AResume", href: "about" },
    { label: "Portfolio", href: "about" },
    { label: "Blog", href: "about" },
    { label: "Contact", href: "about" },
    { label: "Extra", href: "about" },
    { label: "Get it now", href: "about" },
]

const Header = () => {
    return (
        <header className='pb-10 flex  justify-between'>
            <a href="/">
                <div className='bg-[#007ced] size-10 rounded-full '>A</div>

                <div className='text-white font-semibold text-xl text-nowrap break-keep'>
                    Alex
                    <span className='font-normal'>Smith</span>
                </div>
            </a>
            <nav>
                <ul className='hidden lg:flex gap-10'>
                    {links.map((link) => (
                        <li>
                            <a href={link.href} className='text-sm text-[#f5f5f5] no-underline'>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header