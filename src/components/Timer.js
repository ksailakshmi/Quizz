import React, { useState, useEffect } from "react";
import { useQuiz } from "./QuizProvider";
import { useNavigate } from "react-router-dom";

function Timer() {
  const { questions, userAnswers, startQuiz, submitQuiz } = useQuiz(); 
  const [time, setTime] = useState(30 * 60); 
  const navigate = useNavigate(); 
  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
        submitQuiz(userAnswers);
        navigate("/report"); 
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time, userAnswers]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <h2>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
    </div>
  );
}

export default Timer;
