import { Link } from "react-router-dom";


import AdminLogin from "../../components/admin/AdminLogin";
import AdminMenu from "../../components/admin/AdminMenu";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-success text-light text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">
            Welcome to MyWebsite
          </h1>
          <p className="lead mt-3">
            Build modern web applications using React & FastAPI
          </p>

          <div className="mt-4">
            <Link to="/form" className="btn btn-primary btn-lg me-3">
              Send Inquiry
            </Link>
            <Link to="/about" className="btn btn-outline-light btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <h2 className="fw-bold">Why Choose Us?</h2>
            <p className="text-secondary">
              We focus on performance, security, and clean architecture
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow h-100 text-center p-3">
                <h4 className="fw-semibold">⚡ Fast</h4>
                <p className="text-secondary">
                  Optimized React frontend with FastAPI backend.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100 text-center p-3">
                <h4 className="fw-semibold">🔒 Secure</h4>
                <p className="text-secondary">
                  API key, authentication, and best security practices.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100 text-center p-3">
                <h4 className="fw-semibold">📈 Scalable</h4>
                <p className="text-secondary">
                  Clean architecture that grows with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Ready to Get Started?</h2>
          <p className="text-secondary mt-2">
            Fill out the inquiry form and we’ll get back to you.
          </p>

          <Link to="/form" className="btn btn-success btn-lg mt-3">
            Contact Us
          </Link>
        </div>
      </section>


    </>
  );
}

export default Home;
