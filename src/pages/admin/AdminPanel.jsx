import { useEffect, useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8001/admin/inquiries", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
      },
    }).then(res => setData(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h3>Inquiry Details</h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
