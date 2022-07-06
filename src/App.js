import './App.css';
import * as ReactDOM from 'react-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Model from './pages/Model';
import AdminCars from './pages/AdminCars';
import CarEdit from './pages/CarEdit';
import Service from './pages/Service';
import Baohanh from './pages/Baohanh';
import Baoduongsuachua from './pages/Baoduongsuachua';
import Phutungphukien from './pages/Phutungphukien';
import Chuongtrinh from './pages/Chuongtrinh';
// import Trieuhoi from './pages/Trieuhoi';
// import Baoduongsuachua from './pages/Baoduongsuachua';
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
          <Route path="admin/123" element={<AdminCars />} />
          <Route path="/admin/caredit/:id" element={<CarEdit />} />
          <Route path="service" element={<Service />} />
          <Route path="baohanh" element={<Baohanh />} />
          <Route path="baoduongsuachua" element={<Baoduongsuachua />} />
          <Route path="phutungphukien" element={<Phutungphukien />} />
          <Route path="chuongtrinh" element={<Chuongtrinh />} />
          {/* <Route path="trieuhoi" element={<Trieuhoi />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}