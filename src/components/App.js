import React, { useState } from "react";
import Question from "./Question";
import questions from "../data/quiz";
 
function App() {
    // const [questions, setQuestions] = useState(quiz);
    const NUMBER_OF_QUESTIONS = questions.length;
    const [currentQuestionId, setCurrentQuestion] = useState(1);
    const [score, setScore] = useState(0);
    const currentQuestion = questions.find((q) => q.id === currentQuestionId);
    

    function handleQuestionAnswered(correct) {
        if (currentQuestionId < NUMBER_OF_QUESTIONS) {
            setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
        } else {
            setCurrentQuestion(null);
        }
        if (correct) {
            setScore((score) => score + 1);
        }
    }


    function handlePlayAgain() {
        setCurrentQuestion(1);
        setScore(0);
    }
    
    return (
        <main>
        <section>
            {currentQuestion ? (
                <Question
                    question={currentQuestion}
                    onAnswered={handleQuestionAnswered}
                />
            ) 
            : 
            (
                <>
                    <h1>Game Over</h1>
                    <h2>Total Correct: {score}</h2>
                    <button onClick={handlePlayAgain}>Play again</button>
                </>
            )}
        </section>
        </main>
    );
}

export default App;
