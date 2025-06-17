import React, { createContext, useContext, useState, useEffect } from 'react';

const AssignmentContext = createContext();

export const useAssignment = () => useContext(AssignmentContext);

export const AssignmentProvider = ({ children }) => {
  const [assignments, setAssignments] = useState(() => {
    const stored = localStorage.getItem('teacherAssignments');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('teacherAssignments', JSON.stringify(assignments));
  }, [assignments]);

  const addAssignment = (assignment) => {
    setAssignments(prev => [...prev, assignment]);
  };

  const clearAssignments = () => {
    setAssignments([]);
    localStorage.removeItem('teacherAssignments');
  };

  const deleteAssignment = (id) => {
    const updated = assignments.filter((a) => a.id !== id);
    setAssignments(updated);
  };

  return (
    <AssignmentContext.Provider value={{ assignments, addAssignment, clearAssignments, deleteAssignment }}>
      {children}
    </AssignmentContext.Provider>
  );
};
