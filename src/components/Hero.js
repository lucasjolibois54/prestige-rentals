import React from 'react'
import Button from '@mui/material/Button'

function Hero() {
  return (
    <div>
      <h2 className="text-8xl font-bold text-center mt-5">PRESTIGE</h2>
      <h2 className="text-6xl text-center text-gray-500">CAR RENTAL</h2>
      <Button className="outlined-btn" variant="outlined">
        Learn more
      </Button>
      <Button className="contained-btn" variant="contained">
        Download App
      </Button>
    </div>
  )
}

export default Hero
