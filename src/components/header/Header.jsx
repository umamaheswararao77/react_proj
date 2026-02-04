import { Link } from "react-router-dom";

function Header() {

  const closeMenu = () => {
    const offcanvasEl = document.getElementById("mobileMenu");
    if (offcanvasEl) {
      const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
      bsOffcanvas?.hide();
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">

          {/* LOGO */}
          <Link className="navbar-brand" to="/">
            React_Project
          </Link>

          {/* ===== DESKTOP MENU ===== */}
          <ul className="navbar-nav flex-row gap-3 d-none d-lg-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">Counter</Link>
            </li>
          </ul>

          {/* ===== MOBILE TOGGLER ===== */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* ===== MOBILE OFFCANVAS MENU ===== */}
      <div className="offcanvas offcanvas-end" id="mobileMenu">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/form" onClick={closeMenu}>
                Form
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/counter" onClick={closeMenu}>
                Counter
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
