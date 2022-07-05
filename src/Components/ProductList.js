import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../pages/css/Products.css';

function ProductList(props) {
  const [shop, setShop] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    console.log('product list useEffect!!');
    setShop(props.data);
    console.log('categories useEffect');
    setCategories(props.data);
  }, [props.data]);

  var products_jsx = [];
  if (shop != null) {
    products_jsx = shop.map((item) => (
      <div className="col-lg-4">
        <Link to={'/detail/' + item.id}>
          <div className='card'>
            <img className='picture' src={item.picture} alt="Card image cap" />
            <div className="card-body">
              <h5 className="name">{item.name}</h5>
            </div>
          </div>
        </Link>
      </div>
    ));
  }
  return (
    <div className="container-fuild">
      <div className="row card-deck">{products_jsx}</div>
      <div className='containerProducts'></div>
    </div>

  );
}

export default ProductList;
