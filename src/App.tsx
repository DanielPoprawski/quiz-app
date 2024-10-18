import "./App.css";
import MCQ from "./components/MultipleChoiceQuestion";
import FITB from "./components/FillInTheBlank";
import TF from "./components/TrueOrFalse";
import data from "./assets/questions.json";

function App() {
  return (
    <>{data.map((question, index) => QuestionFormatter(question, index))}</>
  );

  function QuestionFormatter(question: any, index: any) {
    let result;
    switch (question.type) {
      case "mcq":
        result = (
          <MCQ
            title={question.title}
            choices={question.choices}
            index={index}
          />
        );
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
}

export default App;
