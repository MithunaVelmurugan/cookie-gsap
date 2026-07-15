'use client'
import React from 'react'

const socials = ['Instagram', 'Twitter', 'Facebook']

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <footer className='bg-[#552c10] text-[#fff8dc] px-6 sm:px-10 pt-14 sm:pt-16 pb-8'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-12 mb-10 md:mb-12'>
                <div className='max-w-sm'>
                    <h2 className='text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold tracking-tight mb-3'>Cookie.co</h2>
                    <p className='text-[15px] leading-relaxed opacity-80'>
                        Real eggs, real butter, real sugar — baked fresh, delivered to your driveway since 2020.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='w-full max-w-sm'>
                    <p className='text-[15px] font-medium mb-3 tracking-wide'>Get 10% off your first box.</p>
                    <div className='flex flex-col xs:flex-row gap-2'>
                        <input
                            type='email'
                            required
                            placeholder='your@email.com'
                            className='flex-1 rounded-full bg-transparent border border-[#fff8dc]/40 px-4 py-2 text-sm placeholder:text-[#fff8dc]/50 focus:outline-none focus:border-[#fff8dc]'
                        />
                        <button
                            type='submit'
                            className='shrink-0 rounded-full border border-[#fff8dc] px-5 py-2 text-sm font-medium cursor-pointer hover:bg-[#fff8dc] hover:text-[#552c10] transition duration-300'
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>

            <div className='max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-6 pt-8 border-t border-[#fff8dc]/20'>
                <p className='text-[13px] opacity-60'>© {new Date().getFullYear()} Cookie.co. All rights reserved.</p>
                <div className='flex gap-3'>
                    {socials.map((s) => (
                        <a
                            key={s}
                            href='#'
                            className='text-[13px] tracking-wide rounded-full border border-[#fff8dc]/40 px-4 py-1.5 hover:bg-[#fff8dc] hover:text-[#552c10] transition duration-300'
                        >
                            {s}
                        </a>
                    ))}
                </div>
            </div>
        </footer >
    )
}

export default Footer