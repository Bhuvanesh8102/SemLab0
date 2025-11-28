import React, { useState, useEffect } from "react";

export default function BirthdayReminder() {
  const [students, setStudents] = useState([
    { name: "Aanya", dob: "2005-11-28" },
    { name: "Rohit", dob: "2006-12-02" }
  ]);

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  // Check birthdays on page load
  useEffect(() => {
    checkBirthday();
  }, []);

  function checkBirthday() {
    const today = new Date();
    const todayStr = today.toISOString().slice(5, 10); // mm-dd

    students.forEach((s) => {
      const bd = s.dob.slice(5, 10); // mm-dd

      if (bd === todayStr) {
        alert(`🎉 Today is ${s.name}'s Birthday!`);
      }
    });
  }

  function addStudent(e) {
    e.preventDefault();
    if (!name || !dob) return alert("Enter both fields");

    setStudents([...students, { name, dob }]);
    setName("");
    setDob("");
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Birthday Reminder</h2>

      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: "block", marginBottom: "10px" }}
        />

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={{ display: "block", marginBottom: "10px" }}
        />

        <button>Add Student</button>
      </form>

      <h3 style={{ marginTop: "20px" }}>Student List</h3>
      <ul>
        {students.map((s, i) => (
          <li key={i}>
            {s.name} — {s.dob}
          </li>
        ))}
      </ul>
    </div>
  );
}
