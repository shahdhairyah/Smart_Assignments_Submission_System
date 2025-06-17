import React from 'react';
import { useAssignment } from './AssignmentContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentDashboard() {
  const { assignments } = useAssignment();

  console.log("Student Dashboard received:", assignments); // ✅ Debug check

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">📗 Student Dashboard</h2>

      {assignments.length > 0 ? (
        <div className="card shadow-sm p-4">
          <h5 className="mb-3">📚 Assignments to Review ({assignments.length})</h5>
          <div className="row">
            {assignments.map((item) => (
              <div key={item.id} className="col-md-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="card-title text-success">{item.subject}</h6>
                    <p className="card-text mb-1"><strong>Assignment #:</strong> {item.number}</p>
                    <p className="card-text mb-1"><strong>Due:</strong> <span className="text-danger">{item.dueDate}</span></p>
                    <p className="card-text"><small className="text-muted">Posted: {item.createdDate}</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <h4 className="text-muted">🚫 No assignments available</h4>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
