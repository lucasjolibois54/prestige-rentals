import React from 'react'
import Button from '@mui/material/Button'

function SubHero() {
  return (
    <div>
      <img
        id="grunge"
        className=" absolute bg-center left-0 bg-repeat-x"
        src={
          'https://res.cloudinary.com/aeeux/image/upload/v1637761880/Prestige-Rentals/grunge02_oqymvx.webp'
        }
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
          src={
            'https://res.cloudinary.com/aeeux/image/upload/v1637761880/Prestige-Rentals/phone01_ec4b4v.webp'
          }
          alt=""
        />
        <img
          id="phone02"
          className="bg-center w-1/5 absolute"
          src={
            'https://res.cloudinary.com/aeeux/image/upload/v1637761880/Prestige-Rentals/phone02_yzavpm.webp'
          }
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
