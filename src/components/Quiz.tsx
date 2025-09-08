import React, { useState } from 'react';
import { questions } from '../data/questions';
import QuestionCard from './QuestionCard';

const Quiz: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selected: string) => {
    const currentQuestion = questions[currentIndex];
    if (selected === currentQuestion.answer) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setIsFinished(true);
    }
  };

  const startGame = () => {
    setStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  const restart = () => {
    setStarted(false); // Go back to start screen
  };

  return (
    <div className="container text-center mt-5">
      {!started ? (
        <div>
          <h2 className="mb-4">🎯 Ready to test your language skills?</h2>
          <button className="btn btn-primary btn-lg" onClick={startGame}>
            Start Game
          </button>
        </div>
      ) : !isFinished ? (
        <>
          <h4 className="mb-3">Question {currentIndex + 1} of {questions.length}</h4>
          <QuestionCard questionData={questions[currentIndex]} onAnswer={handleAnswer} />
        </>
      ) : (
        <div>
          <h2 className="mb-3">🎉 You scored {score} out of {questions.length}</h2>
          <button className="btn btn-success me-2" onClick={startGame}>
            Play Again
          </button>
          <button className="btn btn-secondary" onClick={restart}>
            Back to Start
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
