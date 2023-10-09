import React from 'react'
import Image from 'next/image'

import coding from '../public/img/coding.png'
import charts from '../public/img/charts.png'
import office from '../public/img/office.png'

const Work = () => {
  return (
    
    <div id="work"  className='relative h-full text-center flex flex-col items-center bg-dark-indigo pb-[100px] '>
            <div className='relative h-full w-full top-0 left-0 right-0 bottom-0  bg-gradient-to-b--l from-indigo-800 from-20% via-indigo-900 via-50% to-indigo-950 to-85% mix-blend-overlay opacity-40'/>
           
            <div className='w-full h-full pt-[50px] text-center flex flex-col items-center'>

                <div className='w-full text-4xl tracking-widest text-white text-center flex justify-center antialiased drop-shadow-lg mb-16'></div>

                    <div className=' text-white mt-10 grid grid-cols-1 sm:grid-cols-2 text-center max-h-full w-full max-w-[1400px]'>
                
                        <div className='grid gap-10 text-left pl-6 pr-3'>
                            <div className='flex flex-col group'>                    
                                <Image width={800} height={300} src={coding} className='rounded-xl border border-gray-600 opacity-60 group-hover:opacity-100 group-hover:border-gray-200 duration-700'></Image>
                                <h1 className='p-5 pt-8 text-2xl'>SOFTWARE DEVELOPMENT</h1>
                                <p className='p-5 border-l-2 text-gray-500 cursor-default hover:border-indigo-700 transition-colors ease-in-out duration-700 font-light'>We offer custom software development services for businesses of all sizes. We have a team of experienced developers who can create the perfect software solution for your company.</p>
                                <div className='mt-2 w-40 h-12 text-1xl text-center place-self-end flex justify-center items-center border hover:bg-white hover:text-dark-indigo hover:font-bold hover:cursor-pointer duration-100 ease-in-out'>SOFTWARE</div>
                            </div>

                            <div className='flex flex-col group'>
                                <Image width={800} height={600} src={office} className='rounded-xl border border-gray-600 opacity-60 group-hover:opacity-100 group-hover:border-gray-200 duration-700'></Image>
                                <h1 className='p-5 pt-8 text-2xl'>BUSINESS DEVELOPMENT</h1>
                                <p className='p-5 border-l-2 text-gray-500 cursor-default hover:border-indigo-700 transition-colors ease-in-out duration-700'>We help businesses grow by developing custom strategies for their needs. Whether you're just starting out or looking to take your business to the next level, we can help you achieve your goals. </p>
                                <div className='mt-2 w-40 h-12 text-1xl text-center place-self-end flex justify-center items-center border hover:bg-white hover:text-dark-indigo hover:font-bold hover:cursor-pointer duration-100 ease-in-out'>DEVELOPMENT</div>
                            </div>

                        
                            
                        </div>


                        <div className='grid pr-6 pl-3 gap-10 text-left'>
                            <div className='flex flex-col mt-36 group '>
                                <Image width={800} height={300} src={charts} className='rounded-xl  border border-gray-600 opacity-60  group-hover:opacity-100 group-hover:border-gray-200 duration-700'></Image>
                                <h1 className='p-5 pt-8 text-2xl'>DATA ANALYTICS</h1>
                                <p className='border-l-2 p-5 text-gray-500 cursor-default hover:border-indigo-700 transition-colors ease-in-out duration-700'>Data Analytics Business is a comprehensive guide to starting and growing a data analytics business. We provide the latest news, tips, and resources to help you get started.</p>
                                <div className='mt-2 w-40 h-12 text-1xl text-center place-self-end flex justify-center items-center border hover:bg-white hover:text-dark-indigo hover:font-bold hover:cursor-pointer duration-100 ease-in-out'>ANALYTICS</div>
                            </div>
                        </div>

                    </div>
                </div>
    </div>
  )
}

export default Work