import { useNavigate } from "react-router-dom";

function AdminMenu() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin_token");
    window.location.reload();
  };

  return (
    <div className="mt-3">
      <select
        className="form-select mb-2"
        onChange={(e) => navigate(e.target.value)}
      >
        <option>Admin Menu</option>
        <option value="/admin">Inquiry Details</option>
      </select>

      <button className="btn btn-outline-danger btn-sm" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default AdminMenu;
