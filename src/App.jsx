import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Product from './components/Product'

const App = () => {
  return (
    <>
      <Header />
      <Section />
      <Product />
      <About />
      <Testimonials />
      <Blog />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}

export default App