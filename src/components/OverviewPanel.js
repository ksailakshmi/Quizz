
import React from "react";
import "./OverView.css";
import { useQuiz } from "./QuizProvider";

function OverviewPanel() {
  const { questions, userAnswers, setCurrentQuestionIndex } = useQuiz(); 
  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index); 

  };
  return (
    <div className="OverviewPanel">
      <h2>Questions Overview</h2>
      <ul>
        {questions.map((question, index) => (
          <li
            key={index}
            className={`QuestionItem ${
              userAnswers[index] === null ? "notvisited" : ""
            } ${
              userAnswers[index] !== null ? "visited" : ""
            } ${userAnswers[index] !== null ? "attempted" : ""}`}
            onClick={() => handleQuestionClick(index)} 
          >
           <span className="question-number">Question {index + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OverviewPanel;
