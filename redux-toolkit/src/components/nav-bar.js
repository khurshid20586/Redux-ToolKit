import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => {
    const cart = useSelector((state) => state.cart)
    return (
        <>
            <Link to='/'>Home</Link>{' '}
            <Link to='/cart'>Cart</Link>
            <div>Cart: {cart.length}</div>
        </>
    )
}

export default Nav