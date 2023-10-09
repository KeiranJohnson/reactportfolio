import React from 'react'
import {useState, useEffect} from 'react'

const Background = () => {

    const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    
    const handleMouseMove = (event) => {
      setMousePos({x: event.clientX, y: event.clientY, pageX: event.pageX, pageY: event.pageY, screenX: event.screenX, screenY: event.screenY})
    };

      window.addEventListener('mousemove', handleMouseMove);
      
      return () => { 
        const x = -mousePos.x + mousePos.pageX;
        
        //window.document.getElementById('bgID').style.backgroundPositionX = mousePos.x / 10 + 'px'
        //window.document.getElementById('bgID').style.backgroundPositionY = mousePos.y / 10 + 'px'

        window.document.getElementById('bgID').style.transform = `translate(${mousePos.x / 10 + "px"},${mousePos.y / 10 + "px"}) rotate(20deg)`;
        window.removeEventListener( 'mousemove', handleMouseMove )
      }
    })

  return (
   <>
   <div className='absolute w-full overflow-hidden top-[90%] mt-[50px]  left-0 right-0 bottom-0 mb-[0px] bg-gradient-to-b z-[-1]'/>
    <div className='absolute h-screen w-full overflow-hidden top-0 left-0 right-0 bottom-0 mix-blend-soft-light bg-gradient-to-tr from-indigo-900 via-indigo-800 to-indigo-800 z-[-2]'/>
    <div className='h-[150vh]w-screen top-0 left-0 right-0 bottom-0 blur-[0.5px] absolute z-[-3] overflow-hidden'>
        <div id='bgID' className={`gridBackground`} />
    </div>
    </>
  )
}

export default Background