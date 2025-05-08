'use client'

import React, { useState, useRef, useEffect } from 'react'

const Header = () => {
    const [lang, setLang] = useState<'PL' | 'EN'>('PL')
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', onClick)
        return () => document.removeEventListener('mousedown', onClick)
    }, [])

    return (
        <header className="py-[42px] max-[650px]:py-[25px]">
            <div className="container flex items-center justify-between relative">
                <img
                    src="/images/logo.svg"
                    alt="Fix Expert Logo"
                    className="max-[1200px]:w-[130px] max-[650px]:w-[120px]"
                />

                <nav aria-label="Primary Navigation" className="absolute top-1/2 left-1/2 -translate-1/2 max-[990px]:hidden" >
                    <ul className="flex items-center px-[26px] border-[1px] border-[#D9D9D9] rounded-full max-[1050px]:px-0">
                        {['Home', 'Dla kogo', 'Testimonials', 'FAQ', 'Kontakt'].map((link) => (
                            <li key={link} className="px-4 py-5 font-bold">
                                <a
                                    href="#"
                                    className="duration-300 text-black hover:text-[#B2CC07]"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center max-[1200px]:text-base">
                    <div ref={dropdownRef} className="relative mr-[26px] max-[650px]:mr-[18px]">
                        <button
                            onClick={() => setIsOpen(o => !o)}
                            aria-haspopup="menu"
                            aria-expanded={isOpen}
                            className="flex items-center font-bold transition"
                        >
                            <span className="pr-2 text-base max-[650px]:text-xs">{lang}</span>
                            <img
                                src="/icons/arrow-down-black.svg"
                                alt=""
                                className={`w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isOpen && (
                            <ul className="absolute left-0 mt-2 w-20 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20">
                                {['PL', 'EN'].map(code => (
                                    <li key={code}>
                                        <button
                                            onClick={() => { setLang(code as 'PL' | 'EN'); setIsOpen(false) }}
                                            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
                                        >
                                            {code}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <a href="https://tally.so/r/mYeEoz">
                        <button className="w-[194px] h-[58px] bg-black text-white font-bold rounded-full flex items-center justify-center border-2 border-black duration-300 group hover:bg-white hover:text-black max-[1200px]:w-[170px] max-[1200px]:h-[50px] max-[650px]:w-[145px] max-[650px]:h-11 max-[650px]:text-xs">
                            <span className="mr-1.5">Zostań testerem</span>
                            <img
                                src="/icons/arrow-right-white.svg"
                                alt=""
                                className="duration-300 invert-0 group-hover:invert"
                            />
                        </button>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
