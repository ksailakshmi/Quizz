import React, { createContext, useContext, useState, useEffect } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState(Array(15).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=15")
      .then((response) => response.json())
      .then((data) => {
        const formattedQuestions = data.results.map((result) => ({
          question: result.question,
          answers: [...result.incorrect_answers, result.correct_answer],
          correct_answer: result.correct_answer,
        }));
        setQuestions(formattedQuestions);
      })
      .catch((error) => console.error(error));
  }, []);

  const startQuiz = (email) => {
  };

  const questionClick = (index) => {
  };

  const submitQuiz = (answers) => {
  };

  const contextValue = {
    questions,
    userAnswers,
    startQuiz,
    questionClick,
    submitQuiz,
    setUserAnswers,
    currentQuestionIndex, 
    setCurrentQuestionIndex,
  };

  return (
    <QuizContext.Provider value={contextValue}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
