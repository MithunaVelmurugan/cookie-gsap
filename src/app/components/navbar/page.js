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
            <button className='border text-[30px] border-[#552c10] font-medium rounded-full px-6'>Buy now</button>
        </nav>
    )
}

export default NavBar