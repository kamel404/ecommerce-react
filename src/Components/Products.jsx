import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import ShowProducts from "./ShowProducts";
import Loading4 from "./Loading4"; 
import Pagination from "./Pagination"; 

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading4, setLoading4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [category, setCategory] = useState("");
  const itemsPerPage = 12;

  useEffect(() => {
    const getProducts = async () => {
      setLoading4(true);
      const url = `https://dummyjson.com/products${
        category ? `/category/${category}` : ""
      }?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`;
    
      const response = await fetch(url);
      const result = await response.json();
      setData(result.products);
      setFilter(result.products);
      setTotalPages(Math.ceil(result.total / itemsPerPage));
      setLoading4(false);
    };

    getProducts();
  }, [category, currentPage]);

  const filterProduct = (cat) => {
    setCategory(cat);
    setCurrentPage(1);
  };

  const dispatch = useDispatch();
  
  const addProduct = (product) => {
    dispatch(addCart(product))
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading4 ? (
            <Loading4 />
          ) : (
            <ShowProducts
              products={filter}
              filterProduct={filterProduct}
              addProduct={addProduct}
            />
          )}
        </div>
        {!loading4 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default Products;
