// Feedback.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css"; // ✅ Added external CSS link

function Feedback() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
    if (!consent) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    // Show success alert
    alert(`Thank you for your feedback!\nA confirmation has been sent to: ${email}`);

    // Reset form
    setName("");
    setEmail("");
    setFeedback("");
    setConsent(false);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="mb-4 text-center text-primary fw-bold">📢 Feedback Form</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="feedback" className="form-label fw-semibold">Your Feedback</label>
                  <textarea
                    className="form-control"
                    id="feedback"
                    rows="4"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Write your feedback here..."
                    required
                  ></textarea>
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                  />
                  <label className="form-check-label" htmlFor="consent">
                    I agree to the terms and conditions
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-100 fw-semibold">
                  Submit Feedback
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
