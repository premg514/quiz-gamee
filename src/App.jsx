import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import QuizHome from './pages/quizHome/quizHome'
import QuizGame from './pages/quizGame/QuizGame'
function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<QuizHome/>} />
      <Route path="/quiz" element={<QuizGame/>} />
    </Routes>
   </BrowserRouter>
  )

}

export default App