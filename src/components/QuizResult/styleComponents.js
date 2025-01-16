import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

export const ResultContainer = styled.div`
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const Score = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
`;

export const RestartButton = styled.button`
  background: #4CAF50;
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #45a049;
    transform: translateY(-3px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;