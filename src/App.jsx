import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Cart from './components/Cart'

const App = () => {
  return (
    <div> 
        <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Dashboard/>}/>
          <Route path='/cart'  element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App