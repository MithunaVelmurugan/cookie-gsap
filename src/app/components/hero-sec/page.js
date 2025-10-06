'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useRef } from 'react'
import 'lenis/dist/lenis.css'
import Lenis from 'lenis'

const HeroSec = () => {
  gsap.registerPlugin(ScrollTrigger)
  const cookieRef = useRef()
  const chocoRef = useRef()
  const sec2Ref = useRef()
  const sec3Ref = useRef()

  useGSAP(() => {

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); 
    });

    gsap.ticker.lagSmoothing(0);


    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: sec2Ref.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      }
    })
    tl1.to(cookieRef.current, {
      rotate: 45,
      top: '150%',
      left: '10%',
      scale: 1.3,
      ease: 'power3.inOut'
    })
    tl1.to(chocoRef.current, {
      left: '85%',
      top: '125%',
      rotate: 0
    }, '-=0.39')


    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: sec3Ref.current,
        start: '20% bottom',
        end: 'center center',
        scrub: true
      }
    })

    tl2.to(cookieRef.current, {
      scale: 0.73,
      rotate: -45,
      left: '40%',
      top: '247%'
    })
  }, [])

  return (
    <main>
      <div className='h-[81vh] relative pb-10 flex justify-center items-center'>
        <h1 className='text-[19vw] text-center z-10 tracking-[50px] font-extrabold'>Cookies</h1>
        <Image ref={cookieRef} width={350} height={350} src={'/cookie.webp'} className='object-cover h-auto z-[1] absolute drop-shadow-2xl -rotate-45' alt='cookie' />
        <Image ref={chocoRef} width={200} height={200} src={'/choco-chips.png'} className='object-cover h-auto absolute drop-shadow-2xl bottom-[14%] left-[40%] -rotate-[45deg]' alt='chips' />
        <Image width={100} height={100} src={'/peanut.png'} className='object-cover h-auto absolute drop-shadow-2xl right-[14%]' alt='chips' />
      </div>
      <div ref={sec2Ref} className='h-screen p-8 sm:p-10 flex justify-between items-center bg-[#b976487d]'>
        <div className='w-[35%]'></div>
        <div className='w-[60%]'>
          <h1 className='font-extrabold text-[9vw]'>Taste the difference.</h1>
          <h6 className='text-[4vw] font-normal'>Real eggs, Real butter, Real sugar.</h6>
          <p className='text-[2vw]'>Cookie Co. was founded in 2020 during the height of the Covid-19 pandemic by Elise and Matt Thomas. Working behind the scenes to open the first Cookie Co. location, Elise baked her signature cookie recipes using real eggs, real butter, and real cane sugar in her home, preparing hundreds of boxes weekly by hand for driveway pick-up.</p>
        </div>
      </div>
      <div ref={sec3Ref} className='h-screen flex flex-wrap pt-20 justify-center items-center gap-10'>
        <div className='w-[25%] h-[300px] bg-[#552c10] flex flex-col justify-center items-center relative rounded-4xl p-4'>
          <Image width={250} height={250} src={'/frosted-sugar.webp'} className='h-auto object-cover absolute top-[-55%] drop-shadow-2xl z-10 -rotate-45' alt='cook' />
          <h1 className='text-[5vw] text-[#fff8dc] font-extrabold'>Frosted Sugar</h1>
          <button className='text-[2vw] border border-[#fff8dc] text-[#fff8dc] rounded-full px-5'>Buy now</button>
        </div>
        <div className='w-[25%] h-[300px] bg-[#552c10] flex flex-col justify-center items-center relative rounded-4xl p-4'>
          <h1 className='text-[5vw] text-[#fff8dc] font-extrabold'>Monster</h1>
          <button className='text-[2vw] border border-[#fff8dc] text-[#fff8dc] rounded-full px-5'>Buy now</button>
        </div>
        <div className='w-[25%] h-[300px] bg-[#552c10] flex flex-col justify-center items-center relative rounded-4xl p-4'>
          <Image width={250} height={250} src={'/oreo.webp'} className='h-auto object-cover absolute top-[-55%] drop-shadow-2xl z-10 -rotate-45' alt='cook' />
          <h1 className='text-[5vw] text-[#fff8dc] font-extrabold'>Oreo</h1>
          <button className='text-[2vw] border border-[#fff8dc] text-[#fff8dc] rounded-full px-5'>Buy now</button>
        </div>
      </div>
    </main>
  )
}

export default HeroSec