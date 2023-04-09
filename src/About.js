import React from 'react'
import video from  './depp.mp4'; 
import Fade from 'react-reveal/Fade';
export default function About() {
  return (
   <>
 <div className='flex flex-col justify-between h-screen relative    '>
  <div className="video w-screen h-1/2 bg-cover fixed  ">
<video className='w-screen  bg-cover   ' loop muted autoPlay src={video} ></video>
  </div>
  <div className=' items-center text-center mt-8  '>
    <h1 className=' font-bold text-xl '>
     ABOUT ME ! 
     </h1>
  </div>
  <div className="components bg-white w-screen  h-1/2 z-30  ">
    <h1  className=' mt-6 text-center font-bold text-2xl   '>
      About me ! 
    </h1>
  
<div className=" flex flex-row justify-between bg-white bottom-0 ">
  <Fade delay={3000} >
    
 
  <div className="award  p-6 flex flex-wrap text-center items-center  bg-white rounded-xl shadow-xl mx-2 h-52 hover:translate-y-1   ">
 <h1  className='text-xl font-sans font-bold  ' >
  <a href="https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Johnny_Depp "> Award </a>
 </h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at minima sit.
</p>

  </div>
  </Fade>
  <Fade delay={2000}   >
  <div className="movies p-6 flex flex-wrap text-center  items-center  bg-white rounded-xl shadow-xl mx-2 h-52  hover:translate-y-1  ">
  <h1 className='text-xl font-sans font-bold  ' >
    <a href="https://en.wikipedia.org/wiki/Hollywood_Vampires_(band)"> Music</a>
  
 </h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at minima sit.
</p>

  </div>
  </Fade>
  <Fade delay={1000}  >
  <div className="about p-6 flex flex-wrap text-center items-center z-30  bg-white rounded-xl shadow-xl mx-2 h-52 hover:translate-y-1   ">
  <h1 className='text-xl font-sans font-bold  ' >
  <a href="https://en.wikipedia.org/wiki/Johnny_Depp "> Movies </a>
 </h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at minima sit.
</p>

  </div>
  </Fade>

</div>
  
  
  </div>
 </div>
   </>
  )
}
