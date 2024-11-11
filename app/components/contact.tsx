import React from 'react'

export default function Contact() {
  return (
    <div id="Contact">
      <div className='  bg-slate-500 h-screen'>
      <h1 className='pt-10 pl-10 hover:text-neutral-700 text-5xl text-black font-bold'>LET'S CONNECT WITH EACH OTHER:</h1>
      <span className='pl-10 font-medium'>
        Mail Me At:
        <a  className="underline hover:text-wrap font-sarif "href="mailto:anooshanadeem226gmail.com">🙌anooshanadeem226@gmail.com</a>
      </span>
      <h1 className='pt-10 pl-10 hover:text-neutral-700 text-5xl text-black font-bold'>PROJECTS:</h1>
      <span className='pl-10 font-medium'>
        <a  className="underline hover:text-wrap font-sarif " href="http://127.0.0.1:5500/"> Static Resume</a>
      </span>
      <span className='pl-10 font-medium'>
      <a className="underline hover:text-wrap font-sarif "  href=""></a>
      </span>
     <h6 className='pl-5 text-black font-bold'> big projects in process...STAY TUNED!</h6>
      <hr className='mt-12 bg-black  flex justify-center'/>
      <h3 className='text-center'>@All Rights Reserved</h3>
      </div>
    </div>
    
      
  )
}



