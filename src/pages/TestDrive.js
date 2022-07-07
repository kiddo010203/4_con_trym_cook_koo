import React from 'react';
import { Link } from 'react-router-dom';

function TestDrive() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="banner"></div>

          <div className="container">
            <ul>
              <li className="list-group-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="list-group-item">
                <Link to="">Đăng kí lái thử</Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="list">
              <div className="banner-text text-center">
                <h1>Đăng kí lái thử</h1>
                <h4>
                  Bạn có thể đăng kí lái thử tại các đại lý của Hyundai Thành
                  Công trải dài trên toàn quốc. Chúng tôi đang nỗ lực hết mình
                  để bạn có những trải nghiệm lái thử một cách thuận tiện và thú
                  vị nhất.
                </h4>
              </div>
              <img
                className="banner-img"
                src="https://toigingiuvedep.vn/wp-content/uploads/2021/08/background-banner-dep.jpg"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <table className="test-table">
            <tr>
              <th>
                Dòng xe ôtô<sub>*</sub>{' '}
              </th>
              <th>
                {' '}
                Tên xe ôtô<sub>*</sub>{' '}
              </th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
export default TestDrive;
