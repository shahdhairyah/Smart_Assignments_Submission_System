import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Home() {
  return (
    <div className="container py-5">
      {/* Intro Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="mb-4 fw-bold text-primary">Assignment Submission System</h1>
          <p className="lead text-justify">
            The <strong>Assignment Submission System</strong> is a smart, digital solution
            built to transform traditional academic workflows into an efficient and paperless process.
            This web-based platform streamlines the interaction between students and faculty,
            enabling seamless assignment submission, real-time feedback, and automated deadline tracking.
          </p>
          <p className="text-justify">
            Designed with modern educational needs in mind, our system ensures transparency, accountability,
            and time efficiency across the submission-review cycle. Students can upload assignments with ease,
            while faculty can manage submissions, provide feedback, and evaluate performance — all from a single dashboard.
          </p>
          <p className="text-justify">
            Whether used in colleges, universities, or online learning environments, this system enhances academic productivity,
            reduces manual workload, and improves the overall learning experience.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="./img/img1.png"
            alt="Assignment Submission System"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center mb-5">
        <h2 className="fw-semibold mb-4 text-secondary">Key Features</h2>
        <div className="row">
          {[
            {
              title: "Secure Uploads",
              desc: "Students can safely upload documents in various formats with real-time validation.",
            },
            {
              title: "Teacher Feedback",
              desc: "Teachers can view, comment, grade, and send feedback instantly to each student.",
            },
            {
              title: "Role-Based Access",
              desc: "Separate dashboards for students, teachers, and administrators.",
            },
          ].map((feature, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="my-5">
        <h2 className="text-center text-secondary mb-4">How It Works</h2>
        <div className="row">
          {["Register Account And Login", "Select Your Subject", "Upload Assignment", "Review By Teacher"].map((step, index) => (
            <div key={index} className="col-md-3 text-center mb-4">
              <div className="p-4 shadow rounded h-100 bg-white">
                <h4 className="text-primary fw-bold">Step {index + 1}</h4>
                <p>{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-5">
        <h2 className="text-center text-secondary mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {[
            {
              question: "Is the platform mobile friendly?",
              answer:
                "Yes, the platform is fully responsive. You can easily access it on mobile phones, tablets, and desktops. Whether you're on the go or at your desk, the interface adjusts seamlessly to your screen size.",
            },
            {
              question: "How do teachers give grades?",
              answer:
                "Teachers can log in to their dashboard, view submitted assignments, and assign grades. They can also leave comments and suggestions for improvement, all within the platform.",
            },
            {
              question: "Can I resubmit an assignment?",
              answer:
                "Yes, you can resubmit an assignment anytime before the deadline. Simply upload the updated file and it will replace your previous submission. Make sure to do it before the cut-off time.",
            },
            {
              question: "What file types are supported for uploads?",
              answer:
                "The system supports common file formats such as PDF, DOCX, PPT, and ZIP. This allows students to submit essays, reports, presentations, or project files easily.",
            },
          ].map((faq, idx) => (
            <div className="accordion-item" key={idx}>
              <h2 className="accordion-header" id={`heading${idx}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${idx}`}
                  aria-expanded="false"
                  aria-controls={`collapse${idx}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${idx}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${idx}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center pt-4 border-top">
        <h4 className="fw-bold">Empowering Education Through Smart Digital Solutions</h4>
        <p className="text-muted">
          Get started today and revolutionize the way your institution handles assignments.
        </p>
      </div>
    </div>
  );
}

export default Home;
