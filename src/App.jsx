import React, { Suspense } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './Components/Footer';
import routes from './routes';
// import { Provider } from 'react-redux';
// import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Provider store={store}> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
