'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const products = [
    { name: 'Frosted Sugar', img: '/frosted-sugar.webp' },
    { name: 'Monster', img: null },
    { name: 'Oreo', img: '/oreo.webp' },
]

const Sec3 = () => {
    const sectionRef = useRef()
    const cardsRef = useRef([])

    useGSAP(() => {
        gsap.from(cardsRef.current, {
            y: 50,
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
        <div id='products' ref={sectionRef} className='min-h-screen flex flex-col items-center pt-24 pb-20 px-6'>
            <p className='font-[var(--font-italianno)] text-[clamp(2rem,4vw,3rem)] text-[#552c10] leading-none mb-2'>
                Fan favorites
            </p>
            <h2 className='font-extrabold text-[clamp(2rem,6vw,3.5rem)] tracking-tight mb-12 text-center'>
                Pick your cookie.
            </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-10 sm:gap-10 w-full max-w-6xl mt-[50px] md:mt-[100px] 2xl:mt-[200px] pt-10 sm:pt-0'>
                {products.map((p, i) => (
                    <div
                        key={p.name}
                        ref={(el) => (cardsRef.current[i] = el)}
                        className='h-[280px] sm:h-[300px] bg-[#552c10] flex flex-col justify-center items-center relative rounded-4xl p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]'
                    >
                        {p.img && (
                            <Image
                                width={250}
                                height={250}
                                src={p.img}
                                className={'w-[20%] sm:w-[30%] md:w-[50%] lg:w-[60%] 2xl:w-[70%] h-auto object-cover absolute md:left-[50%] md:translate-x-[-50%] top-[0%] md:top-[-8%] lg:top-[-10%] 2xl:top-[-15%] -translate-y-1/2 drop-shadow-2xl z-10 -rotate-45 ' + (i === 0 ? 'left-0 sm:top-[20%]' : 'right-0 sm:top-[20%]')}
                                alt={p.name}
                            />
                        )}
                        <h1 className='text-[clamp(1.75rem,5vw,2.5rem)] text-[#fff8dc] font-extrabold text-center'>{p.name}</h1>
                        <button className='mt-3 text-[25px] md:text-[30px] 2xl:text-[35px] tracking-wide border border-[#fff8dc] text-[#fff8dc] rounded-full px-5 py-1.5 cursor-pointer hover:bg-[#fff8dc] transition duration-300 hover:drop-shadow-[0_8px_3px_rgba(0,0,0,0.29)] hover:text-[#552c10]'>
                            Buy now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sec3