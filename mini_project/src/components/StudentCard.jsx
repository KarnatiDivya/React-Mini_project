import React from "react";
import { Link } from "react-router-dom";
import "./StudentCard.css";

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p><b>Email:</b> {student.email}</p>
      <p><b>Course:</b> {student.course}</p>

      {student.phone && <p><b>Phone:</b> {student.phone}</p>}

      {student.address?.city && <p><b>City:</b> {student.address.city}</p>}

      <Link to={`/students/${student.id}`} className="btn">
        View More
      </Link>
    </div>
  );
};

export default StudentCard;
