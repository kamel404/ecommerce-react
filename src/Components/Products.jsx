import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12;
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`
      );
      if (componentMounted) {
        const result = await response.json();
        setData(result.products);
        setFilter(result.products);
        setTotalPages(Math.ceil(result.total / itemsPerPage));
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, [currentPage]);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100">
                <img
                  className="card-img-top p-3"
                  src={product.thumbnail}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const Pagination = () => {
    const getPaginationItems = () => {
      const paginationItems = [];
      const totalPageButtons = 5;
      
      // Determine the starting and ending page numbers
      let startPage = Math.max(currentPage - Math.floor(totalPageButtons / 2), 1);
      let endPage = Math.min(startPage + totalPageButtons - 1, totalPages);
  
      // Adjust startPage if we're near the end
      if (endPage - startPage + 1 < totalPageButtons) {
        startPage = Math.max(endPage - totalPageButtons + 1, 1);
      }
  
      // Add the "Previous" button
      paginationItems.push(
        <li key="prev" className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
        </li>
      );
  
      // Add the first page and ellipsis if necessary
      if (startPage > 1) {
        paginationItems.push(
          <li key={1} className={`page-item ${currentPage === 1 ? "active" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(1)}>1</button>
          </li>
        );
        if (startPage > 2) {
          paginationItems.push(
            <li key="start-ellipsis" className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          );
        }
      }
  
      // Add the middle page buttons
      for (let i = startPage; i <= endPage; i++) {
        paginationItems.push(
          <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(i)}>{i}</button>
          </li>
        );
      }
  
      // Add the ellipsis and last page if necessary
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          paginationItems.push(
            <li key="end-ellipsis" className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          );
        }
        paginationItems.push(
          <li key={totalPages} className={`page-item ${currentPage === totalPages ? "active" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(totalPages)}>
              {totalPages}
            </button>
          </li>
        );
      }
  
      // Add the "Next" button
      paginationItems.push(
        <li key="next" className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </button>
        </li>
      );
  
      return paginationItems;
    };
  
    return (
      <nav>
        <ul className="pagination justify-content-center">
          {getPaginationItems()}
        </ul>
      </nav>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
        {!loading && <Pagination />}
      </div>
    </>
  );
};

export default Products;
