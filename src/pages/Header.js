import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import './css/Header.css';

export default function App() {
    const [hyundai, setHyundai] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const doSearch = () => {
        let url =
            'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai?name=' + searchTerm;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setSearchTerm('');
                setHyundai(data);
            });
    };


    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <Link to='/' class="navbar-brand"><img src='https://xeotogiadinh.com/wp-content/uploads/2017/05/logo-hyundai-300x281.png' width="100px" /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id='menu' class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to='products' class="nav-link">Các loại xe</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Thuê xe
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/' class="dropdown-item">HTV Shop</Link>
                                <Link to='/' class="dropdown-item">Thông tin khuyến mãi</Link>
                                <Link to='/' class="dropdown-item">Đăng ký thuê xe</Link>
                            </div>
                        </li>
                        <li class="nav-item">
                            <Link to='contact' class="nav-link">Liên hệ</Link>
                        </li>
                    </ul>
                    <li class='search'>
                        <form className="form-inline my-2 my-lg-0">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    size="50"
                                    placeholder="Tìm xe"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)} />
                                <div className="input-group-btn">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={doSearch}
                                    >
                                        Search
                                    </button>
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


