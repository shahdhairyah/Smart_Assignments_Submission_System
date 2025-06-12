import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Comp/Home';
import Login from './Comp/Login';
import Footer1 from './Comp/Footer1';
import Feedback from './Comp/Feedback';
import Nav from './Comp/Nav';
import ProtectedRoute from './Comp/ProtectedRoute';
import StudentDashboard from './Comp/StudentDashboard';
import TeacherDashboard from './Comp/TeacherDashboard';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback" element={<Feedback />} />

        {/* Protected Routes */}
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
  );
}

export default App;
