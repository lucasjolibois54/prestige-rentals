import React from 'react'
import Button from '@mui/material/Button'

function Hero() {
  return (
    <section>
      <img
        id="grunge"
        className="-top-64 absolute bg-center left-0 bg-repeat-x"
        src={
          'https://res.cloudinary.com/aeeux/image/upload/v1637761881/Prestige-Rentals/grunge01_fulyey.webp'
        }
        alt=""
      />
      <h2
        id="prestige"
        className="lg:text-9xl md:text-7xl sm:text-6xl xs:text-5xl font-semibold text-center mt-24 text-off-gray tracking-widest"
      >
        PRESTIGE
      </h2>
      <h2 className="lg:text-7xl md:text-5xl sm:text-4xl xs:text-3xl text-center text-black tracking-wider mt-4">
        CAR RENTAL
      </h2>
      <div className="flex mt-8 justify-center">
        <div className="mx-1">
          <Button className="outlined-btn" variant="outlined">
            Learn more
          </Button>
        </div>
        <div className="mx-1">
          <Button className="contained-btn" variant="contained">
            Download App
          </Button>
        </div>
      </div>
      <img
        id="bmw"
        className="bg-center w-1/2"
        src={
          'https://res.cloudinary.com/aeeux/image/upload/v1637761881/Prestige-Rentals/bmw02_umqmgw.webp'
        }
        alt=""
      />
    </section>
  )
}

export default Hero
