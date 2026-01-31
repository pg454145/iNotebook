import React from "react";

export default function About() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Card with aqua background */}
          <div className="card card-aqua shadow-lg border-0 rounded">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">iNotebook</h2>
              <p className="card-text text-muted text-center">
                iNotebook is a modern notes application built with React and Express.
                It helps you organize your thoughts, tasks, and ideas securely in one place.
              </p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <h5 className="fw-bold">🚀 Key Features</h5>
                  <ul className="list-unstyled">
                    <li>✔ Secure login & authentication</li>
                    <li>✔ Add, edit & delete notes</li>
                    <li>✔ Responsive design with Bootstrap</li>
                    <li>✔ Fast backend APIs (Express + MongoDB)</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5 className="fw-bold">👩‍💻 Developer Info</h5>
                  <p className="text-muted">
                    This project is created for learning and practice purposes.
                    Future updates will bring more advanced features and improvements.
                  </p>
                </div>
              </div>

              {/* Button to trigger modal */}
              <div className="text-center mt-4">
                <button
                  type="button"
                  className="btn btn-primary px-4"
                  data-bs-toggle="modal"
                  data-bs-target="#featuresModal"
                >
                  Check Features
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Modal */}
      <div
        className="modal fade"
        id="featuresModal"
        tabIndex="-1"
        aria-labelledby="featuresModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          {/* Modal card with aqua background */}
          <div className="modal-content card-aqua">
            <div className="modal-header">
              <h5 className="modal-title" id="featuresModalLabel">iNotebook Features</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="list-unstyled">
                <li>🔐 Secure login & authentication</li>
                <li>✍️ Create, edit & delete notes instantly</li>
                <li>📱 Responsive design with Bootstrap 5</li>
                <li>⚡ Fast backend APIs (Express + MongoDB)</li>
                <li>☁ Cloud storage support for safe data</li>
                <li>🔔 Real-time alerts & error handling</li>
                <li>🎨 Clean UI with Font Awesome icons</li>
                <li>🛡️ Robust error handling & user-friendly messages</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}