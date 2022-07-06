import React from 'react';
import './css/Home.css';
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

      <div class="container">
        <div class="box1 row">
          <div class="img-hover-zoom col-md-6 col-sm-4" border="1px" solid="#ddd">
            <h2>Dịch vụ thuê xe</h2>
            <p>Tại sao bạn nên thuê xe ôtô?</p>
            <Link to='/' type="button" class="btn btn-primary">Đăng ký thuê xe</Link>
          </div>
          <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
            <img src='https://hyundai-phuyen.vn/upload/tour/296503141091.png' />
          </div>
        </div>
      </div>


      {/* <div class='row row-0'>
        <div class='img-hover-zoom col-sm-6'>
          <img src='	https://hyundai-api.thanhcong.vn/storage/uploads/home-block/service-hyundai-min.png' />
        </div>
        <div class='img-hover-zoom col-sm-6'>
          <img src='	https://hyundai-api.thanhcong.vn/storage/uploads/home-block/service-hyundai-min.png' />
        </div>
        <div class='img-hover-zoom col-sm-6'>
          <img src='	https://hyundai-api.thanhcong.vn/storage/uploads/home-block/service-hyundai-min.png' />
        </div>
        <div class='img-hover-zoom col-sm-6'>
          <img src='	https://hyundai-api.thanhcong.vn/storage/uploads/home-block/service-hyundai-min.png' />
        </div>
      </div> */}

    </div>
  );
};

export default Home;