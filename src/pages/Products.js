import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductList from '../Components/ProductList';
import { Link, NavLink } from 'react-router-dom';
import './css/Products.css';

export default function Products() {
  const [hyundai, setHyundai] = useState(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setHyundai(data);
      });

    console.log('app useeffect!!');
    let url_model = 'https://62be5b370bc9b1256155ad45.mockapi.io/model';
    fetch(url_model)
      .then((response) => response.json())
      .then((data) => {
        setModel(data);
      });
  }, []);

  var model_jsx = [];
  if (model != null) {
    model_jsx = (
      <nav style={{ padding: '3%', width: '1110px'}} className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="menu nav navbar-nav">
          {
            (model_jsx = model.map((item) => (
              <li key={item.id}>
                <Link to={'model/' + item.model_name}>
                  {item.model_name}
                </Link>
              </li>
            )))
          }
        </ul>
      </nav>
    );
  }

  return (
    <div className="container">
      <div className="container">
        <div className="banner"></div>
      </div>
      <div className="container">
        <ul>
          <li className="list-group-item">
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <li className="list-group-item">
            <Link to=""> Sản Phẩm</Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="list">
          <div className="banner-text">
            <h1 className="text-center">Sản Phẩm</h1>
            <h4 className="text-center">
              Tất cả sản phẩm của Huyndai Hoàng Cầu Việt Nam
            </h4>
          </div>
          <img
            className="banner-img"
            src="https://www.dailyhyundai.org/files/banner-F3Gvps4gzK.jpg"
          />
        </div>
      </div>
      <div className='container'>
        {model_jsx}
      </div>

      <ProductList data={hyundai}></ProductList>
    </div>

  );
}