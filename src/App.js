import React, { useEffect, useRef } from 'react'
import './styles/App.scss'

import useWindowSize from './hooks/useWindowSize'

//components
import Nav from './components/Nav'
import Hero from './components/Hero'
import SubHero from './components/SubHero'
import MainSection from './components/MainSection'
import Features from './components/Features'

function App() {
  //Hook to grab window size
  const size = useWindowSize()

  // Ref for parent div and scrolling div
  const app = useRef()
  const scrollContainer = useRef()

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
    // eslint-disable-next-line
  }, [])

  //set the height of the body.
  useEffect(() => {
    setBodyHeight()
  }, [size.height])

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`
  }

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100

    // Difference between
    const difference = data.current - data.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 7.5

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`

    //loop vai raf
    requestAnimationFrame(() => skewScrolling())
  }

  return (
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        <Nav />
        <Hero />
        <MainSection />
        <SubHero />
        <Features />
      </div>
    </div>
  )
}

/*

<div id="container" ref={this.container} className="">
        <div>
          <Nav />
        </div>
        <div className="page first-page">
          <Hero />
        </div>
        <div className="page second-page">
          <MainSection />
        </div>
        <div className="page third-page">
          <SubHero />
        </div>
        <div className="page fourth-page">
          <Features />
        </div>
      </div>

      */

export default App
