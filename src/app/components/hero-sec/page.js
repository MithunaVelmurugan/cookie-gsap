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
  const peanutRef = useRef()
  const headingRef = useRef()

  useGSAP(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    gsap.from(headingRef.current, {
      y: 40,
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    })
    gsap.from([cookieRef.current, chocoRef.current, peanutRef.current], {
      scale: 0.8,
      autoAlpha: 0,
      duration: 1.1,
      ease: 'power3.out',
      stagger: 0.1,
      delay: 0.4,
    })

    const mm = gsap.matchMedia()

    mm.add(
      {
        isMobile: '(max-width: 639px)',
        isMobileLarge: '(min-width: 640px) and (max-width: 767px)',
        isTabletOnly: '(min-width: 768px) and (max-width: 1023px)',
        isDesktop: '(min-width: 1024px)',
      },
      (context) => {
        const { isMobile, isTabletOnly, isMobileLarge, isDesktop } = context.conditions

        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: '#story',
            start: '20% 100%',
            end: 'center center',
            scrub: true,
            invalidateOnRefresh: true,
          }
        })

        if (isMobile) {
          tl1.to([cookieRef.current, chocoRef.current], {
            scale: 0.4,
            autoAlpha: 0,
            rotate: 0,
            ease: 'power3.inOut',
            stagger: 0.08,
          })
        }
        else if (isTabletOnly || isMobileLarge) {
          tl1.to(cookieRef.current, {
            rotate: 45,
            top: '130vh',
            left: '-20%',
            scale: 1.3,
            ease: 'power3.inOut'
          })
        }
        else if (isDesktop) {
          tl1.to(cookieRef.current, {
            rotate: 45,
            top: '130vh',
            left: '8%',
            scale: 1.3,
            ease: 'power3.inOut'
          })
          tl1.to(chocoRef.current, {
            left: '85%',
            top: '125%',
            rotate: 0
          }, '-=0.39')
        }

        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: '#products',
            start: '20% bottom',
            end: 'center center',
            scrub: 3,
            invalidateOnRefresh: true,
          }
        })

        if (isDesktop) {
          tl2.to(cookieRef.current, {
            scale: 0.73,
            rotate: -45,
            translateX: '-50%',
            left: '50%',
            top: '230vh'
          })
        } else if (isTabletOnly && !isMobileLarge) {
          tl2.to(cookieRef.current, {
            scale: 0.43,
            rotate: -45,
            translateX: '-50%',
            left: '50%',
            top: '238vh'
          })
        }

        return () => {
          tl1.kill()
          tl2.kill()
        }
      }
    )
  }, [])

  return (
    <main>
      <div className='h-[100vh] relative pb-10 flex justify-center items-center pt-24 px-4'>
        <h1 ref={headingRef} className='text-[clamp(3.5rem,19vw,11rem)] text-center z-10 tracking-[clamp(6px,3vw,50px)] font-extrabold leading-none'>
          Cookies
        </h1>
        <Image ref={cookieRef} width={350} height={350} src={'/cookie.webp'} className='object-cover w-[45%] sm:w-auto h-auto z-[1] absolute drop-shadow-2xl -rotate-45' alt='cookie' />
        <Image ref={chocoRef} width={200} height={200} src={'/choco-chips.png'} className='object-cover w-[25%] sm:w-auto h-auto absolute drop-shadow-2xl bottom-[14%] left-[40%] -rotate-[45deg]' alt='chips' />
        <Image ref={peanutRef} width={100} height={100} src={'/peanut.png'} className='object-cover w-[13%] sm:w-auto h-auto absolute drop-shadow-2xl right-[10%] sm:right-[14%]' alt='peanut' />
      </div>
    </main>
  )
}

export default HeroSec