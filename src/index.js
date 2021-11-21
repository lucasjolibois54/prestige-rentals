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

class App extends React.Component {
  render() {
    return (
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
        <Footer />
      </div>
    )
  }
}

/* ReactDOM.render(
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
) */

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
