import React from 'react'
import { useDispatch } from 'react-redux'
import { add, remove } from '../store/cart-slice'

function Product(props) {
    const { item, type="product" } = props
    const dispatch = useDispatch()
    const addItem = (item) => {
        dispatch(add(item))
    }
    const removeItem = (item) => {
        dispatch(remove(item))
    }
    return (
        <div key={item.id}>
            <img src={item.image} alt='item.title' height="80" />
            <h4>{item.title}</h4>
            <h4>{item.price}</h4>
            {type === 'cart' ? <button onClick={() => removeItem(item.id)}>Remove</button> : <button onClick={() => addItem(item)}>Add to Cart</button>}
            
        </div>
    )
}

export default Product