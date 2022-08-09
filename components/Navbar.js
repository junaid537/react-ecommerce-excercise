
import React from 'react'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'
//import {cartState,useCart} from '../store/cartState';
import { useCart } from "../store/cartState";
import {Cart} from './Cart.js'
export const Navbar = () => {
  //const [carte,setCarte]=useCart();
  const [showCart, setShowCart] = useState(false);

  const [cart] = useCart();

  //console.log('navbar',carte)
  const onCartClickHandler=()=>{
        setShowCart((prevState) => !prevState);     
  }
  const navLinkStyles=({isActive})=>{
    return{
        fontWeight:isActive?'bold':'normal',
        color:isActive?'red':'blue',
        textDecoration:isActive?'none':'underline'
    }

}
  return (
    <>
    <div className='navbar'>
        <div className='navbar-child'>
            <div className='nav-components'>
                <span className='home-nav-link'><NavLink  to='/' style={navLinkStyles}>Home</NavLink></span>
                <span><NavLink style={navLinkStyles} to='/products/:Id' >Product</NavLink></span>
            </div>
            <div><button className='nav-button'  onClick={(e)=>{onCartClickHandler()}}>My Cart {Object.keys(cart).length?`(${Object.keys(cart).length})`:null} </button></div>
        </div>
    </div>
    {showCart && <Cart />}
    </>
  )
}

