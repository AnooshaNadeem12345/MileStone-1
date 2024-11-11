 "use client"
 import React from 'react';
import Navbar from './components/navbar';
import HomePage from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Image from 'next/image';
function Page(){
  return(
    <div>
      <Navbar/>
      <HomePage/>
      <About/>
      <Contact/>
    </div>
  )
}
export default Page;
