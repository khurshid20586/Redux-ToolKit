import React, { useEffect, useState } from 'react'
import Card from '../components/product' 

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
      const fetchProds = async () =>  {
         const prods = await fetch('https://fakestoreapi.com/products')
         const items = await prods.json()
         setProducts(items)
      }
      fetchProds()
    }, [])

    return (
        <div>
            {products?.map(itm => <Card item={itm} /> )}
        </div>
    )
}

export default Home
