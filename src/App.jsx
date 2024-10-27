import "./App.css";
import "./index.css";
import MCQ from "./components/MultipleChoiceQuestion.jsx";
import FITB from "./components/FillInTheBlank.jsx";
import TF from "./components/TrueOrFalse.jsx";
import Err from "./components/ErrorMessage.jsx";
import data from "./assets/questions.json";
import { createContext, useState, StrictMode } from "react";
import { createRoot } from 'react-dom/client';

export const QuizContext = createContext(null);
const Answerkey = new Map();
data.map((question, i) => {
  Answerkey.set(i, question.answer);
})


export default function App() {
  const [map, setMap] = useState(new Map());
  const [error, changeError] = useState(new Map());


  //TODO: Fix this submit quiz function
  function submitQuiz() {
    console.log("Submitted Answers", map.size);
    console.log("Correct Answers: ", Answerkey.size);
    if (map.size < Answerkey.size) {
      console.log("All questions must be answered before continuing");
    }
  }

  return (
      <QuizContext.Provider value={{map, setMap, error, changeError}}>
        {data.map((question, index) => QuestionFormatter(question, index))}
        <button onClick={submitQuiz}> Submit Quiz</button>
      </QuizContext.Provider>
  );
}



//TODO: Clean up this question formatter, and also integrate the .map() function directly into it, or move it to a new page all together
function QuestionFormatter(question, index) {
  return (
    <>
      {question.type === 'mcq' && (
        <MCQ title={question.title} choices={question.choices} index={index} />
      )}
      {question.type === 'fitb' && <FITB title={question.title} index={index} />}
      {question.type === 'tf' && <TF title={question.title} index={index} />}
      <Err index={index}/>
      <br />
    </>
  );
}


createRoot(document.getElementById('root')).render(<StrictMode>
  <App />
</StrictMode>);