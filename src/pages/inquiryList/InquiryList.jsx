import { useEffect, useState } from "react";
import axios from "axios";

function InquiryList() {
  const [inquiries, setInquiries] = useState([]);
  const [editingInquiry, setEditingInquiry] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const fetchInquiries = () => {
    axios.get("http://127.0.0.1:8001/inquiries").then((res) => {
      setInquiries(res.data);
    });
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  // DELETE
  const deleteInquiry = async (id) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;

    await axios.delete(`http://127.0.0.1:8001/inquiries/${id}`);
    fetchInquiries();
  };

  // EDIT BUTTON CLICK
  const editInquiry = (inq) => {
    setEditingInquiry(inq.id);
    setFormData({
      name: inq.name,
      email: inq.email,
      phone: inq.phone,
      message: inq.message
    });
  };

  // UPDATE SUBMIT
  const updateInquiry = async (e) => {
    e.preventDefault();

    await axios.put(
      `http://127.0.0.1:8001/inquiries/${editingInquiry}`,
      formData
    );

    setEditingInquiry(null);
    fetchInquiries();
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Inquiry Management</h2>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th width="180">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inq) => (
            <tr key={inq.id}>
              <td>{inq.name}</td>
              <td>{inq.email}</td>
              <td>{inq.phone || "-"}</td>
              <td>{inq.message}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editInquiry(inq)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteInquiry(inq.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EDIT FORM */}
      {editingInquiry && (
        <div className="card mt-4 p-4">
          <h4>Edit Inquiry</h4>
          <form onSubmit={updateInquiry}>
            <input
              className="form-control mb-2"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              className="form-control mb-2"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <input
              className="form-control mb-2"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <textarea
              className="form-control mb-3"
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />

            <button className="btn btn-success me-2">Update</button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEditingInquiry(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default InquiryList;
