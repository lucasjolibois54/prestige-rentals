import React from 'react'
import PhoneMockup from '../images/PhoneMockup.png'
import phone2 from '../images/Phone2.png'

function SubHero() {
    return (
      <div>
      <div id="top" className=" p-0 flex flex-col w-full xl:flex-row md:p-16 mb-4">
         <div className="w-full xl:w-9/12 grid lg:justify-items-center">
          <img src={phone2} className="pt-16 w-full xl:w-10/12" alt="Phone Mockup" />
      </div>
          <div className="flex text-center flex-col w-9/12 px-3 justify-center xl:w-8/12 xl:text-left ">      {/*  PL-10 */}
          <h3 className="text-lg pt-10 text-light-gray mb-3 font-light">
          Convenient Interaction
          </h3>
          <h2 className="text-4xl text-dark-blue sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans lg:mt-0 mt-4 text-dark-text py-0 mb-8">
          Modern App
              
          </h2>
          <p className="text-base text-dark-blue md:text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-26">
          Don’t deny yourself the pleasure of driving the best premium cars from around the world here and now. Don’t deny yourself the pleasure of driving the best premium cars from around the world.
          </p>
          <div className="flex justify-center text-center items-center py-0 xl:justify-start">
              <a href="#" >
                  <button href="#" class="shadow-lg bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110">
                   Download App
                  </button>
              </a>
          </div>
      </div>
  </div>
  </div>
    )
}

export default SubHero
