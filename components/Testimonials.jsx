import React, { use } from 'react'
import {useRef, useEffect} from 'react'

const Testimonials = () => {

  const scrollDivRef = useScroll()

  useEffect(() => {
  })

  function useScroll() {

  const scrollRef = useRef()

  useEffect(() => {
    const el = scrollRef.current;
    if(el){
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scroll({
          left: el.scrollLeft + e.deltaY * 1.5,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return scrollRef;
  }

  return (
    <div className='bg-dark-indigo border-t border-b w-full flex justify-center'>
      
        <div ref={scrollDivRef} className=' w-[1400px] h-48 pt-5 pb-5 flex justify-start sm:justify-between overflow-x-scroll overscroll-x-none scroll-smooth no-bar '>
           
             <div className='border p-5 aspect-video '>
              <div className='text-white'> random white text here</div>
              <div className='text-gray-400 '> - Company</div>
             </div>
             <div className=' border p-5 aspect-video'>
              <div className='text-white'> random white text here</div>
              <div className='text-gray-400 '> - Company</div>
             </div>
             <div className=' border p-5 aspect-video'>
              <div className='text-white'> random white text here</div>
              <div className='text-gray-400 '> - Company</div>
             </div>
             <div className=' border p-5 aspect-video'>
              <div className='text-white'> random white text here</div>
              <div className='text-gray-400 '> - Company</div>
             </div>
             <div className=' border p-5 aspect-video'>
              <div className='text-white'> random white text here</div>
              <div className='text-gray-400 '> - Company</div>
             </div>
             <div className=' border p-5 aspect-video'>
              <div className='text-white'> random white text here</div>
              <div className='text-gray-400 '> - Company</div>
             </div>
             <div className=' border p-5 aspect-video'>
              <div className='text-white'> random white text here</div>
              <div className='text-gray-400 '> - Company</div>
             </div>

          
        </div>

           

    </div>
  )
}

export default Testimonials