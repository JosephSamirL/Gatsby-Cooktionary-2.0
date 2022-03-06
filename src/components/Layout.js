import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/global.scss'
const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div className='container'>
    {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout