import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Nav from './components/Nav'
import Hero from './components/Hero'
import SubHero from './components/SubHero'
import MainSection from './components/MainSection'
import Features from './components/Features'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <div className="mx-auto justify-center max-w-screen-2xl">
      <Nav />
      <Hero />
      <MainSection />
      <SubHero />
      <Features />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
