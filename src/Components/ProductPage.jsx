import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Loading2 from "./Loading2";
import Loading3 from "./Loading3";
import ShowProduct from "./ShowProduct";
import ShowSimilarProducts from "./ShowSimilarProducts";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(true);
  const [loadingSimilar, setLoadingSimilar] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductData = async () => {
      setLoadingProduct(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoadingProduct(false);

      const response2 = await fetch(
        `https://dummyjson.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2.products || []);
      setLoadingSimilar(false);
    };

    fetchProductData();
  }, [id]);

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  return (
    <div className="container">
      <div className="row">{loadingProduct ? <Loading2 /> : <ShowProduct product={product} addProduct={addProduct} />}</div>
      <div className="row my-5 py-5">
        <div className="d-none d-md-block">
          <h2 className="">You may also like</h2>
          {loadingSimilar ? <Loading3 /> : <ShowSimilarProducts similarProducts={similarProducts} />}
        </div>
      </div>
    </div>
  );
};

export default Product;
