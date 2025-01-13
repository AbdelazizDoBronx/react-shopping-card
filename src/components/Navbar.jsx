import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {cart} = useSelector(state => state.products)
    const navLinks = ['Home','Collections','About us']
  return (
    <header className='max-w-7xl mx-auto shadow-sm py-5 flex justify-between items-center mt-5'>
        <h2 className='text-2xl font-semibold'>Shopy</h2>
        <nav>
            <ul className='flex gap-5 font-medium text-sm'>
                {navLinks.map((link,idx)=>(
                    <li key={idx}>{link}</li>
                ))}
            </ul>
        </nav>
            <div className='relative'>
                <ShoppingBag size={32}/>
                <span className='absolute -top-2 -right-2 text-sm bg-red-500 text-white p-1 w-6  flex items-center justify-center font-bold rounded-full'>{cart.length}</span>
            </div>
    </header>
  )
}

export default Navbar