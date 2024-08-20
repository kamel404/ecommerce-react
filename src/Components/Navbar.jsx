import { NavLink } from 'react-router-dom';

function NavBar() {
    const navItems = [
        { to: "/", label: "Home" },
        { to: "/products", label: "Products" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" }
    ];

    const buttonItems = [
        { to: "/login", label: "Login", icon: "fa-sign-in-alt" },
        { to: "/register", label: "Register", icon: "fa-user-plus" },
        { to: "/cart", label: "Cart", icon: "fa-cart-shopping" }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">Shopzy</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <NavLink className="nav-link" to={item.to}>{item.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="buttons text-center">
                        {buttonItems.map((item, index) => (
                            <NavLink key={index} to={item.to} className="btn btn-outline-dark m-2">
                                <i className={`fa ${item.icon} mr-1`}></i> {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
