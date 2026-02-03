function About() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-primary text-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold">About Us</h1>
          <p className="lead mt-2">
            Learn more about who we are and what we do
          </p>
        </div>
      </section>

      {/* PROFILE SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <div
                className="rounded-circle bg-secondary mx-auto mb-3"
                style={{ width: "180px", height: "180px" }}
              ></div>
              <h4 className="fw-bold">Uma</h4>
              <p className="text-muted">Full Stack Developer</p>
            </div>

            <div className="col-md-8">
              <h3 className="fw-semibold">Who Am I?</h3>
              <p className="text-secondary">
                I am Uma, a passionate Full Stack Developer specializing in
                React and FastAPI. I build scalable, secure, and user-friendly
                web applications with clean architecture and modern UI design.
              </p>

              <div className="row mt-4">
                <div className="col-sm-6">
                  <p><strong>📞 Phone:</strong> 234567898765</p>
                  <p><strong>📧 Email:</strong> uma@example.com</p>
                </div>
                <div className="col-sm-6">
                  <p><strong>🌍 Location:</strong> India</p>
                  <p><strong>💼 Role:</strong> Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="bg-light py-5">
        <div className="container">
          <h3 className="fw-bold text-center mb-4">Experience</h3>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow h-100 p-3">
                <h5 className="fw-semibold">Frontend Development</h5>
                <p className="text-secondary">
                  2+ years of experience building responsive UIs using
                  React, Bootstrap, and Tailwind CSS.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100 p-3">
                <h5 className="fw-semibold">Backend Development</h5>
                <p className="text-secondary">
                  Strong experience with FastAPI, REST APIs,
                  authentication, and database integration.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100 p-3">
                <h5 className="fw-semibold">Database & Deployment</h5>
                <p className="text-secondary">
                  Worked with PostgreSQL, SQLite, Docker, and Linux servers
                  for production-ready deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES / SKILLS */}
      <section className="py-5">
        <div className="container">
          <h3 className="fw-bold text-center mb-4">Skills & Values</h3>

          <div className="row text-center g-3">
            <div className="col-md-3">
              <div className="border rounded p-3">React</div>
            </div>
            <div className="col-md-3">
              <div className="border rounded p-3">FastAPI</div>
            </div>
            <div className="col-md-3">
              <div className="border rounded p-3">PostgreSQL</div>
            </div>
            <div className="col-md-3">
              <div className="border rounded p-3">REST APIs</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
