import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NewsDetail from './Body/NewsDetail'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path="/news" element={<NewsDetail />} />
    </Routes>
  )
}

export default App