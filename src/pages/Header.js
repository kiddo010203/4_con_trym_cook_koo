import {  Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import '../css/Header.css';

export default function App() {
    const [hyundai, setHyundai] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <Link to='/' className="navbar-brand"><img src='https://xeotogiadinh.com/wp-content/uploads/2017/05/logo-hyundai-300x281.png' width="100px" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id='menu' className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='products' className="nav-link">Các loại xe</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Dịch vụ
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='service' className="dropdown-item">Dịch vụ</Link>
                                <Link to='baohanh' className="dropdown-item">Bảo hành</Link>
                                <Link to='baoduongsuachua' className="dropdown-item">Bảo dưỡng định kỳ & sửa chữa</Link>
                                <Link to='phutungphukien' className="dropdown-item">Phụ tùng & phụ kiện</Link>
                                <Link to='chuongtrinh' className="dropdown-item">Chương trình dịch vụ</Link>
                                <Link to='trieuhoi' className="dropdown-item">Triệu hồi</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to='contact' className="nav-link">Thông tin đại lý</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='feedback' className="nav-link">Phản hồi</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};


