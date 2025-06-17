import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("student");
  const [emailOrRoll, setEmailOrRoll] = useState(""); // email or roll
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setRole("student");
    setFullName("");
    setRollNumber("");
    setEmailOrRoll("");
    setPassword("");
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && role === "teacher") {
      alert("❌ Teacher signup is not allowed.");
      return;
    }

    if (role === "teacher") {
      if (emailOrRoll === "1shahdhairya@gmail.com" && password === "1234") {
        localStorage.setItem("loggedInTeacher", emailOrRoll);
        login(role);
        navigate("/teacher-dashboard");
      } else {
        alert("❌ Invalid teacher credentials.");
      }
    } else {
      // ✅ STUDENT login/signup
      if (!isLogin) {
        if (!/^[0-9]{12}$/.test(rollNumber)) {
          alert("❌ Roll number must be exactly 12 digits.");
          return;
        }

        alert(`✅ You have successfully signed up as a student.`);
        // Here, you can store user data locally or in backend
        setIsLogin(true);
      } else {
        if (!/^\S+@\S+\.\S+$/.test(emailOrRoll) && !/^[0-9]{12}$/.test(emailOrRoll)) {
          alert("❌ Enter a valid email OR a 12-digit roll number.");
          return;
        }

        alert("✅ Logged in as Student");
        login(role);
        navigate("/student-dashboard");
      }
    }
  };

  return (
    <div className="container mt-5 login-container fade-in">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-4 rounded bg-light login-card">
          <h3 className="text-center mb-4 text-primary fw-bold">
            {isLogin ? "Login" : "Signup"} - {role.charAt(0).toUpperCase() + role.slice(1)}
          </h3>

          {/* Role Selection */}
          <div className="mb-3">
            <label className="form-label">Select Role:</label>
            <select className="form-select" value={role} onChange={handleRoleChange}>
              <option value="student">Student</option>
              {isLogin && <option value="teacher">Teacher</option>}
            </select>
          </div>

          {/* Form Start */}
          <form onSubmit={handleSubmit}>
            {!isLogin && role === "student" && (
              <>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">12-Digit Roll Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter roll number"
                    maxLength={12}
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    required
                  />
                </div>
              </>
            )}

            <div className="mb-3">
              <label className="form-label">
                {isLogin ? "Email or 12-digit Roll Number" : "Email Address"}
              </label>
              <input
                type="text"
                className="form-control"
                placeholder={isLogin ? "Email or Roll Number" : "Enter your email"}
                value={emailOrRoll}
                onChange={(e) => setEmailOrRoll(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Forgot Password (login only) */}
            {isLogin && (
              <div className="mb-3 text-end">
                <button
                  type="button"
                  className="btn btn-link px-0 text-primary"
                  onClick={() => alert("🔐 Forgot password clicked (feature coming soon)")}
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {!isLogin && role === "student" && (
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm password" required />
              </div>
            )}

            <button type="submit" className="btn btn-primary w-100 fw-semibold login-button">
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>

          {/* Toggle Link */}
          <p className="text-center mt-3">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={toggleForm} className="btn btn-link px-2 switch-link">
              {isLogin ? "Signup" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
