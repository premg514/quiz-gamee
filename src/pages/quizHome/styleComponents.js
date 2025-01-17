import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const QuizHomeContainer = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 10px;
    height: auto;
    min-height: 100vh;
  }
`;

export const QuizHomeBorder = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 85vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.5);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    height: auto;
    width: 90vw;
    padding: 10px;
    border-bottom-left-radius: 20px;
  }
`;

export const QuizHeadContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  animation: ${floatAnimation} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const QuizPara = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const QuizHeading = styled.h1`
  font-size: 5rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const QuizImage = styled.img`
  height: auto;
  width: 300px;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  animation: ${floatAnimation} 3s ease-in-out infinite;

  &:hover {
    transform: scale(1.05) rotate(5deg);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

export const QuizButton = styled.button`

  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ffffff;
  background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
  background-size: 300% 300%;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-position: 100% 0;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    animation: ${pulse} 1.5s infinite;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
    margin-top: 20px;
  }
`;

export const FeatureCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
  color: #ffffff;
  margin-top: 40px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 200px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #ffffff;
  }

  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

