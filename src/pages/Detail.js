import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/Detail.css';

const Detail = () => {
  const [datas, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    console.log(' buy useEffect!!! ');
    let url =
      'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai/' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    console.log('>>> check dataUse : ', datas);
    console.log('app useeffect!!');
    let url_modeles = 'https://62be5b370bc9b1256155ad45.mockapi.io/model';

    fetch(url_modeles)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className='banner'></div>
        </div>
        <div className='container'>
          <ul>
            <li className='list-group-item'>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right" />
            </li>
            <li className="list-group-item">
              <Link to=""> Sản Phẩm</Link>
            </li>
            <li className="fa-solid fa-angle-right" style={{paddingTop : '3%'}}/>
            <li className="list-group-item">
              <Link to="/">{datas.name}</Link>
            </li>
            <li className="fa-solid fa-angle-right" style={{paddingTop : '3%'}}/>
            <li className="list-group-item">Nổi bật</li>
          </ul>
        </div>
        <img src={datas.picture} style={{marginTop : '5%' , width : '100%'}} />
      </div >
      <div className="container-fluid">
        <div className="row menu-product">
          <li>
            <Link to="/store/">Tìm đại lí</Link>
          </li>
          <li>
            <Link to="/testdrive/">Đăng kí lái thử</Link>
          </li>
          <li>
            <Link to="/">Dịch vụ</Link>
          </li>
        </div>
        <div className="row menu-product-sub">
          <li>
            <Link to="/">{datas.name}</Link>
          </li>
          <li>
            <Link to="/">Đăng kí lái thử</Link>
          </li>
          <li>
            <Link to="/">Dịch vụ</Link>
          </li>
        </div>
      </div>
    </>
  );
};
export default Detail;
