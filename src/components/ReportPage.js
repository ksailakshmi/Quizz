
import React from "react";
import { useQuiz } from "./QuizProvider";

function ReportPage() {
  const { questions, userAnswers } = useQuiz();

  return (
    <div>
      <h2>Quiz Report</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <h3>Question {index + 1}:{question?.question}</h3>
            <h5>Correct Answer: {question.correct_answer}</h5>
            <h5>Your Answer: {userAnswers[index]}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReportPage;
