import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // ✅ Import context hook

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("student");
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ use inside the component

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const action = isLogin ? "logged in" : "signed up";
    alert(`You have successfully ${action} as a ${role}`);

    if (!isLogin) {
      setIsLogin(true); // Show login after signup
    } else {
      login(role); // 🔐 Store login session in memory
      if (role === "student") {
        navigate("/student-dashboard");
      } else if (role === "teacher") {
        navigate("/teacher-dashboard");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-4 rounded bg-light">
          <h3 className="text-center mb-4 text-primary">
            {isLogin ? "Login" : "Signup"} - {role.charAt(0).toUpperCase() + role.slice(1)}
          </h3>

          {/* Role selection */}
          <div className="mb-3">
            <label className="form-label">Select Role:</label>
            <select className="form-select" value={role} onChange={handleRoleChange}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter password" required />
            </div>

            {!isLogin && (
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm password" required />
              </div>
            )}

            <button type="submit" className="btn btn-primary w-100 fw-semibold">
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>

          <p className="text-center mt-3">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={toggleForm} className="btn btn-link px-2">
              {isLogin ? "Signup" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;