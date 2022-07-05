import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
      <div className="container">
        <div className='frame'>
        <div class="card" >
          <img className="picture" src={item.picture} />
          <Link to='/'>
            <p className='name'>{item.name}</p>
            </Link>
        </div>
      </div>
      </div>
    ));
  }
  return (
    
      <div>{products_jsx}</div>
   
  );
}

export default ProductList;
