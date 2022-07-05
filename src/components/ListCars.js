import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export default function ListCars(props) {
  // set data car from props
  const [cars, setCars] = useState(null);


  useEffect(() => {
    console.log('ListCars', cars);

    setCars(props.cars);  // set car data from props
  }, [props.cars]);


  console.log("list cars");

  var list_cars = [];
  if (cars != null) {
    list_cars = cars.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>${item.price}</td>
          <td>{item.origin}</td>
          <td>{item.model}</td>
          <td>{item.bio}</td>

          {/* <td>
                    <Link to={'/cars/' + item.id}>Details</Link>
                </td> */}

        </tr>

    ));
  }


  return (
      <div className='container'>
        <div className="row">
          <div className="col-lg-12">

          </div>

        </div>
        <table className="table">
          <thead className='thead-dark'><tr><th className="col-sm-1">ID</th><th className="col-sm-2">Name</th><th className="col-sm-3">Price</th><th className="col-sm-2">Origin</th><th className="col-sm-1">Model</th><th className="col-sm-2">Bio</th></tr></thead>

          <tbody>{list_cars}</tbody>
        </table>
      </div>
  );
}