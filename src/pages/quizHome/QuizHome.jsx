import React from 'react'
import { useNavigate } from 'react-router-dom';
import puzzle from '../../assets/puzzle.webp'
import { QuizHomeContainer, QuizHomeBorder, QuizHeadContainer, ContentBox, QuizHeading, QuizPara, QuizImage, QuizButton, FeatureCardsContainer } from './styleComponents'
import { featureData } from '../../data/data';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
export default function QuizHome() {
    const navigate = useNavigate();
    return (
        <QuizHomeContainer>
            <QuizHomeBorder>
                <QuizHeadContainer>
                    <ContentBox>
                        <QuizHeading>Improve your mind</QuizHeading>
                        <QuizPara>Do you like quizes & competetions ?</QuizPara>
                    </ContentBox>
                    <QuizImage src={puzzle} />
                </QuizHeadContainer>
                <QuizButton onClick={() => navigate('/quiz')} >Start Quiz</QuizButton>
                <FeatureCardsContainer>
                    {
                        featureData.map((each, index) => {
                            return <FeatureCard key={index} text={each.text} iconColor={each.iconColor} button={each.button} />
                        })
                    }
                </FeatureCardsContainer>
            </QuizHomeBorder>
        </QuizHomeContainer>
    )
}
