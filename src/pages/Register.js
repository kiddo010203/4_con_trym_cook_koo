import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Register.css'

const Register = () => {
  const params = useParams();
  const [slaveShop, setSlaveShop] = useState(null);
  const [category, setCategory] = useState(null);
  const [countries, setCountries] = useState(null);

  let navigate = useNavigate();
  useEffect(() => {
    if (params.id != 'new') {
      let slaveShop_url =
        'https://62b40fcaa36f3a973d2afcf6.mockapi.io/slaveShop/' + params.id;

      fetch(slaveShop_url)
        .then((response) => response.json())
        .then((data) => {
          var date = new Date(data.slave_date);
          data.slave_date = date.toISOString().slice(0, 10);
          setSlaveShop(data);
        });
    } else {
      let initData = {};
      setSlaveShop(initData);
    }

    let category_url =
      'https://62b40fcaa36f3a973d2afcf6.mockapi.io/categories/';

    fetch(category_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategory(data);
      });

    let countries_url =
      'https://62b40fcaa36f3a973d2afcf6.mockapi.io/countries/';

    fetch(countries_url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const saveSlave = () => {
    let method = 'POST';
    let id = '';
    if (slaveShop.id) {
      method = 'PUT';
      id = slaveShop.id;
    }

    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slaveShop),
    };
    fetch(
      'https://62b40fcaa36f3a973d2afcf6.mockapi.io/slaveShop/' + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        navigate(-1);
      });
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let data = { ...slaveShop };
    data[name] = value;
    setSlaveShop(data);
  };

  return (
    <>
      {slaveShop != null ? (
        <div className="container">
          <div className="container">
            <div className="container">
              <div className="col-lg-10 col-md-12 mx-auto col-sm-12">
                <strong>{slaveShop.id ? 'EDIT SLAVE' : 'NEW SLAVE'}</strong>
                <br />
                <div className="table-responsive">
                  <tr>
                    <th id="logo"><img src='https://xeotogiadinh.com/wp-content/uploads/2017/05/logo-hyundai-300x281.png' /></th>
                    <th>Dòng xe ôtô</th>
                    <th>Tên xe ôtô</th>
                  </tr>
                  <tr>
                    <td>
                      <select
                        name="slave_type"
                        value={slaveShop.slave_type}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        {category != null
                          ? category.map((item) => (
                            <option value={item.category}>
                              {item.category}
                            </option>
                          ))
                          : 'loading'}
                      </select>
                    </td>
                    <td>
                      <select
                        name="slave_type"
                        value={slaveShop.slave_type}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        {category != null
                          ? category.map((item) => (
                            <option value={item.category}>
                              {item.category}
                            </option>
                          ))
                          : 'loading'}
                      </select>
                    </td>
                  </tr>
                </div>
                <div className="table-responsive">
                  <table className="table table-danger table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Tên</strong>
                        </td>
                        <td>
                          <strong>Số điện thoại</strong>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={slaveShop.slave_name}
                            name="slave_name"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={slaveShop.slave_name}
                            name="slave_name"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Email</strong>
                        </td>
                        <td>
                          <strong>Địa chỉ</strong>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={slaveShop.slave_name}
                            name="slave_name"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={slaveShop.slave_name}
                            name="slave_name"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Ngày lái thử</strong>
                        </td>
                        <td>
                          <strong>Đại lý</strong>
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            value={slaveShop.slave_name}
                            name="slave_name"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={slaveShop.slave_name}
                            name="slave_name"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Ghi chú</strong>
                        </td>
                        <td>
                          <textarea
                            type="text"
                            name="description"
                            className="form-control"
                            value={product.description}
                            onChange={(e) => handleChange(e)}
                          ></textarea>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => saveSlave()}
                    >
                      Save
                    </button>
                    <span> </span>
                    <Link to="/">
                      <button type="button" class="btn btn-secondary">
                        Cancel
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'loading'
      )}
    </>
  );
};

export default Register;
