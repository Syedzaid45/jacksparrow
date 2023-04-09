import React from 'react'
import img from './Black & White.jpeg'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

export default function Contact() {
  return (
    <div className=' w-screen h-screen  bg-black flex flex-row justify-between  relative '>
    
        <div className="details h-full w-5/12 bg-black flex flex-col justify-between   p-6 ">
 <img className='rounded-xl ' src={img} alt="" />
     <div className=' social icon flex flex-row justify-between p-12 '>
    
     <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="white"
  viewBox="0 0 24 24">
  <path
    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="white"
  viewBox="0 0 24 24">
  <path
    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="white"
  viewBox="0 0 24 24">
  <path
    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
</svg>
     </div>
        </div>
        <div className="img h-full w-full   bg-white flex flex-col justify-between   ">
                <div className="connected">
                <section className="relative pt-24 bg-white overflow-hidden">
  <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="flaro-assets/images/contact/gradient.svg" alt=""/>
  <div className="relative z-10 container px-4 mx-auto">
    <Zoom>
    <h2 className="mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Get connected</h2>
    <p className="mb-20 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor to the condimentum vitae vel purus.</p>
    </Zoom>
      
    <div className="flex flex-wrap -m-3">
   
    <Fade  delay={3000}>
      <div className="w-full md:w-1/3 p-3  cursor-pointer ">
        <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
          <div className="mb-6 relative mx-auto w-16 h-16 bg-black rounded-full">
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg width="32" height="33" viewbox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.1666L14.5208 18.1805C15.4165 18.7776 16.5835 18.7776 17.4792 18.1805L28 11.1666M6.66667 25.8333H25.3333C26.8061 25.8333 28 24.6394 28 23.1666V9.83329C28 8.36053 26.8061 7.16663 25.3333 7.16663H6.66667C5.19391 7.16663 4 8.36053 4 9.83329V23.1666C4 24.6394 5.19391 25.8333 6.66667 25.8333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-bold font-heading leading-snug">Send Email</h3>
          <p className="font-medium leading-relaxed">info@mail.com</p>
          <p className="font-medium leading-relaxed">support@mail.com</p>
        </div>
      </div>
      </Fade>

      <Fade  delay={2000} >
      <div className="w-full md:w-1/3 p-3 cursor-pointer">
        <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
          <div className="mb-6 relative mx-auto w-16 h-16 bg-white border border-blueGray-200 rounded-full">
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg width="32" height="33" viewbox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z" stroke="Black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-bold font-heading leading-snug">Call Us</h3>
          <p className="font-medium leading-relaxed">+91 8408 412 569</p>
          <p className="font-medium leading-relaxed">+91 8408 412 569</p>
        </div>
      </div>
      </Fade>

      <Fade delay={1000} >
      <div className="w-full md:w-1/3 p-3 cursor-pointer ">
        <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
          <div className="mb-6 relative mx-auto w-16 h-16 bg-white border border-blueGray-200 rounded-full">
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg width="32" height="33" viewbox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-bold font-heading leading-snug">Address</h3>
          <p className="font-medium max-w-xs mx-auto leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. I</p>
        </div>
      </div>
      </Fade>


    </div>
  </div>
</section>
                </div>
               
        </div>


    </div>
  )
}
