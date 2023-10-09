import React, { use } from 'react'
import { useState } from 'react'

const Contact = () => {

  const [email, setEmailAddress] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');


  return (
    <div id="contact" className='h-screen bg-dark-indigo flex justify-center'>
      
      <div className='w-[1240px] flex flex-col items-center  pt-40'>

        <div>

        <div className='pb-5'>
        <h1 className='text-white text-2xl pb-5'>CONTACT US</h1>
        <p className='text-gray-400 text-sm'>Send us a message if you're interested in our services.</p>

        </div>
          <form>
            <div className='pb-5'>
              <input className='bg-white/5 sm:min-w-[40vw] min-w-[80vw] p-3 text-white hover:ring-1 ring-indigo-700 duration-150 ease-in-out cursor-pointer focus:ring-1 focus:ring-white focus:duration-500 focus:outline-0 focus:cursor-text' type='text' name='email' value={email} placeholder="Name" onChange={e => setEmailAddress(e.target.value)}></input>
            </div>
            <div className='pb-5'>
              <input className='bg-white/5 sm:min-w-[40vw] min-w-[80vw] p-3 text-white hover:ring-1 ring-indigo-700 duration-150 ease-in-out cursor-pointer focus:ring-1 focus:ring-white focus:duration-500 focus:outline-0 focus:cursor-text' type='text' name='email' value={email} placeholder="Email Address..." onChange={e => setEmailAddress(e.target.value)}></input>
            </div>
            <div className='pb-5'>
              <textarea className='bg-white/5 sm:min-w-[40vw] min-w-[80vw] min-h-[30vh]  p-3 text-white hover:ring-1 ring-indigo-700 duration-150 ease-in-out cursor-pointer focus:ring-1 focus:ring-white focus:duration-500 focus:outline-0 focus:cursor-text'type='textarea' name='message' placeholder='Enter Message...'></textarea>
            </div>
          
            <button className='w-40 h-12 text-1xl text-white text-center place-self-end flex justify-center items-center border hover:bg-white hover:text-dark-indigo hover:font-bold hover:cursor-pointer duration-100 ease-in-out'>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact