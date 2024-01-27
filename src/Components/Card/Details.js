import React from 'react'
import NavBar from '../Header/NavBar'
import NavTab from '../Header/Navtab'
import Footer from '../Footer/Footer'
// import '../Header/Header.css'
import FullCard from '../Card/FullCard'
import NavTitle from '../Header/NavTitle'
import Advertisement from './../Advertisement/Advertisement';


function Details() {
  return (
    <div> 
        <NavBar/>
        <div className='all-content'>
        <NavTab/>
        <NavTitle/>
        <FullCard/>
        <Footer/>
        </div>
    </div>
  )
}

export default Details