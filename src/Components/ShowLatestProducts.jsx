import React from "react";
import { Link } from "react-router-dom";

const ShowLatestProducts = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <div className="card h-100">
            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text"><strong>Price:</strong> ${product.price}</p>
              <Link to={`/product/${product.id}`} className="btn btn-secondary">Buy Now</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowLatestProducts;
