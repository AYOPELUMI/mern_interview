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
        <header className='pb-10 flex  justify-between relative top-0 left-0 w-full'>
            <a href="/" className="flex gap-2 items-center">
                <div className='bg-[#007ced] size-10 rounded-full text-[28px] leading-[44px] font-extrabold flex items-center justify-center'>A</div>

                <div className='text-white font-semibold text-xl leading-[50px] text-nowrap break-keep '>
                    Alex
                    <span className='font-normal'> Smith</span>
                </div>
            </a>
            <nav>
                <ul className='hidden lg:flex gap-10'>
                    {links.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className='text-sm text-[#f5f5f5] no-underline'>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header