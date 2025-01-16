import styled, { keyframes } from 'styled-components';

export const QuizHomeContainer = styled.div`
  background: radial-gradient(circle, skyblue, white);
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const QuizHomeBorder = styled.div`
  border: 1px solid black;
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  border-bottom-left-radius: 100px;

  @media (max-width: 768px) {
    height: 85vh;
    width: 90vw;
    padding: 10px;
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

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const QuizPara = styled.p`
  font-size: 1.5rem;
  color: #3649f5;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const QuizHeading = styled.h1`
  font-size: 2rem;
  color: #3649f5;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const QuizImage = styled.img`
  height: auto;
  width: 300px;
  border-radius: 50%;

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
