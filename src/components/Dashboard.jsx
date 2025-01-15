import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/productSlice'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const dispatch = useDispatch()
  const handlleAddToCart = (product) => {
      dispatch(addToCart(product))
  }


  const {products} = useSelector((state) => state.products)

 

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-8">
      <Link to='/cart'>
            <h2>See Cart</h2>  
        </Link> 
      <h2 className="mt-5 mb-10 text-3xl text-center text-neutral-700">
        Welcome to our online store
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="rounded-md border shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
          >
            {/* <img
              src={product?.images[0]}
              alt={product.title}
              className="w-full h-60 object-cover"
            /> */}
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-neutral-800">{product.title}</h2>
              <p className="text-sm text-neutral-600 mt-2">{product.description}</p>
              <p className="my-2 text-xl font-bold text-purple-600">${product.price}</p>
              <div>
                <button
                onClick={e=>handlleAddToCart(product)}
                className="w-full bg-purple-500 text-white py-2 rounded-md shadow-sm font-semibold transition-colors duration-300 hover:bg-purple-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
