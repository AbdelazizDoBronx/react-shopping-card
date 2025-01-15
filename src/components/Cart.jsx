import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, handleQteDec, handleQteInc } from '../store/productSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.products)

    // Calculate the total price of the cart
    const totalPrice = cart.reduce((total, product) => total + product.price * product.qte, 0)

    // Handle quantity increment
    const handleQteinc = (id) => {
        dispatch(handleQteInc(id))
    }

    // Handle quantity decrement
    const handleQtedic = (id, currentQte) => {
        if (currentQte > 1) { // Prevent decrementing below 1
            dispatch(handleQteDec(id))
        }
    }

    // Handle item deletion
    const handleDelete = (productId) => {
        dispatch(deleteFromCart(productId))
    }

    return (
        <div className="container mx-auto p-4">
            {cart.length === 0 ? (
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-600">Your cart is empty.</h2>
                </div>
            ) : (
                <div>
                    {cart.map(product => (
                        <div key={product.id} className="flex justify-between items-center bg-white p-4 mb-4 shadow-md rounded-lg">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-700">{product.title}</h3>
                                <p className="text-sm text-gray-500">Price: ${product.price}</p>
                                <p className="text-sm text-gray-500">Quantity: {product.qte}</p>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => handleQtedic(product.id, product.qte)}
                                        className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={product.qte}
                                        readOnly
                                        className="shadow-sm p-2 w-12 text-center"
                                    />
                                    <button
                                        onClick={() => handleQteinc(product.id)}
                                        className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-center ml-4">
                                <button
                                    onClick={() => handleDelete(product.id)}
                                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4 flex justify-between items-center border-t pt-4">
                        <h3 className="text-lg font-semibold text-gray-700">Total Price</h3>
                        <p className="text-lg font-semibold text-gray-800">${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
