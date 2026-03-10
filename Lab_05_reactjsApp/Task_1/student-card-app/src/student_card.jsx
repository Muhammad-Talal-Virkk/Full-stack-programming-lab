import React from "react";

function StudentCard({ name, rollNo, department, university, color }) {

  const cardStyle = {
    backgroundColor: color || "#f2f2f2",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "250px"
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p><b>Roll No:</b> {rollNo}</p>
      <p><b>Department:</b> {department}</p>
      <p><b>University:</b> {university}</p>
    </div>
  );
}

export default StudentCard;