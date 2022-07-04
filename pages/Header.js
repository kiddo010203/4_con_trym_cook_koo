import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Thông tin HTV
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to='/' class="dropdown-item">Giới thiệu công ty</Link>
                    <Link to='/' class="dropdown-item">Tin công ty</Link>
                    <Link to='/' class="dropdown-item">Thông tin tuyển dụng</Link>
                    <Link to='/' class="dropdown-item">Công nghệ</Link>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Thông tin HTCV
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to='/' class="dropdown-item">Giới thiệu công ty</Link>
                    <Link to='/' class="dropdown-item">Tin công ty</Link>
                    <Link to='/' class="dropdown-item">Thông tin tuyển dụng</Link>
                </div>
            </li>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' class="navbar-brand">HUYNDAI</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to='/' class="nav-link">Sản phẩm</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link to='/' class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Mua xe
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/' class="dropdown-item">HTV Shop</Link>
                                <Link to='/' class="dropdown-item">Thông tin khuyến mãi</Link>
                                <Link to='/' class="dropdown-item">Đăng ký lái thử</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <Link to='/' class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Dịch vụ
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/' class="dropdown-item">Dịch vụ</Link>
                                <Link to='/' class="dropdown-item">Bảo hành</Link>
                                <Link to='/' class="dropdown-item">Bảo dưỡng định kỳ & sửa chữa</Link>
                                <Link to='/' class="dropdown-item">Phụ tùng & phụ kiện</Link>
                                <Link to='/' class="dropdown-item">Chương trình dịch vụ</Link>
                                <Link to='/' class="dropdown-item">Triệu hồi</Link>
                                <Link to='/' class="dropdown-item">Bảo hiểm liên kết</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <Link to='/' class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Chăm sóc khách hàng
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/' class="dropdown-item">Hotline hỗ trợ kĩ thuật</Link>
                                <Link to='/' class="dropdown-item">Ứng dụng Huyndai Me</Link>
                                <Link to='/' class="dropdown-item">Chăm sóc khách hàng</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <Link to='/' class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Thông tin đại lý
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/' class="dropdown-item">Tìm đại lý</Link>
                                <Link to='/' class="dropdown-item">Đăng ký làm đại lý</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <Link to='/' class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Hoạt động xã hội
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/' class="dropdown-item">Hoạt động trách nhiệm xã hội</Link>
                                <Link to='/' class="dropdown-item">Quỹ mặt trời nhỏ</Link>
                                <Link to='/' class="dropdown-item">Chương trình hỗ trợ người khuyết tật</Link>
                                <Link to='/' class="dropdown-item">Chương trình hỗ trợ giáo dục</Link>
                                <Link to='/' class="dropdown-item">Chương trình hỗ trợ y tế</Link>
                                <Link to='/' class="dropdown-item">Tầm nhìn và sứ mệnh</Link>
                            </div>
                        </li>
                    </ul>
                    <li class='search'>
                        <form className="form-inline">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    size="50"
                                    placeholder="Search" />
                                <div className="input-group-btn">
                                    <button type="button" className="btn btn-danger" onClick>Search</button>
                                </div>
                            </div>
                        </form>
                        <div className="container-fluid">
                        </div>
                    </li>
                </div>
            </nav>
        </div>
    );
};


export default Header;