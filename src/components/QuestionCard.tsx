import React from 'react';
import type { QuestionType } from '../data/questions';

type Props = {
  questionData: QuestionType;
  onAnswer: (option: string) => void;
};

const QuestionCard: React.FC<Props> = ({ questionData, onAnswer }) => {
  return (
    <div className="card shadow p-4">
      <h4>{questionData.question}</h4>
      {questionData.options.map((option, i) => (
        <button
          key={i}
          className="btn btn-outline-primary my-2"
          onClick={() => onAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
