import "./App.css";
import MCQ from "./components/MultipleChoiceQuestion";
import FITB from "./components/FillInTheBlank";
import TF from "./components/TrueOrFalse";
import QuizContextProvider from "./components/QuizContext.jsx";
import data from "./assets/questions.json";

function QuestionFormatter(question: any, index: any) {
  let result;
  switch (question.type) {
    case "mcq":
      result = <MCQ title={question.title} choices={question.choices} index={index} />;
      break;
    case "fitb":
      result = <FITB title={question.title} index={index} />;
      break;
    case "tf":
      result = <TF title={question.title} index={index} />;
      break;
    default:
      return;
  }

  return (
    <>
      {result} <br />
    </>
  );
}

//TODO: Fix this button, it needs to work

function App() {
  return (
    <QuizContextProvider>
      {data.map((question, index) => QuestionFormatter(question, index))}
      <button> Submit Quiz</button>
    </QuizContextProvider>
  );
}

export default App;
