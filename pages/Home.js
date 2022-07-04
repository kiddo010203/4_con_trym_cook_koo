import React from 'react';
import './Home.css';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
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
        <span class="sr-only">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Home;