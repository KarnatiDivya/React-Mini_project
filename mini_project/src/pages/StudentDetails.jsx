import React from "react";
import { useParams } from "react-router-dom";
import useFetchStudents from "../hooks/useFetchStudents";

export default function StudentDetails() {
  const { id } = useParams();
  const { students, loading } = useFetchStudents();

  if (loading)
    return <div className="center" style={{ fontSize: "18px" }}>Loading...</div>;

  const student = students.find((s) => s.id === id);

  if (!student)
    return (
      <div className="center" style={{ color: "red", fontSize: "20px" }}>
        Student Not Found
      </div>
    );

  return (
    <div className="student-details-card">
      <h2 className="details-title">{student.name}</h2>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
    </div>

      
  );
}
