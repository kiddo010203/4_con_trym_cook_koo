import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import "./css/MainAdmin.css"

export default function CarsEdit() {
  const params = useParams();
  const [cars, setCars] = useState(null);

  useEffect(() => {
    if (params.id !== "new") {
      let url =
          "https://62be5b370bc9b1256155ad45.mockapi.io/huyndai/" + params.id;

      fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setCars(data);
          });
    } else {
      let initData = {};
      setCars(initData);
    }


  }, []);

  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = {...cars};
    data[name] = value;

    // if (name === "gender") {
    //   data[name] = str2bool(value);
    //   console.log("gender");
    //   console.log(data[name]);
    // }

    console.log(data);
    setCars(data);
  };

  // var str2bool = (value) => {
  //   if (value && typeof value === "string") {
  //     if (value.toLowerCase() === "true") return true;
  //     if (value.toLowerCase() === "false") return false;
  //   }
  //   return value;
  // };



  const saveUser = () => {
    let method = "POST";
    let id = "";
    if (cars.id) {
      method = "PUT";
      id = cars.id;
    }
    const requestOptions = {
      method: method,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(cars)
    };

    fetch(
        "https://62be5b370bc9b1256155ad45.mockapi.io/huyndai/" + id,
        requestOptions
    )
        .then((response) => response.json())
        .then((data) => {
          //var date = new Date(data.dob);
          //data.dob = date.getTime();

          console.log(data);
          navigate(-1);
        });
  };


  return (
      <>
        {cars != null ? (
            <div className="container-fluid">

              <div className="panel-body inf-content">
                <div className="row">
                  <div className="col-lg-12">
                    <strong>Add new Your Information</strong>
                    <br/>
                    <div className="table-responsive">
                      <table className="table table-user-information">
                        <tbody>

                        <tr>
                          <td>
                            <strong>Name</strong>
                          </td>
                          {/* <td className="text-primary">{cars.firstName}</td> */}
                          <td>
                            <input
                                type="text"
                                className="form-control"
                                value={cars.name}
                                name="name"
                                onChange={(e) => handleChange(e)}
                            ></input>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <strong>Model</strong>
                          </td>
                          {/* <td className="text-primary">{cars.firstName}</td> */}
                          <td>
                            <input
                                type="text"
                                className="form-control"
                                value={cars.model}
                                name="model"
                                onChange={(e) => handleChange(e)}
                            ></input>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <strong>Price</strong>
                          </td>
                          {/* <td className="text-primary">{cars.firstName}</td> */}
                          <td>
                            <input
                                type="text"
                                className="form-control"
                                value={cars.price}
                                name="price"
                                onChange={(e) => handleChange(e)}
                            ></input>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <strong>Release Date</strong>
                          </td>
                          <td>
                            <input
                                type="date"
                                className="form-control"
                                value={cars.date}
                                name="date"
                                onChange={(e) => handleChange(e)}
                            ></input>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <strong>Picture</strong>
                          </td>
                          <td className="text-primary">
                            <input type="text" onChange={(e) => handleChange(e)} value={cars.picture} name="picture" className="filetype" />
                            <img className="img_edit" src={cars.picture} alt="preview image" />

                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Bio</strong>
                          </td>
                          <td>
                        <textarea
                            type="text"
                            name="bio"
                            className="form-control"
                            value={cars.bio}
                            onChange={(e) => handleChange(e)}
                        ></textarea>
                          </td>
                        </tr>

                        </tbody>
                      </table>
                      <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => saveUser()}
                        >
                          Save
                        </button>
                        <span> </span>
                        <Link to="/">
                          <button type="button" className="btn btn-secondary">
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
            "loading"
        )}
      </>
  );
}
