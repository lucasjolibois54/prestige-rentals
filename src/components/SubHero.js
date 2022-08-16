import React from 'react'
import Button from '@mui/material/Button'

// pictures
//Grunge
import Grunge2 from '../images/grunge02.webp'
//Phones
import Phone1 from '../images/phone01.webp'
import Phone2 from '../images/phone02.webp'

function SubHero() {
  return (
    <div>
      <img
        id="grunge"
        className=" absolute bg-center left-0 bg-repeat-x"
        src={Grunge2}
        alt=""
      />
      <h2 className="md:text-1xl sm:text-xl xs:text-md text-center text-gray-500">
        Convenient Interaction
      </h2>

      <h1
        className="lg:text-7xl md:text-5xl sm:text-4xl xs:text-3xl
 font-bold text-center mt-5"
      >
        Premium App
      </h1>
      <h2 className="md:text-xl sm:text-lg xs:text-sm w-80 md:w-full mx-auto text-center mt-8 mb-16">
        We provide our customers with the most incredible driving emotions.
        <br></br>
        That's why we only have world-class cars in our fleet.
      </h2>
      <div className="flex">
        <img
          id="phone01"
          className="bg-center w-1/4 relative"
          src={Phone1}
          alt=""
        />
        <img
          id="phone02"
          className="bg-center w-1/5 absolute"
          src={Phone2}
          alt=""
        />
      </div>
      <div className="mx-1 flex mt-0 justify-center">
        <Button className="outlined-btn-premium" variant="outlined">
          Learn more
        </Button>
      </div>
    </div>
  )
}

export default SubHero
