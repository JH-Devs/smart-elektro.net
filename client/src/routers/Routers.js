import React from 'react'
import {Routes, Route} from 'react-router-dom'
//import Dashboard from '../admin/pages/Dashboard'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import WishList from '../pages/WishList'
import Shop from '../pages/Shop'
import Sale from '../pages/Sale'
import HomeBlog from '../blog/pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/vyprodej' element={<Sale/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/seznam-prani' element={<WishList/>} />
        <Route path='/pokladna' element={<Checkout />} />
        <Route path='/kosik' element={<Cart />} />
        <Route path='/blog' element={<HomeBlog/>} />

        <Route path='/prihlaseni' element={<Login/>} />
        <Route path='/registrace' element={<Signup/>} />
       {/* <Route path='/*' element={</>}>
            <Route path='/admin/nastenka' element={<Dashboard/>} />
        </Route> */}
    </Routes>
  )
}

export default Routers