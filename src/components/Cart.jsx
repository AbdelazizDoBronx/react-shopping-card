import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../store/productSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const {cart} = useSelector(state => state.products)


    const handlleDelete = (productId) => {
        dispatch(deleteFromCart(productId))
    }
  return (
    <div>
        {cart?.map(product => (
            <div>
            <div>
                <h2>Product name : </h2>
                <h2>{product.title}</h2>
            </div>
            <div>
                <h2>Product price : </h2>
                <h2>{product.price}</h2>
            </div>
            <div>
               <button onClick={e=>handlleDelete(product.id)}
               >Delete</button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Cart