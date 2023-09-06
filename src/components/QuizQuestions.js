import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { QuizContext } from "./QuizProvider";
import OverviewPanel from "./OverviewPanel";
import Timer from "./Timer";
import "./OverView.css"; 


function QuizQuestions() {
  const { questions, userAnswers,setUserAnswers, questionClick, submitQuiz,currentQuestionIndex,setCurrentQuestionIndex } = useContext(
    QuizContext
  );
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isTimerActive, setIsTimerActive] = useState(true);
console.log()
  useEffect(() => {
    let timer;
    if (isTimerActive) {
      timer = setInterval(() => {
       
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isTimerActive]);

  
  const handleNextQuestion = () => {
    if (selectedAnswer !== "") {
      const updatedUserAnswers = [...userAnswers];
      updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
      setUserAnswers(updatedUserAnswers);

      questionClick(currentQuestionIndex);
      setSelectedAnswer("");
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        submitQuiz(updatedUserAnswers); 
        navigate("/report");
      }
    } else {
      alert("Please select an answer before moving to the next question.");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <Timer isTimerActive={isTimerActive} />
      <div className="quiz-container">
        <div className="quiz-header">
          <OverviewPanel
            questions={questions}
            userAnswers={userAnswers}
            setCurrentQuestionIndex={setCurrentQuestionIndex} 
          />
        </div>
        <div className="quiz-main">
          <h1>Question {currentQuestionIndex + 1}</h1>
          <h2>{currentQuestion?.question}</h2>
          <ul className="list-unstyled">
  {currentQuestion?.answers?.map((answer, index) => (
    <li className="list-item" key={index}>
      <label>
        <input
          type="radio"
          value={answer}
          checked={selectedAnswer === answer}
          onChange={() => setSelectedAnswer(answer)}
        />
        <span className="radio-label">{answer}</span>
      </label>
    </li>
  ))}
</ul>
          <button className="button-style"onClick={handleNextQuestion}>Next Question</button>
        </div>
      </div>
    </>
  );
}

export default QuizQuestions;
