import React, { useState } from 'react'
import { QuizGameContainer, QuizContainer, Title } from './styleComponents';
import QuizQn from '../../components/QuizQn/QuizQn';
import QuizResult from '../../components/QuizResult/QuizResult';
import { quizData } from '../../data/data'

export default function QuizGame() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [recentResults, setRecentResults] = useState([]);

    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < quizData.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setRecentResults([...recentResults, score]);
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);

    };
    return (
        <QuizGameContainer>
            <QuizContainer>
                <Title>Quiz Game</Title>
                {showResult ? (
                    <QuizResult score={score} totalQuestions={quizData.length} onRestart={restartQuiz} recentResults={recentResults} />
                ) : (
                    <QuizQn
                        question={quizData[currentQuestion].question}
                        options={quizData[currentQuestion].options}
                        onAnswer={handleAnswer}
                        currentQuestion={currentQuestion + 1}
                        totalQuestions={quizData.length}
                    />
                )}
            </QuizContainer>

        </QuizGameContainer>
    )
}
