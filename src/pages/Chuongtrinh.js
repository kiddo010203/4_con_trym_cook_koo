import React from 'react';
import '../css/styles.css';

function Chuongtrinhdichvu() {
    return (
        <div>
            <div className="tieude container-fluid">
                <p>
                    <p className="textbox0">
                        <center>
                            <h1>
                                {' '}
                                <strong>Chương trình dịch vụ</strong>
                            </h1>
                            <h3>
                                Tận hưởng những chương trình khuyến mại của Hyundai Thành Công
                            </h3>
                        </center>
                    </p>
                </p>
                <br />

                <div className="container">
                    <div></div>
                    <p>
                        <h2 className="para0">
                            {' '}
                            <center>
                                <strong>Giới thiệu</strong>
                            </center>
                        </h2>{' '}
                        <br />
                        <br />
                        <br />
                        <p className="para1">
                            Với mục tiêu đáp ứng các nhu cầu đa dạng của khách hàng, nhằm đưa
                            tới cho khách hàng nhiều trải nghiệm mới và thêm nhiều tiện ích,
                            chúng tôi xin gửi tới Quý khách hàng các chương trình khuyến mại
                            dịch vụ, chương trình giao nhận xe tại địa điểm theo yêu cầu của
                            khách hàng, chương trình hỗ trợ khách hàng mùa dịch hay các chương
                            trình hỗ trợ khách hàng giảm thiệt hại từ thiên tai… Hãy liên hệ
                            với Đại lý Ủy quyền gần nhất để được phục vụ.
                            <br />
                            <br />
                        </p>
                    </p>
                </div>
                <div className="container">
                    <div className="box2 row">
                        <div
                            className="img-hover-zoom col-md-6 col-sm-4"
                            border="1px"
                            solid="#ddd"
                        >
                            <img
                                src="https://hyundai-api.thanhcong.vn/storage/uploads/post/KMDVHe.jpg"
                                alt="responsive webite"
                                className="img-fluid"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
                            <p className="text2" style={{}}>
                                <h2>
                                    <strong>
                                        Hyundai Thành Công triển khai chương trình ưu đãi dịch vụ
                                        chào hè 2022
                                    </strong>
                                </h2>
                                <br /> <br />
                                <br />
                                <br />
                                <br />
                                <button type="button" className="btn btn-secondary">
                                    Xem chi tiết
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Chuongtrinhdichvu;
