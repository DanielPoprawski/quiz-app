import "./App.css";
import MCQ from "./components/MultipleChoiceQuestion";
import FITB from "./components/FillInTheBlank";
import TF from "./components/TrueOrFalse";
import data from "./assets/questions.json";
import { useState } from "react";

function App() {
  let questionMatrix = new Map();

  // useState() hook for the Score
  const [score, setScore] = useState(-1);
  function changeScore(newScore: number) {
    setScore(newScore);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    let totalQuestions = data.length;

    let questionsRight = 0;

    Object.values(formJson).map((question, index) => {
      if (question == data[index].answer) {
        questionsRight++;
      }
    });

    console.log(questionMatrix);

    changeScore(questionsRight / totalQuestions);
  }

  return (
    <>
      {/* Form body */}
      <form onSubmit={handleSubmit}>
        {data.map((question, index) => QuestionFormatter(question, index))}
        <button type="submit">Submit form</button>
      </form>

      {/* Score percentage display */}
      <h4
        hidden={score == -1}
        style={score < 0.8 ? { color: "red" } : { color: "black" }}
      >
        Percentage Correct: {score * 100 + "%"}
      </h4>
    </>
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
            questionHandler={{ questionMatrix, index }}
          />
        );
        break;
      case "fitb":
        result = (
          <FITB
            title={question.title}
            index={index}
            questionHandler={{ questionMatrix, index }}
          />
        );
        break;
      case "tf":
        result = (
          <TF
            title={question.title}
            index={index}
            questionHandler={{ questionMatrix, index }}
          />
        );
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
