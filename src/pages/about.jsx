import React from 'react'
import Banner from './components/Banner'
import About from './components/About'
import Features from './components/Features'
import FAQs from './components/FAQs'
import Team from './components/Team'

export default function about() {
  return (
   <>
   <Banner page="About" header="About Us"/>
   <About/>
   <Features/>
   <FAQs/>
   <Team/>
   </>
  )
}

 