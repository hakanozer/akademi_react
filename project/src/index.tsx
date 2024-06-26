import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './utils/Site.css'

// import pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Control from './pages/Control';
import ProductDetail from './pages/ProductDetail';


// Router Config
const router =
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/dashboard' element={ <Control item={<Dashboard />} /> } />
    <Route path='/profile' element={ <Control item={<Profile />} /> } />
    <Route path='/productDetail/:pid' element={ <Control item={<ProductDetail />} /> } />
  </Routes>
</BrowserRouter>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(router);


