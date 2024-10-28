import "./App.css";
import "./index.css";
import MCQ from "./components/MultipleChoiceQuestion.jsx";
import FITB from "./components/FillInTheBlank.jsx";
import TF from "./components/TrueOrFalse.jsx";
import Err from "./components/ErrorMessage.jsx";
import data from "./assets/questions.json";
import { createContext, useState, StrictMode } from "react";
import { createRoot } from "react-dom/client";

export const QuizContext = createContext(null);
const AnswerKey = new Map();
data.map((question, i) => {
        AnswerKey.set(i, question.answer);
});

export default function App() {
        const [map, setMap] = useState(new Map());
        const [error, changeError] = useState({});
        const [score, setScore] = useState();
        const [scoreColor, setColor] = useState("green");

        function submitQuiz() {
                const auxSet = new Set(AnswerKey.keys());
                map.keys().forEach((key) => auxSet.delete(key));

                const errorMessage = {};
                auxSet.forEach((value) => (errorMessage[value] = "Please answer all questions before submitting"));
                changeError(errorMessage);

                if (auxSet.size < 1) {
                        calculateScore();
                }
        }

        function calculateScore() {
                let score = 0;
                AnswerKey.forEach((value, key) => {
                        if (value === map.get(key)) {
                                score++;
                        }
                });
                score = (score / AnswerKey.size) * 100;

                updateScore(score);
        }

        function updateScore(number) {
                if (number >= 90) {
                        setColor("green");
                } else if (number >= 80) {
                        setColor("yellow");
                } else if (number >= 70) {
                        setColor("orange");
                } else {
                        setColor("red");
                }
                setScore(number + "%");
        }

        return (
                <QuizContext.Provider value={{ map, setMap, error, changeError }}>
                        {data.map((question, index) => QuestionFormatter(question, index))}
                        <button onClick={submitQuiz}> Submit Quiz</button>
                        <h4 style={{ color: scoreColor }}>{score}</h4>
                </QuizContext.Provider>
        );
}

//TODO: Integrate the .map() function directly into it, or move it to a new page all together
function QuestionFormatter(question, index) {
        return (
                <>
                        {question.type === "mcq" && (
                                <MCQ title={question.title} choices={question.choices} index={index} />
                        )}
                        {question.type === "fitb" && <FITB title={question.title} index={index} />}
                        {question.type === "tf" && <TF title={question.title} index={index} />}
                        <Err index={index} />
                        <br />
                </>
        );
}

createRoot(document.getElementById("root")).render(
        <StrictMode>
                <App />
        </StrictMode>
);
