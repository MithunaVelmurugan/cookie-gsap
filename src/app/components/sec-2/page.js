'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Sec2 = () => {
    const sectionRef = useRef()
    const eyebrowRef = useRef()
    const headingRef = useRef()
    const bodyRef = useRef()

    useGSAP(() => {
        gsap.from([eyebrowRef.current, headingRef.current], {
            y: 30,
            autoAlpha: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
            }
        })
        gsap.from(bodyRef.current, {
            y: 20,
            autoAlpha: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: 0.15,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
            }
        })
    }, [])

    return (
        <div id='story' ref={sectionRef} className='py-20 h-[100vh] sm:py-5 sm:min-h-screen px-6 sm:p-10 flex flex-col sm:flex-row sm:justify-between items-center bg-[#b97648d4] gap-8 sm:gap-0'>
            <div className='w-[35%] hidden sm:block'></div>
            <div className='w-full sm:w-[60%] max-w-2xl'>
                <p ref={eyebrowRef} className='font-[var(--font-italianno)] text-[clamp(2rem,4vw,3rem)] text-[#552c10] leading-none mb-1'>
                    Our story
                </p>
                <h1 ref={headingRef} className='font-extrabold text-[clamp(2.5rem,9vw,6rem)] leading-[0.95] tracking-tight mb-4'>
                    Taste the difference.
                </h1>
                <h6 className='text-[clamp(1.25rem,4vw,2rem)] font-normal mb-4 text-[#552c10]'>
                    Real eggs, real butter, real sugar.
                </h6>
                <p ref={bodyRef} className='text-[25px] md:text-[30px] 2xl:text-[35px] leading-relaxed max-w-xl'>
                    Cookie Co. was founded in 2020 during the height of the Covid-19 pandemic by Elise and Matt Thomas. Working behind the scenes to open the first Cookie Co. location, Elise baked her signature cookie recipes using real eggs, real butter, and real cane sugar in her home, preparing hundreds of boxes weekly by hand for driveway pick-up.
                </p>
            </div>
        </div>
    )
}

export default Sec2