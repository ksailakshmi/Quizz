import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "./QuizProvider";
import styles from "./StartPage.module.css"; 

function StartPage() {
  const { startQuiz } = useQuiz();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      startQuiz(email);
      navigate("/quiz");
    }
  };

  return (
    
    <div className={styles["start-page"]}>
      <h2>Welcome to the Quiz!</h2>
      <form onSubmit={handleSubmit}>
        <label style={{fontWeight:'bold'}}>
          Enter your email address:
          <input 
          style={{width:'95%' ,marginTop:'10px'}}
            type="email"
            value={email}
            placeholder="Enter your email here..."
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit" className={styles["start-button"]}>
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default StartPage;
