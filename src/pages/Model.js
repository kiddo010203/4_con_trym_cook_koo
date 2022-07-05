import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductList from '../Components/ProductList';

const Model = () => {
  const [shop, setShop] = useState(null);
  const [model_namme, setModel] = useState(null);
  const params = useParams();
  useEffect(() => {
    console.log('user use effect!!');

    let url =
      'https://62b41523530b26da4cb5ec39.mockapi.io/huyndai?model=' +
      params.model;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setShop(data);
        setModel(params.model);
      });
  }, []);

  return (
    <div>
      <div className="App-jumbotron jumbotron text-center ">
        <h1>{model_namme} Products</h1>
        <p>Here We Go</p>
      </div>
      <div className="container">
        <ProductList data={shop}></ProductList>
      </div>
    </div>
  );
};

export default Model;
