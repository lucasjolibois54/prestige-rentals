import React from 'react'

// pictures
//BMW
import BMWX601 from '../images/bmwX6-01.webp'
import BMWX602 from '../images/bmwX6-02.webp'
import BMWX603 from '../images/bmwX6-03.webp'
//BMW

function MainSection() {
  return (
    <section>
      <h2 className="md:text-1xl sm:text-xl xs:text-md text-center text-gray-500 border-2 sm:text-md">
        Convenient Interaction
      </h2>
      <h1 className="lg:text-7xl md:text-5xl sm:text-4xl xs:text-3xl font-bold text-center mt-5">
        Our Vehicle Fleet
      </h1>
      <h2 className="md:text-xl sm:text-lg xs:text-sm text-center mt-8 w-80 md:w-full mx-auto">
        We provide our customers with the most incredible driving emotions.
        <br></br>
        That's why we only have world-class cars in our fleet.
      </h2>
      <h2 className="text-2xl text-center mt-28 text-gray-500 sm:text-xl">
        Featured Collection
      </h2>
      <section className="text-2xl flex justify-center mt-10">
        <div className=" w-1/4 mx-5  rounded-3xl">
          <img
            id="fleet"
            className="bg-center rounded-3xl w-full "
            src={BMWX601}
            alt=""
          />
        </div>
        <div className=" w-1/4 mx-5 rounded-3xl">
          <img
            id="fleet"
            className="bg-center rounded-3xl w-full"
            src={BMWX603}
            alt=""
          />
        </div>
        <div className=" w-1/4 mx-5 rounded-3xl">
          <img
            id="fleet"
            className="bg-center rounded-3xl w-full"
            src={BMWX602}
            alt=""
          />
        </div>
      </section>
      {/* <section className="text-2xl flex justify-center mt-8">
        <div className="w-1/6 mx-5 rounded-3xl">
          <img
            id="fleet"
            className="bg-center rounded-3xl w-full"
            src={
              'https://res.cloudinary.com/aeeux/image/upload/v1637767447/Prestige-Rentals/carpixel.net-2017-bentley-bentayga-falconry-by-mulliner-65836-hd_ui7a8z.webp'
            }
            alt=""
          />
        </div>
        <div className="w-1/6 mx-5 rounded-3xl">
          <img
            id="fleet"
            className="bg-center rounded-3xl w-full"
            src={
              'https://res.cloudinary.com/aeeux/image/upload/v1637767578/Prestige-Rentals/carpixel.net-2020-audi-s7-sportback-us-98958-hd_tkwyxq.webp'
            }
            alt=""
          />
        </div>
        <div className="w-1/6 mx-5 rounded-3xl">
          <img
            id="fleet"
            className="bg-center rounded-3xl w-full"
            src={
              'https://res.cloudinary.com/aeeux/image/upload/v1637767706/Prestige-Rentals/carpixel.net-2012-laferrari-prototype-73820-hd_ew017w.webp'
            }
            alt=""
          />
        </div>
        <div className="w-1/6 mx-5 rounded-3xl">
          <img
            id="fleet"
            className="bg-center rounded-3xl w-full"
            src={
              'https://res.cloudinary.com/aeeux/image/upload/v1637767945/Prestige-Rentals/carpixel.net-2016-audi-r8-coupe-au-49599-hd_ormuwi.webp'
            }
            alt=""
          />
        </div>
      </section> */}
      <h2 className="text-2xl text-center mt-12 mb-56">
        *Get the{' '}
        <a
          className="text-blue-500 underline"
          href="https://www.apple.com/app-store/"
        >
          app
        </a>{' '}
        to see our entire collection.
      </h2>
    </section>
  )
}

export default MainSection
