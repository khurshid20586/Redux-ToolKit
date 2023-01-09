import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/product'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
 
  return (
    <>
    {cart?.map((itm) => {
      return <Product item={itm} type="cart" />
    })}
    </>
  )
}

export default Cart