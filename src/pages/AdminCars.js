import React, { useEffect, useState } from "react";
import ListCars from "../Components/ListCars";
import 'bootstrap/dist/css/bootstrap.min.css';


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



    return (
        <div className="container-fluid">
            <h2 className="text-center">QUẢN LÝ THÔNG TIN XE</h2>
            <div className="row">
                <div className="col-lg-12">

                    <div className="input-group">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tìm xe"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        ></input>
                    </div>

                    <div className="text-left">

                    </div>
                </div>
                <table id="myTable" className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th className="col-lg-1">Mã</th>
                            <th className="col-lg-2">Tên xe</th>
                            <th className="col-lg-3">Loại xe</th>
                            <th className="col-lg-2">Giá xe</th>
                            <th className="col-lg-1">Ảnh xe</th>
                            <th className="col-lg-2">Tùy chọn</th>
                        </tr>
                    </thead>
                    <ListCars data={cars} />

                </table>
            </div>

        </div>
    );
}