import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu]=useState('home');
  return (
    <div className='navbar'>
        <div className='logo'>
           <Link to={"/"}><h1 className='logo-name'>foodie-Go<p className='logo-slogan'>Khao-Pioo</p></h1></Link> 
        </div>

        <div className="menu">
            <ul>
                <Link to={"/"} onClick={()=>setMenu("home")} className={menu==="home"?'active':""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?'active':""}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?'active':""}>Mobile App</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?'active':""}>Contact Us</a>
            </ul>
        </div>

        <div className='lgnSign'>
            <div className="search">
                <img src={assets.search_icon} alt="Search" />
            </div>
            <div className="cart">
               <Link to={'/cart'}> <img src={assets.basket_icon} alt="Cart" /></Link>
                <div className="dot"></div>
            </div>
            <div className="btn1">
                <button onClick={()=>{setShowLogin(true)}}>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar