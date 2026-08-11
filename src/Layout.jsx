import React from 'react'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

// outlet === ye jaha bhi lagate hai uske upar niche ka layout har page pr same rahata hai 

function Layout() {
  return (
    <>
  <Header/>
  <Outlet/>
  <Footer/>
    </>
  )
}

export default Layout