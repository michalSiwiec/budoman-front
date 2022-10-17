import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PromotedProducts from './PromotedProducts.jsx';
import Products from './Products.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import About from './about/About.jsx';
import Opinions from './opinions/Opinions.jsx';
import Order from './order/Order.jsx';
import NotFound from './NotFound.jsx';

const Main = () => (
  <div className="main">
    <Routes>
      <Route path="/" element={<PromotedProducts />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/opinions" element={<Opinions />} />
      <Route path="/order" element={<Order />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default Main;
