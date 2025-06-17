import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAssignment } from './AssignmentContext'; // ✅ Make sure path is correct

function TeacherDashboard() {
  const { assignments, addAssignment, deleteAssignment, clearAssignments } = useAssignment();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ subject: '', number: '' });

  // 🗓️ Auto set due date to 7 days from now
  const getAutoDueDate = () => {
    const due = new Date();
    due.setDate(due.getDate() + 7);
    due.setHours(23, 59, 0, 0);
    return due.toLocaleString();
  };

  // 📅 Today's date
  const getCurrentDate = () => {
    return new Date().toLocaleDateString();
  };

  // 🔢 Days since creation
  const getDaysSinceCreated = (createdDate) => {
    const created = new Date(createdDate);
    const today = new Date();
    const timeDiff = today.getTime() - created.getTime();
    return Math.floor(timeDiff / (1000 * 3600 * 24));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButtonClick = () => {
    if (!showForm) {
      setShowForm(true);
    } else {
      if (formData.subject.trim() !== '' && formData.number.trim() !== '') {
        const newAssignment = {
          id: Date.now(),
          subject: formData.subject,
          number: formData.number,
          dueDate: getAutoDueDate(),
          createdDate: getCurrentDate()
        };

        addAssignment(newAssignment); // ✅ Save to shared context + localStorage
        setFormData({ subject: '', number: '' });
        setShowForm(false);
      } else {
        alert('❌ Please fill in both Subject and Assignment Number.');
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">📘 Teacher Dashboard</h2>

      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-outline-danger" onClick={clearAssignments}>
          🗑️ Clear All
        </button>
        <button className="btn btn-success" onClick={handleButtonClick}>
          {showForm ? '📤 Submit Assignment' : '➕ Add Assignment'}
        </button>
      </div>

      {showForm && (
        <div className="card p-4 mb-4 shadow-sm border-info">
          <h5 className="mb-3">📝 Enter Assignment Details</h5>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="subject" className="form-label">Subject Name</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g., Mathematics"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="number" className="form-label">Assignment Number</label>
              <input
                type="text"
                className="form-control"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="e.g., 1"
              />
            </div>
          </div>
          <div className="text-muted">
            <small>📅 Due date will be set automatically to 7 days from now at 11:59 PM.</small>
          </div>
        </div>
      )}

      {assignments.length > 0 ? (
        <div className="card shadow-sm p-4">
          <h5 className="mb-3">📋 Assignments List ({assignments.length})</h5>
          <div className="row">
            {assignments.map((item) => (
              <div key={item.id} className="col-md-6 mb-3">
                <div className="card h-100 border-left-primary">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start">
                      <h6 className="card-title text-primary">{item.subject}</h6>
                      <span className="badge bg-info text-dark">
                        {getDaysSinceCreated(item.createdDate)} days ago
                      </span>
                    </div>
                    <p className="card-text mb-1"><strong>Assignment #:</strong> {item.number}</p>
                    <p className="card-text mb-1"><strong>Due:</strong> <span className="text-danger">{item.dueDate}</span></p>
                    <p className="card-text mb-2"><small className="text-muted">Created: {item.createdDate}</small></p>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => deleteAssignment(item.id)}>
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <h4 className="text-muted">📝 No assignments added yet</h4>
        </div>
      )}
    </div>
  );
}

export default TeacherDashboard;
