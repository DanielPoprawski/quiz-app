import { Flex, Layout, Modal } from "antd";
import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import MQF from "../assets/directory/MQF.json";
import SkillLevel1 from "../assets/directory/SkillLevel1.json";
import "../index.css";
import { setTitle } from "../index.jsx";
import FITB from "./components/FillInTheBlank.jsx";
import MCQ from "./components/MultipleChoiceQuestion.jsx";
import Sidebar from "./components/Sidebar.jsx";
import TF from "./components/TrueOrFalse.jsx";
import { ErrorIcon } from "../assets/icons/CustomIcons.jsx";

export const QuizContext = createContext(null);
const AnswerKey = new Map();
const { Sider, Content } = Layout;

export default function Learn() {
        const [map, setMap] = useState(new Map());

        const [error, changeError] = useState({});

        const [score, setScore] = useState();
        const [scoreColor, setColor] = useState("green");

        const [currentIndex, changeIndex] = useState(useParams().questionSet);
        const questionSets = [MQF, SkillLevel1];

        setTitle("Learn");

        questionSets[currentIndex].map((question, i) => {
                AnswerKey.set(i, question.answer);
        });

        function submitQuiz() {
                const auxSet = new Set(AnswerKey.keys());
                map.keys().forEach((key) => auxSet.delete(key));

                const errorMessage = {};
                auxSet.forEach((value) => (errorMessage[value] = <ErrorIcon />));
                //TODO: Add an alert that allows the user to manually submit even if not all questions have been answered
                if (auxSet.size < 1) {
                        //If all questions are answered...
                        calculateScore();
                } else {
                        changeError(errorMessage);
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
                <Flex>
                        <Layout>
                                <Sider width="120px">
                                        <Sidebar />
                                </Sider>
                                <Content>
                                        <QuizContext.Provider value={{ map, setMap, error, changeError }}>
                                                <QuizBody fileData={questionSets[currentIndex]} />
                                                <button onClick={submitQuiz}> Submit Quiz</button>
                                                <h4 style={{ color: scoreColor }}>{score}</h4>
                                        </QuizContext.Provider>
                                </Content>
                        </Layout>
                </Flex>
        );
}

function QuizBody({ fileData }) {
        return (
                <>
                        {fileData.map((question, index) => {
                                const QuestionComponent = {
                                        mcq: MCQ,
                                        fitb: FITB,
                                        tf: TF,
                                }[question.type];

                                return (
                                        <key prop={`question-${index}`}>
                                                {QuestionComponent && (
                                                        <QuestionComponent
                                                                title={question.title}
                                                                index={index}
                                                                choices={question.choices}
                                                        />
                                                )}
                                                <br />
                                        </key>
                                );
                        })}
                </>
        );
}
