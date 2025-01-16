import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const RecentResultsContainer = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  margin-top: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  animation: ${fadeIn} 0.5s ease-out;
`;

export const ResultsTitle = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ResultItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ResultText = styled.p`
  font-size: 1rem;
  color: #ffffff;
  margin: 0;
`;

export const NoResultsText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
`;