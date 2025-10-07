import React from 'react'

const NavBar = () => {
    return (
        <nav className='flex justify-between p-8 sm:p-10 items-center'>
            <h1 className='text-[4vw] font-extrabold'>Cookie.co</h1>
            <ul className='flex justify-between gap-5 items-center'>
                <li className='text-[35px] font-medium'>Franchise</li>
                <li className='text-[35px] font-medium'>Shipping</li>
                <li className='text-[35px] font-medium'>Location</li>
                <li className='text-[35px] font-medium'>Catering</li>
            </ul>
            <button className='border hover:bg-[#552c10] transform duration-500 hover:scale-105 hover:drop-shadow-[0_8px_3px_rgba(0,0,0,0.29)] hover:text-[#fff8dccc] cursor-pointer text-[30px] border-[#552c10] font-medium rounded-full px-6'>Buy now</button>
        </nav>
    )
}

export default NavBar