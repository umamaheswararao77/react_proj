import { useState } from "react";

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    // TEMP admin credentials
    const ADMIN_EMAIL = "admin@gmail.com";
    const ADMIN_PASSWORD = "admin123";

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // fake token (for frontend testing)
      localStorage.setItem("admin_token", "dummy_admin_token");
      onLogin();
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <form onSubmit={login} className="mt-4">
      <h4>Admin Login</h4>

      <input
        className="form-control mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-dark">Login</button>
    </form>
  );
}

export default AdminLogin;
