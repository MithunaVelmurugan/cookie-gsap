import Image from 'next/image'
import React from 'react'

const Sec3 = () => {
    return (
        <div className='h-screen flex flex-wrap justify-center items-center gap-10'>
            <div className='w-[25%] h-[300px] bg-[#552c10] flex flex-col justify-center items-center relative rounded-4xl p-4'>
                <Image width={250} height={250} src={'/frosted-sugar.webp'} className='h-auto object-cover absolute top-[-55%] h-auto drop-shadow-2xl z-10 -rotate-45' alt='cook'/>
                <h1 className='text-[5vw] text-[#fff8dc] font-extrabold'>Frosted Sugar</h1>
                <button className='text-[2vw] border border-[#fff8dc] text-[#fff8dc] rounded-full px-5'>Buy now</button>
            </div>
            <div className='w-[25%] h-[300px] bg-[#552c10] flex flex-col justify-center items-center relative rounded-4xl p-4'>
                <h1 className='text-[5vw] text-[#fff8dc] font-extrabold'>Monster</h1>
                <button className='text-[2vw] border border-[#fff8dc] text-[#fff8dc] rounded-full px-5'>Buy now</button>
            </div>
            <div className='w-[25%] h-[300px] bg-[#552c10] flex flex-col justify-center items-center relative rounded-4xl p-4'>
                <Image width={250} height={250} src={'/oreo.webp'} className='h-auto object-cover absolute top-[-55%] h-auto drop-shadow-2xl z-10 -rotate-45' alt='cook'/>
                <h1 className='text-[5vw] text-[#fff8dc] font-extrabold'>Oreo</h1>
                <button className='text-[2vw] border border-[#fff8dc] text-[#fff8dc] rounded-full px-5'>Buy now</button>
            </div>
        </div>
    )
}

export default Sec3