import React from 'react';
import './Home.css';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/Accent.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/Slide-website-new-elantra-2000x599.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/Slide-website-new-i10-2000x599.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/Slide-website-new-kona-2000x599.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/MicrosoftTeams-image%20(22).png" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/Slide-website-new-tucson-2000x599.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/slide-website.jpg" class="d-block w-100" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      <div>
        SẢN PHẨM
      </div>
      <div className='container'>
        <div className="card-body">
          <h2>Dịch vụ bảo trì</h2>
          <p>Tại sao bạn nên kiểm tra xe thường xuyên?</p>
          <button type="button" class="btn btn-primary">Xem thêm</button>
        </div>
        <div className="card">
          <img src='https://hyundai-api.thanhcong.vn/storage/uploads/maintenance/service-hyundai-min.png' />
        </div>
      </div>
      <div id='tintuc' className='container'>
        <div className='col-sm-6'>Tin tức</div>
        <h3>Cập nhật tin tức mới nhất về Huyndai</h3>
        <div>
          <img src='https://hyundai-api.thanhcong.vn/storage/uploads/post/%E1%BA%A2nh%202.jpg' />
        </div>

      </div>
    </div>
  );
};

export default Home;
