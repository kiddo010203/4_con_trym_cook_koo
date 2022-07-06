import './App.css';
import * as ReactDOM from 'react-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Model from './pages/Model';
import Admin from './pages/Admin';
import AdminCars from './pages/AdminCars';
// import CarDetail from './pages/CarDetail';
import CarEdit from './pages/CarEdit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="model/:name" element={<Model />} />
          <Route path="admin/123" element={<Admin />} />
          <Route path="admincars/123" element={<AdminCars />} />
          {/* <Route path="cardetail/123" element={<CarDetail />} /> */}
          <Route path="caredit/123" element={<CarEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}