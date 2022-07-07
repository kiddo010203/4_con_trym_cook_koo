import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Feedback.css';

function Feedback() {
    return (
        <div>
            <div className="container">
                <div className="box1 row partner">
                    <div className="container-fluid text-center">
                        <h1 className="section-title">PHẢN HỒI</h1>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group mt-3">
                            <input type="text" placeholder="Họ tên" className="form-control" id="fullname" name="fullname" aria-describedt="fullname_label" /><span className="input-group-text" id="fullname_label"><li className="fa fa-solid fa-user"></li></span>
                        </div>
                        <div className="input-group mt-3">
                            <input type="text" placeholder="Email" className="form-control" id="email" name="email" aria-describedt="email_label" /><span className="input-group-text" id="email_label"><li className="fa fa-solid fa-envelope"></li></span>
                        </div>
                        <div className="input-group mt-3">
                            <input type="text" placeholder="Số điện thoại" className="form-control" id="number" name="number" aria-describedt="number_label" /><span className="input-group-text" id="number_label"><li className="fa fa-solid fa-phone"></li></span>
                        </div>
                        <div className="input-group mt-3">
                            <input type="text" placeholder="Tiêu đề" className="form-control" id="text" name="text" aria-describedt="text_label" /><span className="input-group-text" id="text_label"><li className="fa fa-solid fa-file"></li></span>
                        </div>
                        <div className="input-group mt-3">
                            <textarea placeholder="Nhập nội dung" className="form-control" id="content" name="content" aria-describedby="content_label" rows="10"></textarea><span className="input-group-text" id="text_label"><i className="fa fa-solid fa-book"></i></span>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Gửi</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;