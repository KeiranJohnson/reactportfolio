import Head from 'next/head'
import Image from 'next/image'


import {useState, useEffect} from 'react'
import Background from '@/components/Background'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Header from '@/components/Header'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {

  return (
    <>
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      
      <Header  />
      
      <main className=''>
      
      <Hero></Hero>
      
      <Work></Work>
      <Testimonials></Testimonials>
      <Contact></Contact>     
      <Footer></Footer> 

      
        
      </main>
      
      
    </>
  )
}
