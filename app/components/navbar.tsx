"use client"
import React from 'react';
export default function Navbar(){
  return(
    <nav>
    <ul className="flex-col sm:flex-row space-x-14 bg-gray-800 p-6 flex justify-start">
    <h1 className="font-bold text-white">LOGGED-WEB💨</h1>
    <li><a href="#Home" className="hover:bg-gray-600 text-pink-600">Home</a></li>
    <li><a href="#About" className="hover:bg-gray-600 text-pink-600">About</a></li>
    <li><a href="#Contact" className="hover:bg-gray-600 text-pink-600">Contact</a></li>
   </ul>
    </nav>
  )
}
