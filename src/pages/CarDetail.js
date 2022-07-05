import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';


const CarsDetail = () => {
  const params = useParams();
  const [cars, setCars] = useState(null);
  useEffect(() => {
    console.log('user use effect!!');

    let url =
        'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai/' + params.id;

    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          data.date = new Date(data.date);
          console.log('date', data.date);
          setCars(data); //setStudents(data)
        });
  }, []);

  const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return day + '-' + month + '-' + year;
  };

  return (
      <>
        {cars != null ? (
            <div className="container bootstrap snippets bootdey">
              <div className="panel-body inf-content">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <table className="table table-user-information">
                        <tbody>
                        <tr>
                          <td>
                            <strong>Identificacion</strong>
                          </td>
                          <td className="text-primary">{cars.id}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong>Name</strong>
                          </td>
                          <td className="text-primary">{cars.name}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong>Model</strong>
                          </td>
                          <td className="text-primary">{cars.model}</td>
                        </tr>



                        <tr>
                          <td>
                            <strong>Price</strong>
                          </td>
                          <td className="text-primary">${cars.price}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong>Release Date</strong>
                          </td>
                          <td className="text-primary">{formatDate(cars.date)}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong>Picture</strong>
                          </td>
                          <td className="text-primary">
                            <img src={cars.picture} className="img-circle" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Bio</strong>
                          </td>
                          <td className="text-primary">{cars.bio}</td>
                        </tr>


                        </tbody>
                      </table>
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

export default CarsDetail;
