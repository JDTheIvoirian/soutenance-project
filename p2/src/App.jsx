import { useState } from 'react'
import './App.css'
import Navbar from './navbar/navbar'
import Banner from './banner/banner'
import AllProductSection from './all_product_section/all_product_section'
import Footer from './footer/footer'
import DashboardVendeur from './dashboard_vendeur/dashboard_vendeur'


function App() {
  
  return (
    <>
      <Navbar />
      <Banner />
      <AllProductSection />
      <AllProductSection />
      <Footer />
    </>
  )
}

export default App
