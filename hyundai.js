import logo from './logo.svg';
import './App.css';
import Layout from './pages/Layout'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function hyundai() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user/:id" element={<User />} />
          <Route path="editinfo/:id" element={<EditInfo />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default hyundai;
