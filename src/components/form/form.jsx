import axios from "axios";

import { useState } from "react";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://127.0.0.1:8001/inquiries", formData);

    alert("Inquiry submitted!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  } catch (error) {
    console.error(error);
    alert("Error submitting inquiry");
  }
};

  return (
    <>
      {/* HEADER */}
      <section className="bg-primary text-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold">Inquiry Form</h1>
          <p className="lead mt-2">
            Fill out the form and we will contact you shortly
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow-lg p-4">
                <h4 className="mb-4 text-center fw-semibold">
                  Send Us Your Inquiry
                </h4>

                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Optional"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="d-grid justify-content-center">
                    <button type="submit" className="btn btn-success btn-lg">
                      Submit Inquiry
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* database name:userdb  pass:user123 */}
    </>
  );
}

export default FormPage;
