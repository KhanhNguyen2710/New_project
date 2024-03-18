import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Page/Home'

const routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />

    </Routes>
  )
}

export default routers