import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';

const Home = React.lazy(() => import('./Components/Home'));
const Products = React.lazy(() => import('./Components/Products'));
const Product = React.lazy(() => import('./Components/ProductPage'));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:id", element: <Product /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

];

export default routes;
