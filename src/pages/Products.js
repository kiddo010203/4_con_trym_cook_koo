import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductList from '../Components/ProductList';
import { Link, NavLink } from 'react-router-dom';
import './Products.css';

export default function Products() {
  const [shop, setShop] = useState(null);
  const [modeles, setModeles] = useState(null);

  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setShop(data);
      });

    console.log('app useeffect!!');
    let url_model = 'https://62be5b370bc9b1256155ad45.mockapi.io/model';
    fetch(url_model)
      .then((response) => response.json())
      .then((data) => {
        setModeles(data);
      });
  }, []);

  var modeles_jsx = [];
  if (modeles != null) {
    modeles_jsx = (
      <nav className=" category navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container col-md-3 col-sm-6">
          <ul className=" navbar-nav">
            {
              (modeles_jsx = modeles.map((item) => (
                <li>
                  <Link to={'model/' + item.model}>{item.model}</Link>
                </li>
              )))
            }
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <div className="container">
      <div className="banner">
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
        <div className="list">
          <div className="banner-text">
            <h1 className="text-center">Sản Phẩm</h1>
            <h4 className="text-center">
              Tất cả sản phẩm của Huyndai Hoàng Cầu Việt Nam
            </h4>
          </div>
          <img className="banner-img" src="https://www.dailyhyundai.org/files/banner-F3Gvps4gzK.jpg" />
        </div>
        {modeles_jsx}

        <ProductList data={shop}></ProductList>
      </div>
    </div>
  );
}
