import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = 'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai';
    if (searchTerm.length > 0) {
      url = url + '?search=' + searchTerm;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [searchTerm]);

  return (
    <div className="container">
      <h2>Danh sách sinh viên</h2>
      <div class="row">
        <div class="col-sm-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i class="fa fa-search"></i>
              </button>
            </div>
            {/* <Link
              to="/editinfo/new"
              class="nav-link active"
              aria-current="page"
            >
              <button type="button" class="btn btn-warning">
                Add User
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
