import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'



const Header = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full fixed top-0 left-0 z-10'>
    <div className='text-center text-white flex justify-evenly items-center bg-transparent'>
        <div className='p-8 text-xl font-bold flex items-center cursor-pointer'>
        <Link href="/" className='flex items-center'>            
            <span className=' text-transparent bg-clip-text font-black bg-gradient-to-r text-2xl from-indigo-900 via-indigo-600 to-indigo-800 px-1'>M</span> - POWER
        </Link>
        </div>
        <div className=''>
            <ul className='hidden sm:flex'>
                <li className='p-4 border-b-2 border-transparent hover:border-b-2 hover:border-white hover:text-indigo-600 duration-100 ease-in'>
                    <Link href="/">HOME</Link>
                </li>
                <li className='p-4 border-b-2 border-transparent hover:border-b-2 hover:border-white hover:text-indigo-600 duration-100 ease-in'>
                    <Link href="#work">SERVICES</Link>
                </li>
                <li className='p-4 border-b-2 border-transparent hover:border-b-2 hover:border-white hover:text-indigo-600 duration-100 ease-in'>
                    <Link href="#contact">CONTACT</Link>
                </li>
                
            </ul>
        </div>
    

    <div onClick={handleNav} className='block sm:hidden z-10'>
                { nav ? 
                <AiOutlineClose size={20} /> 
                : 
                <AiOutlineMenu size={20}/>
                }
            </div>
            {/* Mobile Menu */}
            <div className={`sm:hidden absolute top-0 
            ${nav ? 'left-0' : 'left-[-100%]'}
            right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/50 text-center ease-in duration-300`}>
                <ul >
                    <li className='p-4 text-4xl focus:text-gray-500 focus:border-b-2'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500 hover:border-b-2'>
                        <Link href='#work'>Work</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500 hover:border-b-2'>
                        <Link  href='#contact'>Contact</Link>
                    </li>
                </ul>
            </div>
    </div>
    </div>
  )
}

export default Header