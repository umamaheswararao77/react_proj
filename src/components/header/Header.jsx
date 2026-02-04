import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">React_Project</Link>

          {/* ✅ TOGGLER BUTTON */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ✅ DESKTOP MENU */}
          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/form">Form</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/counter">Counter</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ MOBILE OFFCANVAS MENU */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
      >
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
              <Link className="nav-link" to="/" data-bs-dismiss="offcanvas">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/form" data-bs-dismiss="offcanvas">
                Form
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" data-bs-dismiss="offcanvas">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" data-bs-dismiss="offcanvas">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/counter" data-bs-dismiss="offcanvas">
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
