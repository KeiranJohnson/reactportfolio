import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col align-middle items-center mt-[-50px] mb-[50px] justify-center h-screen'>
        
      
      <div className='text-white group w-56 max-w  lg:w-auto'>
      
        
      <div className='border-b mb-8 mx-[-50px] group-hover:mx-[0px] duration-500 ease-in-out' content=' '></div>
          <div>
            <h2 className='text-5xl lg:text-6xl font-bold duration-500 ease-in-out lg:hover:text-[5rem] hover:cursor-default'>
              <span className='text-transparent bg-clip-text font-black bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-800 px-1'>M</span>
                - POWERING YOUR BUSINESS
                 </h2>
          </div>
          <p className='py-10 font-thin text-sm lg:text-xl lg:hover:text-2xl duration-500 ease-in-out'>
            Building Weapons Grade Sites to power your Business
          </p>
          <div className='w-full hover:my-4 duration-500 ease-in-out text-right'>
          <button className="px-8 py-2 border duration-500 ease-in-out hover:bg-white hover:font-bold hover:text-indigo-900">FIND OUT MORE</button>
          </div>
          <div className='border-b mt-8 mx-[-50px] group-hover:mx-[0px] duration-500 ease-in-out' content=' '></div> 
      </div> 
      

      
    </div>
    
  )
}

export default Hero