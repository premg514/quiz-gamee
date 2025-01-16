import React from 'react'
import { ResultContainer, Score, Message, RestartButton } from './styleComponents'
export default function QuizResult(props) {
    const { score, totalQuestions, onRestart } = props; 
    const percentage = (score / totalQuestions) * 100;
    let message = '';
  
    if (percentage === 100) {
      message = "Perfect score! You're a quiz master!";
    } else if (percentage >= 80) {
      message = "Great job! You really know your stuff!";
    } else if (percentage >= 60) {
      message = "Good effort! Keep learning and you'll improve!";
    } else {
      message = "Don't give up! Every attempt is a chance to learn more!";
    }
  
    return (
      <ResultContainer>
        <Score>
          Your Score: {score} / {totalQuestions}
        </Score>
        <Message>{message}</Message>
        <RestartButton onClick={onRestart}>Play Again</RestartButton>
      </ResultContainer>
    );
  
}
