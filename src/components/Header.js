import React from 'react'
import { Link } from 'react-router-dom'
import './Head.css'

export default function Header() {
  return (
    <span className='ui fixed menu'>
      <span className='ui container mcenter'>
      <Link to={`/`}>
      <h2 className='inline'>
        E-SHOP
    </h2>
    </Link>
    <Link to={`/cart`}>
    <h2 className='inline'>
        Cart
    </h2>
    </Link>
      </span>
    </span>
  )
}
