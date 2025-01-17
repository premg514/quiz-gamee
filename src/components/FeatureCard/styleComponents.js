import styled from "styled-components";

export const FeatureCardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem;
border: 2px solid #000;
border-radius: 10px;
background-origin: border-box;
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  /* Responsive padding */
  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`

export const FeatureText = styled.h4`
font-family: 'Poppins', sans-serif;`

export const FeatureButton = styled.button`
width: 100px;
height: 40px;
border-radius: 10px;
`

