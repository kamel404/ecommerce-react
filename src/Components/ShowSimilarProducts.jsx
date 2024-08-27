import React from "react";
import { Link } from "react-router-dom";

const ShowSimilarProducts = ({ similarProducts }) => {
  return (
    <div className="py-4 my-4">
      <div className="d-flex">
        {similarProducts.map((item) => (
          <div key={item.id} className="card mx-4 text-center">
            <img
              className="card-img-top p-3"
              src={item.thumbnail}
              alt="Card"
              height={300}
              width={300}
            />
            <div className="card-body">
              <h5 className="card-title">
                {item.title.substring(0, 15)}...
              </h5>
            </div>
            <div className="card-body">
              <Link to={`/product/${item.id}`} className="btn btn-dark m-1">
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSimilarProducts;
