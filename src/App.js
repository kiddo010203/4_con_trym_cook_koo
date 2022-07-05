import './App.css';
import * as ReactDOM from 'react-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Model from './pages/Model';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="model/:id" element={<Model />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}