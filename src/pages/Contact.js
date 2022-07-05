import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/Contact.css';

function Contact() {
    return (
        <div>
            <div class="container">
                <div class="row partner">
                    <div class="container-fluid text-center">
                        <h1 class="section-title">LIÊN HỆ</h1>
                    </div>
                    <div class="col-md-6">
                        <p class="h3 text-center">GỬI PHẢN HỒI</p>
                        <div class="input-group mt-3">
                            <input type="text" placeholder="Họ tên" class="form-control" id="fullname" name="fullname" aria-describedt="fullname_label" /><span class="input-group-text" id="fullname_label"><li class="fa fa-solid fa-user"></li></span>
                        </div>
                        <div class="input-group mt-3">
                            <input type="text" placeholder="Email" class="form-control" id="email" name="email" aria-describedt="email_label" /><span class="input-group-text" id="email_label"><li class="fa fa-solid fa-envelope"></li></span>
                        </div>
                        <div class="input-group mt-3">
                            <input type="text" placeholder="Số điện thoại" class="form-control" id="number" name="number" aria-describedt="number_label" /><span class="input-group-text" id="number_label"><li class="fa fa-solid fa-phone"></li></span>
                        </div>
                        <div class="input-group mt-3">
                            <input type="text" placeholder="Tiêu đề" class="form-control" id="text" name="text" aria-describedt="text_label" /><span class="input-group-text" id="text_label"><li class="fa fa-solid fa-file"></li></span>
                        </div>
                        <div class="input-group mt-3">
                            <textarea placeholder="Nhập nội dung" class="form-control" id="content" name="content" aria-describedby="content_label" rows="10"></textarea><span class="input-group-text" id="text_label"><i class="fa fa-solid fa-book"></i></span>
                        </div>
                        <button type="submit" class="btn btn-primary mt-3">Gửi</button>
                    </div>
                    <div class="col-md-6">
                        <p class="h3 text-center"> THÔNG TIN LIÊN HỆ</p>
                        <p>Địa chỉ: Peakview Tower, số 36 Hoàng Cầu, Chợ Dừa, Đống Đa, Hà Nội</p>
                        <p>Hotline: 0123456789</p>
                        <p>Email:hyundai@gmail.com</p>
                        <div class="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3359078521726!2d105.82147621548346!3d21.019241393477746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb4623fb1d3%3A0x10291e8bc5361d64!2sPeakview%20Tower!5e0!3m2!1sen!2s!4v1657004093586!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;