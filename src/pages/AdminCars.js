import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ListCars from "../components/ListCars";

export default function Admin() {
  const [cars, setCars] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    let url = "https://62be5b370bc9b1256155ad45.mockapi.io/huyndai";

    if (searchInput.length > 0) {
      url = url + "?name=" + searchInput;
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCars(data);
          console.log(data);
        });
  }, [searchInput]);

  // var list_cars = [];
  // if (cars != null) {
  //   list_cars = cars.map((item) => (
  //       <tr>
  //         <td>{item.id}</td>
  //         <td>{item.name}</td>
  //         <td>{item.model}</td>
  //         <td>${item.price}</td>
  //         <td>
  //           <img src={item.picture} style={{ width: "100px", height: "100px" }} />
  //         </td>
  //         <td>
  //           <NavLink to={"/admin/" + item.id}>Detail</NavLink>
  //
  //         </td>
  //       </tr>
  //   ));
  // }

  return (
      <div className="container-fluid">
        <h2 className="text-center">PRODUCT MANAGEMENT TABLE</h2>
        <div className="row">
          <div className="col-lg-12">
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
              ></input>
              <div className="input-group-append">
                <button
                    className="btn btn-secondary"
                    type="button"
                    // onClick={searchStudent}
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div className="text-center">
              <NavLink to="/edit/new">
                <button type="button" className="btn btn-success">
                  Add new
                </button>
              </NavLink>
            </div>

          </div>
          <table id="myTable" className="table">
            <thead className="thead-dark">
            <tr>
              <th className="col-sm-1">ID</th>
              <th className="col-sm-2">Name</th>
              <th className="col-sm-3">Model</th>
              <th className="col-sm-2">Price</th>
              <th className="col-sm-1">Image</th>
              <th className="col-sm-2">Info</th>
            </tr>
            </thead>
            <ListCars data={cars} />

          </table>
        </div>
      </div>
  );
}
