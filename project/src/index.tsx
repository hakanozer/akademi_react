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
import Search from './pages/Search';
import { LikesProvider } from './context/LikesContext';
import { PageCountProvider } from './context/PageCountContext';
import Likes from './pages/Likes';


// Router Config
const router =
<PageCountProvider>
  <LikesProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={ <Control item={<Dashboard />} /> } />
        <Route path='/profile' element={ <Control item={<Profile />} /> } />
        <Route path='/productDetail/:pid' element={ <Control item={<ProductDetail />} /> } />
        <Route path='/search' element={ <Control item={<Search />} /> } />
        <Route path='/likes' element={ <Control item={<Likes />} /> } />
      </Routes>
    </BrowserRouter>
  </LikesProvider>
</PageCountProvider>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(router);


