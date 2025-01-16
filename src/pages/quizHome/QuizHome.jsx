import React from 'react'
import { useNavigate } from 'react-router-dom';
import puzzle from '../../assets/puzzle.webp'
import { QuizHomeContainer, QuizHomeBorder, QuizHeadContainer, ContentBox, QuizHeading, QuizPara, QuizImage, QuizButton } from './styleComponents'
import Nav from '../../components/Nav/Nav';
export default function QuizHome() {
    const navigate = useNavigate();
    return (
        <QuizHomeContainer>
            <QuizHomeBorder>
                <Nav />
                <QuizHeadContainer>
                    <ContentBox>
                        <QuizHeading>Improve your mind</QuizHeading>
                        <QuizPara>Do you like quizes & competetions ?</QuizPara>
                    </ContentBox>
                    <QuizImage src={puzzle} />
                </QuizHeadContainer>
                <QuizButton onClick={() => navigate('/quiz')} >Start Quiz</QuizButton>
            </QuizHomeBorder>
        </QuizHomeContainer>
    )
}
