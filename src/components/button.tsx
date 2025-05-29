'use client'
import React from 'react'

interface ButtonProps {
    color?: string;
    text: string;
    textColor?: string;
}

const Button = ({ color = '#ff0000', text, textColor }: ButtonProps) => {
    return (
        <a
            className="w-fit py-[.8em] px-[2.1em] text-base font-normal mb-[.75em] border-2 bg-[#333] mr-[.25em] rounded-4xl transition-all duration-300 text-nowrap"
            style={{
                borderColor: color,

            }}

            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = color, e.currentTarget.style.color = textColor ?? "white")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#333', e.currentTarget.style.color = "white")}
        >
            {text}
        </a>
    )
}

export default Button