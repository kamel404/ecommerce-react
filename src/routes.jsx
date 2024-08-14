import React from 'react';

const Home = React.lazy(() => import('./Components/Home'));
const Products = React.lazy(() => import('./Components/Products'));
const Product = React.lazy(() => import('./Components/ProductPage'));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:id", element: <Product /> },
];

export default routes;
