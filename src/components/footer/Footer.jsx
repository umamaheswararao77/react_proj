import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-auto">
      <div className="container">
        <div className="row">

          {/* Brand / About */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">React_Project</h5>
            <p className="small text-secondary">
              We provide modern web solutions using React and FastAPI.
              Clean UI, secure APIs, and scalable systems.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link className="text-secondary text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-secondary text-decoration-none" to="/form">Form</Link></li>
              <li><Link className="text-secondary text-decoration-none" to="/about">About Us</Link></li>
              <li><Link className="text-secondary text-decoration-none" to="/contact">Contact</Link></li>
              <li><Link className="text-secondary text-decoration-none" to="/counter">Counter</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Contact</h6>
            <p className="small text-secondary mb-1">📍 India</p>
            <p className="small text-secondary mb-1">📧 info@mywebsite.com</p>
            <p className="small text-secondary">📞 +91 98765 43210</p>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Bottom */}
        <div className="text-center small text-secondary pb-3">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
