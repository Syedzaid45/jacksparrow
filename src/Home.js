import React from 'react'
import Nav from './Nav'
import logo from  "./jack.jpg";
import Fade from 'react-reveal/Fade';
export default function Home() {
  return (
  <>
   <Nav></Nav>

<div  className='bg-gradient-to-r from-black via-black  to-gray-800  w-full  h-full    flex flex-row justify-between  relative '>

<div className="img  h-screen w-screen ">
<img className='h-full w-2/3 ' src={logo} alt="" />
</div>

<Fade top delay={500 } >
<div className="info text-white  p-4 z-10 mt-4  ">
<h1 className='text-8xl font-sans font-bold '>
  JACK 
</h1>
<span className='text-9xl font-sans font-bold '> SPARROW </span>
<Fade delay={1000}>
<span className='my-3 font-serif '> - Johnny Depp </span>
</Fade>
<Fade delay={1500}>
   <div className=' bg-transparent border rounded-xl p-4 mt-12   '>
     <Fade top  delay={2000 }>

  <p className='pl-2 font-bold '>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, ad.
  </p>
     </Fade>
     <Fade top delay={2500}>

  <p className='mt-2  pl-2'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores quis harum sequi optio odit tenetur amet quaerat architecto maiores!
  </p>
     </Fade>
     <Fade top delay={3000 }>

  <div className='p-3 mt-4 items-end  flex flex-row justify-between '>
     <input className='w-2/3 p-2 rounded-xl placeholder:ml-2 shadow-lg text-black ' type="text" placeholder='Enter email.. ' /> 
     <input  className='w-1/3 bg-black ml-2 p-2  rounded-xl  shadow-lg  hover:translate-x-1 cursor-pointer ' type="button" value="Subscribe !" />
  </div>
     </Fade>
 </div>
</Fade>
</div>
</Fade>
<Fade right>
<div className='bg-gray-400 h-screen w-1/3  absolute right-0  rounded-l-full shadow-md  shadow-gray-400    '>

</div>
</Fade>




</div>
  </>
  )
}
