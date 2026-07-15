'use client'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(SplitText)

const NavBar = () => {
    const splitRefs = useRef({})
    const [menuOpen, setMenuOpen] = useState(false)
    const drawerRef = useRef()
    const overlayRef = useRef()
    const linksRef = useRef([])

    const navHover = (e) => {
        const target = e.currentTarget
        const key = target.dataset.navKey

        if (splitRefs.current[key]?.animating) return
        splitRefs.current[key]?.split?.revert()

        const split = SplitText.create(target, { type: "words, chars" })
        splitRefs.current[key] = { split, animating: true }

        gsap.fromTo(
            split.chars,
            { y: 5, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                duration: 0.4,
                ease: 'power2.out',
                stagger: 0.03,
                onComplete: () => {
                    if (splitRefs.current[key]) {
                        splitRefs.current[key].animating = false
                    }
                },
            }
        )
    }

    const navItems = ['Franchise', 'Shipping', 'Location', 'Catering']

    useGSAP(() => {
        if (menuOpen) {
            gsap.set(drawerRef.current, { display: 'flex' })
            gsap.fromTo(overlayRef.current,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 0.3, ease: 'power2.out' }
            )
            gsap.fromTo(drawerRef.current,
                { xPercent: 100 },
                { xPercent: 0, duration: 0.5, ease: 'power3.out' }
            )
            gsap.fromTo(linksRef.current,
                { y: 20, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.4, ease: 'power2.out', stagger: 0.06, delay: 0.15 }
            )
        } else if (drawerRef.current) {
            gsap.to(drawerRef.current, {
                xPercent: 100,
                duration: 0.4,
                ease: 'power3.in',
                onComplete: () => gsap.set(drawerRef.current, { display: 'none' })
            })
            gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.3 })
        }
    }, [menuOpen])

    return (
        <>
            <nav className='fixed top-0 left-0 right-0 z-50 flex justify-between px-6 sm:p-8 items-center backdrop-blur-sm'>
                <h1 className='text-[clamp(2.75rem,4vw,3.75rem)] font-extrabold tracking-tight'>Cookie.co</h1>

                <ul className='hidden md:flex justify-between gap-8 items-center'>
                    {navItems.map((item) => (
                        <li
                            key={item}
                            data-nav-key={item}
                            onMouseEnter={navHover}
                            className='text-[25px] md:text-[30px] 2xl:text-[35px] tracking-wide cursor-pointer font-medium'
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                <div className='flex items-center gap-3'>
                    <button className='hidden md:block border hover:bg-[#552c10] transform duration-500 hover:scale-105 hover:drop-shadow-[0_8px_3px_rgba(0,0,0,0.29)] hover:text-[#fff8dccc] cursor-pointer text-[20px] md:text-[25px] 2xl:text-[35px] tracking-wide border-[#552c10] font-medium rounded-full px-6 py-2'>
                        Buy now
                    </button>

                    <button
                        onClick={() => setMenuOpen(true)}
                        aria-label='Open menu'
                        className='md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 cursor-pointer'
                    >
                        <span className='w-6 h-[2px] bg-[#552c10]'></span>
                        <span className='w-6 h-[2px] bg-[#552c10]'></span>
                        <span className='w-6 h-[2px] bg-[#552c10]'></span>
                    </button>
                </div>
            </nav>

            <div
                ref={overlayRef}
                onClick={() => setMenuOpen(false)}
                className='fixed inset-0 bg-black/40 z-40 invisible md:hidden'
            />

            <div
                ref={drawerRef}
                className='fixed top-0 right-0 h-full w-[75%] max-w-xs bg-[#fff8dc] z-50 hidden flex-col p-8 pt-24 gap-6 md:hidden'
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    aria-label='Close menu'
                    className='absolute top-6 right-6 text-2xl text-[#552c10] cursor-pointer'
                >
                    ✕
                </button>

                {navItems.map((item, i) => (
                    <a
                        key={item}
                        href='#'
                        ref={(el) => (linksRef.current[i] = el)}
                        onClick={() => setMenuOpen(false)}
                        className='text-[28px] font-medium text-[#552c10] tracking-wide'
                    >
                        {item}
                    </a>
                ))}

                <button className='mt-4 border border-[#552c10] text-[#552c10] font-medium rounded-full px-6 py-2.5 w-fit text-[16px] hover:bg-[#552c10] hover:text-[#fff8dc] transition duration-300'>
                    Buy now
                </button>
            </div>
        </>
    )
}

export default NavBar