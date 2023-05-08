import { BrowserRouter } from 'react-router-dom'

import { About, Events, Feedbacks, Hero, Navbar, Tech, Works } from './components'

import { StarsCanvas } from './components/canvas';
import Plx from "react-plx";
import ring from "./assets/assets/ring.jpg"

const App = () => {
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 2,
          property: "scale",
        },
      ],
    },
  ];
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary' >
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        
        <Hero />
      </div>
      <About />
      <Events />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
      </div>
      <StarsCanvas />
    </div>
    </BrowserRouter>
  )
}

export default App
