import { Link } from 'react-router-dom';
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div style={{ "backgroundColor": "#000", "color": "white" }}>
                <div className="container">
                    <div className='row'>
                        <div className="col-md-2 col-sm-6">
                            <br></br>
                            <li className="menu-item-title">SẢN PHẨM</li>
                            <li className="menu-item"><Link to='/'>Xe du lịch </Link></li>
                            <li className="menu-item"><Link to='/'>Xe SUV </Link></li>
                            <li className="menu-item"><Link to='/'>Xe chuyên dụng, tải nhẹ </Link></li>
                            <li className="menu-item"><Link to='/'>Xe thương mại </Link></li>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <br></br>
                            <li className="menu-item-title">THUÊ XE</li>
                            <li className="menu-item"><Link to='/'>Chọn xe </Link></li>
                            <li className="menu-item"><Link to='/'>Thông tin dịch vụ </Link></li>
                            <li className="menu-item"><Link to='/'>Đăng ký lái thử </Link></li>
                            <li className="menu-item"><Link to='/'>Tìm đại lý </Link></li>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <br></br>
                            <li className="menu-item-title">DỊCH VỤ</li>
                            <li className="menu-item"><Link to='/'>Phụ tùng & Phụ kiện chính hãng </Link></li>
                            <li className="menu-item"><Link to='/'>Đăng ký làm đại lý </Link></li>
                            <li className="menu-item"><Link to='/'>Tìm đại lý </Link></li>
                            <li className="menu-item"><Link to='/'>Chăm sóc khách hàng </Link></li>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <br></br>
                            <li className="menu-item-title">GIỚI THIỆU</li>
                            <li className="menu-item"><Link to='/'>Tin công ty </Link></li>
                            <li className="menu-item"><Link to='/'>Giới thiệu Hyundai </Link></li>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <br></br>
                            <li className="menu-item-title">SOCIAL MEDIA</li>
                            <li className="menu-item"><Link to='/'>Email: cs@hyundai.thanhcong.vn </Link></li>
                            <li className="menu-item"><Link to='/'>Hotline: 1900561212 </Link></li>
                            <li className="menu-item"> <i className="fa-brands fa-facebook"></i> <i className="fab fa-youtube"></i></li>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ "backgroundColor": "#000", "color": "grey" }}>
                <div className="container">
                    <div className='row'>
                        <div className='menu-item'>
                            <br></br>
                            Công ty cổ phần liên doanh ô tô Hyundai Thành Công Việt Nam (HTV)<br />
                            Trụ sở chính: Khu công nghiệp Gián Khẩu, Xã Gia Trấn, Huyện Gia Viễn, Tỉnh Ninh Bình<br />
                            Văn phòng HN: Tầng 12, Tòa nhà Thành Công Tower, 79 Dịch Vọng Hậu, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội<br />
                            Văn phòng HCM: Tầng 14, Tòa nhà Vincom Center, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh<br />
                            © Copyright 2021. All rights Reserved<br />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;