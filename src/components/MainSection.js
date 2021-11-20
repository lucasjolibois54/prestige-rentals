import React from 'react'

function MainSection() {
  return (
    <div className="">
      <h2 className="md:text-1xl sm:text-xl xs:text-md text-center text-gray-500 border-2 sm:text-md">
        Convenient Interaction
      </h2>
      <h1 className="lg:text-7xl md:text-5xl sm:text-4xl xs:text-3xl font-bold text-center mt-5">
        Our Vehicle Fleet
      </h1>
      <h2 className="md:text-xl sm:text-lg xs:text-sm text-center mt-8 w-80 mx-auto">
        We provide our customers with the most incredible driving emotions.
        <br></br>
        That's why we only have world-class cars in our fleet.
      </h2>
      <h2 className="text-2xl text-center mt-28 text-gray-500 sm:text-xl">
        Featured Collection
      </h2>
      <section className="text-2xl flex justify-center mt-10">
        <div className=" w-1/4 h-56 mx-5 bg-gray-500 rounded-3xl" />
        <div className=" w-1/4 h-56 mx-5 bg-gray-500 rounded-3xl" />
        <div className=" w-1/4 h-56 mx-5 bg-gray-500 rounded-3xl" />
      </section>
      <section className="text-2xl flex justify-center mt-8">
        <div className="w-1/6 h-56 mx-5 bg-gray-500 rounded-3xl" />
        <div className="w-1/6 mx-5 bg-gray-500 rounded-3xl" />
        <div className="w-1/6 mx-5 bg-gray-500 rounded-3xl" />
        <div className="w-1/6 mx-5 bg-gray-500 rounded-3xl" />
      </section>
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
    </div>
  )
}

export default MainSection
