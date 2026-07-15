'use client'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import React, { useRef } from 'react'

gsap.registerPlugin(SplitText)

const NavBar = () => {
    // track split + tween instances per nav item so we can clean up properly
    const splitRefs = useRef({})

    const navHover = (e) => {
        const target = e.currentTarget
        const key = target.dataset.navKey

        // if a split/animation is already active on this element, ignore
        // re-entry until it's done — this is what stops the glitch
        if (splitRefs.current[key]?.animating) return

        // revert any previous split on this element before creating a new one
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

    return (
        <nav className='flex justify-between p-8 sm:p-10 items-center'>
            <h1 className='text-[4vw] font-extrabold'>Cookie.co</h1>
            <ul className='flex justify-between gap-5 items-center'>
                {navItems.map((item) => (
                    <li
                        key={item}
                        data-nav-key={item}
                        onMouseEnter={navHover}
                        className='text-[35px] cursor-pointer font-medium'
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <button className='border hover:bg-[#552c10] transform duration-500 hover:scale-105 hover:drop-shadow-[0_8px_3px_rgba(0,0,0,0.29)] hover:text-[#fff8dccc] cursor-pointer text-[30px] border-[#552c10] font-medium rounded-full px-6'>
                Buy now
            </button>
        </nav>
    )
}

export default NavBar