import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ✅ Component Imports
import Home from './Comp/Home';
import Login from './Comp/Login';
import Footer1 from './Comp/Footer1';
import Feedback from './Comp/Feedback';
import Nav from './Comp/Nav';
import ProtectedRoute from './Comp/ProtectedRoute';
import StudentDashboard from './Comp/StudentDashboard';
import TeacherDashboard from './Comp/TeacherDashboard';

// ✅ Assignment Context Provider
import { AssignmentProvider } from './Comp/AssignmentContext';

function App() {
  return (
    <AssignmentProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feedback" element={<Feedback />} />
          
          {/* ✅ Protected Dashboards */}
          <Route
            path="/student-dashboard"
            element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher-dashboard"
            element={
              <ProtectedRoute>
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer1 />
      </BrowserRouter>
    </AssignmentProvider>
  );
}

export default App;
