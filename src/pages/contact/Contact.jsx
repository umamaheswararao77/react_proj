import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Message:", formData);
    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      {/* HEADER */}
      <section className="bg-primary text-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="lead  mt-2">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="card shadow h-100 p-4">
                <h4>📍 Address</h4>
                <p className="text-secondary mt-2">
                  India
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100 p-4">
                <h4>📞 Phone</h4>
                <p className="text-secondary mt-2">
                  +91 23456 78987
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100 p-4">
                <h4>📧 Email</h4>
                <p className="text-secondary mt-2">
                  contact@mywebsite.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow-lg p-4">
                <h4 className="text-center fw-semibold mb-4">
                  Send Us a Message
                </h4>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="py-5">
        <div className="container text-center">
          <h4 className="fw-semibold mb-3">Our Location</h4>
          <div
            className="bg-secondary rounded"
            style={{ height: "300px" }}
          >
            <p className="text-light pt-5">
              Map Integration Coming Soon
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
