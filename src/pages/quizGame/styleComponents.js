import styled, {keyframes} from "styled-components";
import puzzlebg from "../../assets/puzzlebg.jpg";
export const QuizGameContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-image: url(${puzzlebg});
    background-size: cover;
    color: #00008B;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const QuizContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  width: 90%;
  max-width: 600px;
  animation: ${fadeIn} 0.5s ease-out;
  margin-top: 2rem;
`;
export const Title = styled.h1`
font-size: 2.5rem;
text-align: center;
margin-bottom: 2rem;
color: #ffffff;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;