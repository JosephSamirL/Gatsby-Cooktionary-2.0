import React, { useState } from 'react'
import {Link} from 'gatsby'
const Navbar = () => {
  const [show,setShow] = useState(false);
  return (
    <>
    <nav className='main-nav'>
      <div className='main-nav_content'>
        <div>
          <Link className='main-nav-link_big' to="/"><span style={{color:"rgb(85, 78, 217)"}}>Cook</span>tionary</Link>
        </div>
        <div className='main-nav-otherContainer'>
        <Link className='main-nav-link' activeClassName='active-link' to="/about">About</Link>

       <Link className='main-nav-link' activeClassName='active-link' to="/recipies">Recipes</Link>
      <Link className='main-nav-link' activeClassName='active-link' to="/tags">Tags</Link>
        <Link className='main-nav-link_last'  to="/contact">Contact</Link>
        <button onClick={()=>{setShow(!show)}} className="nav-mobile"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg></button>
        </div>
        </div>

    <div className={show? 'nav-mobile-show':'nav-mobile_drop'}>
       <Link className='nav-mobile_drop-link' activeClassName='active-link' to="/">Home</Link>
      <Link className='nav-mobile_drop-link' activeClassName='active-link' to="/about">About</Link>
        <Link className='nav-mobile_drop-link' activeClassName='active-link' to="/recipies">Recipes</Link>
        <Link className='nav-mobile_drop-link' activeClassName='active-link' to="/tags">Tags</Link>
        <div className='nav-link contact-link'>
          <Link className='btn'  to="/contact">Contact</Link>
        </div>
        
    </div>
    </nav>
    </>
  )
}

export default Navbar