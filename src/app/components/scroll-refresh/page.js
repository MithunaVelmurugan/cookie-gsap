'use client'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const ScrollRefresh = () => {
    useEffect(() => {
        const refresh = () => ScrollTrigger.refresh()

        // covers fonts/images finishing after initial GSAP calc
        window.addEventListener('load', refresh)

        // fonts loading late (next/font) can also shift layout
        if (document.fonts?.ready) {
            document.fonts.ready.then(refresh)
        }

        // final safety net in case something loads slightly late
        const timeout = setTimeout(refresh, 1000)

        return () => {
            window.removeEventListener('load', refresh)
            clearTimeout(timeout)
        }
    }, [])

    return null
}

export default ScrollRefresh