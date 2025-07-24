import React, { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch("./quizzes.json")
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch((err) => console.error("Failed to load quizzes:", err));
  }, []);

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">LOGO</div>
        <div className="menu-title">Teacher Portal</div>
        <div className="menu-item active">Home</div>
        <div className="menu-item">Create Quiz</div>
        <div className="menu-item">Result & Grading</div>
        <div className="menu-item">Logout</div>
      </aside>

      {/* Main content */}
      <main className="main">
        <div className="header">
          <h2>My Quizzes</h2>
          <button className="create-btn">+ Create New Quiz</button>
        </div>

        <div className="quiz-list">
          {quizzes.map((quiz, index) => (
            <div className="quiz-card" key={index}>
              <div>
                <h3>{quiz.title}</h3>
                <p>
                  {quiz.subject} | {quiz.questions} Questions
                </p>
              </div>
              <button className="view-btn">View Attempts</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
