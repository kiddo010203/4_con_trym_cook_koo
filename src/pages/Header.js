import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <Link to='/' class="navbar-brand"><img id='logo' src='https://xeotogiadinh.com/wp-content/uploads/2017/05/logo-hyundai-300x281.png' /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id='menu' class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to='products' class="nav-link">Các loại xe</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link to='/' class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Thuê xe
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/' class="dropdown-item">HTV Shop</Link>
                                <Link to='/' class="dropdown-item">Thông tin khuyến mãi</Link>
                                <Link to='/' class="dropdown-item">Đăng ký thuê xe</Link>
                            </div>
                        </li>                       
                    </ul>
                    <li class='search'>
                        <form className="form-inline my-2 my-lg-0">
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