import { ShoppingBag } from 'lucide-react'
import React from 'react'

const Navbar = () => {
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
            <span className='absolute -top-2 -right-2 text-sm bg-red-500 text-white p-1 w-6  flex items-center justify-center font-bold rounded-full'>2</span>
        </div>
    </header>
  )
}

export default Navbar