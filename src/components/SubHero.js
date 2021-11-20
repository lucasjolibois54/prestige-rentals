import React from 'react'
import Button from '@mui/material/Button'

import grunge from '../images/grunge02.png'

import phone01 from '../images/phone01.png'
import phone02 from '../images/phone02.png'

function SubHero() {
  return (
    <div>
      <img
        id="grunge"
        className=" absolute bg-center left-0 bg-repeat-x"
        src={grunge}
        alt=""
      />
      <h2 className="text-2xl text-center text-gray-500">
        Convenient Interaction
      </h2>

      <h1 className="text-8xl font-bold text-center mt-5">Premium App</h1>
      <h2 className="text-2xl text-center mt-8 mb-16">
        We provide our customers with the most incredible driving emotions.
        <br></br>
        That's why we only have world-class cars in our fleet.
      </h2>
      <div className="flex relative">
        <img id="phone01" className="bg-center w-1/4" src={phone01} alt="" />
        <img id="phone02" className="bg-center w-1/4" src={phone02} alt="" />
      </div>
      <div className="relative">
        <Button className="outlined-btn-premium" variant="outlined">
          Learn more
        </Button>
      </div>
    </div>
  )
}

export default SubHero
