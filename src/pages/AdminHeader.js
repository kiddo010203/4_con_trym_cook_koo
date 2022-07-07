import { Link } from 'react-router-dom';
import React from 'react';
export default function AdminHeader() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div>
                    <Link to='/admin' className="navbar-brand">QUẢN LÝ SẢN PHẨM<br />& KHÁCH HÀNG</Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id='menu' className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/admin' className="nav-link">Quản lý xe</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/caredit/:id' className="nav-link">Thêm xe mới</Link>
                        </li> <li className="nav-item active">
                            <Link to='/admin/adminuser' className="nav-link">Quản lý khách hàng</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};


