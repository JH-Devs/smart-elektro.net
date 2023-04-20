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
import Kamery from '../pages/categories/Kamery'
import Chuvicky from '../pages/categories/Chuvicky'
import Zasuvky from '../pages/categories/Zasuvky'
import Termostaty from '../pages/categories/Termostaty'
import Zvonky from '../pages/categories/Zvonky'
import Osvetleni from '../pages/categories/Osvetleni'
import Alarmy from '../pages/categories/Alarmy'
import Meteostanice from '../pages/categories/Meteostanice'
import Alexa from '../pages/categories/Alexa'
import Kvetinace from '../pages/categories/Kvetinace'
import Asistant from '../pages/categories/Asistant'
import Spotrebice from '../pages/categories/Spotrebice'

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

        <Route path='/shop/chytre-spotrebice' element={<Spotrebice/>} />
        <Route path='/shop/kamery' element={<Kamery/>} />
        <Route path='/shop/chuvicky' element={<Chuvicky/>} />
        <Route path='/shop/zasuvky' element={<Zasuvky/>} />
        <Route path='/shop/termostaty' element={<Termostaty/>} />
        <Route path='/shop/zvonky' element={<Zvonky/>} />
        <Route path='/shop/osvetleni' element={<Osvetleni/>} />
        <Route path='/shop/alarmy' element={<Alarmy/>} />
        <Route path='/shop/meteostanice' element={<Meteostanice/>} />
        <Route path='/shop/alexa' element={<Alexa/>} />
        <Route path='/shop/kvetinace' element={<Kvetinace/>} />
        <Route path='/shop/asistant' element={<Asistant/>} />


        <Route path='/prihlaseni' element={<Login/>} />
        <Route path='/registrace' element={<Signup/>} />
       {/* <Route path='/*' element={</>}>
            <Route path='/admin/nastenka' element={<Dashboard/>} />
        </Route> */}
    </Routes>
  )
}

export default Routers