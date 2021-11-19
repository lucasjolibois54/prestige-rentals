import React from 'react'

function Features() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <h2 className="text-2xl text-gray-500 mt-36">Convenient Interaction</h2>
      <h1 className="text-8xl font-bold mt-5">Key Features</h1>
      <h2 className="text-2xl mt-10">
        We are all about our client's comfort and safety. That's <br />
        why we provide the best service you can imagine.
      </h2>
      <section className="text-2xl justify-center flex mx-full mt-36">
        <div className="w-1/4 h-96 mx-5 border-4 rounded-3xl space-y-56">
          <div className="w-1/6 h-14 m-5 border-4 rounded-full border-blue-300 bg-blue-200" />
          <h2 className="">
            24-hour car <br /> delivery
          </h2>
        </div>
        <div className="w-1/4 mx-5 border-4 rounded-3xl space-y-56">
          <div className="w-1/6 h-14 m-5 border-4 rounded-full border-blue-300 bg-blue-200" />
          <h2 className="">
            24/7 technical <br /> support
          </h2>
        </div>
        <div className="w-1/4 mx-5 border-4 rounded-3xl space-y-56">
          <div className="w-1/6 h-14 m-5 border-4 rounded-full border-blue-300 bg-blue-200" />
          <h2 className="">
            All models have a <br /> premium package
          </h2>
        </div>
        <div className="w-1/4 mx-5 border-4 rounded-3xl space-y-56">
          <div className="w-1/6 h-14 m-5 border-4 border-blue-300 rounded-full bg-blue-200" />
          <h2 className="">
            Absolute <br /> confidence
          </h2>
        </div>
      </section>
      {/* Footer */}
      <section className="text-lg flex mx-5 mt-20">
        <div className="mx-12">
          <p className="p-2">Terms of Service</p>
          <p className="p-2">Privacy Policy</p>
        </div>
        <div className="mx-12">
          <p className="p-2">Terms of Service</p>
          <p className="p-2">Privacy Policy</p>
        </div>
        <div className="mx-12">
          <p className="p-2">About Us</p>
          <p className="p-2">Cars</p>
        </div>
        <div className="mx-12">
          <p className="p-2">Careers</p>
          <p className="p-2">Help</p>
        </div>
        <div className="mx-36">
          <p className="p-2 font-bolg">Subscribe to Our Newsletter</p>
          <input
            placeholder="Your e-mail"
            className="w-full h-10 bg-gray-300 rounded-lg"
          ></input>
        </div>
      </section>
    </div>
  )
}

export default Features
