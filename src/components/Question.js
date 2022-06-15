import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
    const MAX_TIME = 3;
    const [timeRemaining, setTimeRemaining] = useState(MAX_TIME);
    const { id, prompt, answers, correctIndex } = question;
    
    // add useEffect code
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            manageTime();
        }, 1000);
        return () => {
            clearTimeout(timeOutId);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps    
    });
    
    
    
    function manageTime() {
        if (timeRemaining > 1) {
            setTimeRemaining(timeRemaining => timeRemaining - 1);
        } else {
            // When the time runs out, restart the timer and mark the question unanswered
            setTimeRemaining(MAX_TIME);
            onAnswered(false);
        }
    }

    

    function handleAnswer(isCorrect) {
        setTimeRemaining(MAX_TIME);
        onAnswered(isCorrect);
    }


    return (
        <>
            <h1>Question {id}</h1>
            <h3>{prompt}</h3>
            {answers.map((answer, index) => {
                const isCorrect = index === correctIndex;
                return (
                <button key={answer} onClick={() => handleAnswer(isCorrect)}>
                    {answer}
                </button>
                );
            })}

            <h5>{timeRemaining} seconds remaining</h5>
        </>
    );
}

export default Question;
