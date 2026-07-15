'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
    { quote: 'Hands down the best chocolate chip cookie I have ever had. Warm, gooey, gone in two bites.', name: 'Priya R.' },
    { quote: 'You can genuinely taste the real butter. Worth every driveway pick-up during the pandemic.', name: 'Jordan M.' },
    { quote: 'The Oreo cookie is unreal. My kids ask for Cookie Co. by name now.', name: 'Amara T.' },
]

const Testimonials = () => {
    const sectionRef = useRef()
    const cardsRef = useRef([])

    useGSAP(() => {
        gsap.from(cardsRef.current, {
            y: 40,
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                toggleActions: 'play none none none',
                invalidateOnRefresh: true,
            }
        })
    }, [])

    return (
        <div ref={sectionRef} className='py-20 sm:py-24 px-6 bg-[#fff8dc]'>
            <p className='font-[var(--font-italianno)] text-[clamp(2rem,4vw,3rem)] text-[#552c10] leading-none mb-2 text-center'>
                Kind words
            </p>
            <h2 className='font-extrabold text-[clamp(2rem,6vw,3.5rem)] tracking-tight mb-12 sm:mb-14 text-center text-[#552c10]'>
                What people say.
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {testimonials.map((t, i) => (
                    <div
                        key={t.name}
                        ref={(el) => (cardsRef.current[i] = el)}
                        className='bg-white rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
                    >
                        <p className='text-[#552c10] text-[22px] md:text-[25px] 2xl:text-[30px] leading-relaxed mb-6'>&ldquo;{t.quote}&rdquo;</p>
                        <p className='font-extrabold text-[22px] md:text-[25px] 2xl:text-[30px] text-[#552c10]'>{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials