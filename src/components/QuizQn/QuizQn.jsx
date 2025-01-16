import React from 'react'
import { QuestionContainer, Question, OptionsContainer, Option, Progress } from './styleComponents'
export default function QuizQn(props) {
    const {
        question,
        options,
        onAnswer,
        currentQuestion,
        totalQuestions,
    } = props;
    return (
        <QuestionContainer>
            <Question>{question}</Question>
            <OptionsContainer>
                {options.map((option, index) => (
                    <Option key={index} onClick={() => onAnswer(option)}>
                        {option}
                    </Option>
                ))}
            </OptionsContainer>
            <Progress>
                Question {currentQuestion} of {totalQuestions}
            </Progress>
        </QuestionContainer>
    )
}
