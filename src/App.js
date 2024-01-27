import React from 'react'
import Details from './Components/Card/Details';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Navigate, Route, Routes,Outlet } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route 
        path='/'
         element={
          <>
        <Header/>
        {/* <Outlet /> */}
        </>
        } />
        <Route path='/products/:id'  element={<Details/>} />
        {/* <Route path='*'  element={<PageNotFound/>} /> */}
      </Routes>
      </BrowserRouter>
      {/* <Details/> */}
        {/* <Header/> */}
    </div>
  )
}

export default App