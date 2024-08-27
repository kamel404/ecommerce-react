import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Loading from "./Loading";
import ShowLatestProducts from "./ShowLatestProducts";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products?limit=6');
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    };

    getProducts();
  }, []);

  return (
    <div className="container my-4">
      <div className="col-12">
        <h2 className="display-5 text-center">Latest Products</h2>
        <br />
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowLatestProducts products={products} />}
      </div>
      <div className="col-12 text-center mt-4">
        <Link to="/products" className="btn btn-secondary">See More</Link>
      </div>
    </div>
  );
};

export default LatestProducts;
