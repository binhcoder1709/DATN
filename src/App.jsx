import React from 'react'
import Navigator from './layouts/client/Navigator'
import { Route, Routes } from 'react-router-dom'
import PublicRouter from './routes/PublicRouter'
import Home from './pages/client/Home'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PublicRouter/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}
