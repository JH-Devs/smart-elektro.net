import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../admin/pages/Dashboard'
import Home from '../pages/Home'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
       {/* <Route path='/*' element={</>}>
            <Route path='/admin/nastenka' element={<Dashboard/>} />
        </Route> */}
    </Routes>
  )
}

export default Routers