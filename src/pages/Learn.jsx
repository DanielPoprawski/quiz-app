import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import { setTitle } from "../main.jsx";
import { FillInTheBlank as FITB, MultipleChoiceQuestion as MCQ, TrueOrFalse as TF } from "./components/Questions.jsx";
import { AlertCircle } from "lucide-react";

export const QuizContext = createContext(null);

export default function Learn() {
      setTitle("Learn");

      const directory = Object.values(import.meta.glob("/public/quizzes/*.json", { eager: true }));
      const files = directory.map((module) => module.default);

      const [map, setMap] = useState(new Map());
      const [error, changeError] = useState({});
      const [score, setScore] = useState();
      const [scoreColor, setColor] = useState("text-green-500");
      const [answerKey, setAnswerKey] = useState(new Map());

      const { questionSet } = useParams();
      const currentIndex = Number.parseInt(questionSet) || 0;

      // Ensure the selected quiz exists
      const selectedQuiz = files[currentIndex] || { title: "Unknown Quiz", content: [] };
      const quizTitle = selectedQuiz.title;
      const questions = selectedQuiz.content || [];

      // Build answer key when questions change
      useEffect(() => {
            const newAnswerKey = new Map();

            if (questions && questions.length > 0) {
                  questions.forEach((question, i) => {
                        newAnswerKey.set(i, question.answer);
                  });
            }

            setAnswerKey(newAnswerKey);
      }, [questions]);

      function submitQuiz() {
            const auxSet = new Set(answerKey.keys());
            Array.from(map.keys()).forEach((key) => auxSet.delete(key));

            const errorMessage = {};
            auxSet.forEach((value) => (errorMessage[value] = <AlertCircle className="text-red-500" />));

            if (auxSet.size < 1) {
                  // If all questions are answered...
                  calculateScore();
            } else {
                  changeError(errorMessage);
            }
      }

      function calculateScore() {
            let scoreValue = 0;
            answerKey.forEach((value, key) => {
                  if (value === map.get(key)) {
                        scoreValue++;
                  }
            });

            const percentage = answerKey.size > 0 ? (scoreValue / answerKey.size) * 100 : 0;

            updateScore(percentage);
      }

      function updateScore(number) {
            if (number >= 90) {
                  setColor("text-green-500");
            } else if (number >= 80) {
                  setColor("text-yellow-500");
            } else if (number >= 70) {
                  setColor("text-orange-500");
            } else {
                  setColor("text-red-500");
            }
            setScore(number.toFixed(1) + "%");
      }

      return (
            <div className="flex-1 p-8">
                  <h1 className="text-2xl font-bold mb-4">{quizTitle}</h1>

                  <QuizContext.Provider value={{ map, setMap, error, changeError }}>
                        {questions.length > 0 ? (
                              <>
                                    <QuizBody fileData={questions} />
                                    <button onClick={submitQuiz} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors">
                                          Submit Quiz
                                    </button>
                                    <h4 className={`mt-4 font-medium ${scoreColor}`}>{score}</h4>
                              </>
                        ) : (
                              <div className="text-red-500">No questions found for this quiz.</div>
                        )}
                  </QuizContext.Provider>
            </div>
      );
}

function QuizBody({ fileData }) {
      return (
            <div className="mb-8">
                  {fileData.map((question, index) => {
                        const QuestionComponent = {
                              mcq: MCQ,
                              fitb: FITB,
                              tf: TF,
                        }[question.type];

                        return (
                              <div key={`question-${index}`} className="mb-6 p-4 border border-gray-200 rounded-lg">
                                    {QuestionComponent && <QuestionComponent title={question.title} index={index} choices={question.choices} />}
                              </div>
                        );
                  })}
            </div>
      );
}
