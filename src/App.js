
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizQuestions from "./components/QuizQuestions";
import StartPage from "./components/StartPage";
import ReportPage from "./components/ReportPage";
import { QuizProvider } from "./components/QuizProvider";

function App() {
  return (
    <Router>
      <QuizProvider>
        <div className="App">
          <header className="App-header">
            {/* <h1>Quiz App</h1> */}
          </header>
          <main className="App-main">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route exact path="/quiz" element={<QuizQuestions />} />
              <Route exact path="/report" element={<ReportPage />} />
            </Routes>
          </main>
        </div>
      </QuizProvider>
    </Router>
  );
}

export default App;
