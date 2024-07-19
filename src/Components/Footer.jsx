import React from 'react';
import '../assets/footer.css'; // Import custom CSS for additional styling

function Footer() {
    return (
        <footer className="footer bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase fw-bold">Shopzy</h5>
                        <p>
                            Your one-stop shop for all your needs. Quality products at the best prices.
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-5 mb-md-0">
                        <h5 className="text-uppercase fw-bold">Follow Us</h5>
                        <a href="#" className="btn btn-outline-dark m-1"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="btn btn-outline-dark m-1"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="btn btn-outline-dark m-1"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="btn btn-outline-dark m-1"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>

            <div className="text-center p-3 bg-dark text-white">
                © 2024 Shopzy. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
