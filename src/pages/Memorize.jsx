import { Flex, Layout } from "antd";
import { useRef, useState, useEffect } from "react";
import paragraph from "../assets/directory/lorem_ipsum.json";
import { setTitle } from "../index.jsx";
import Sidebar from "./components/Sidebar.jsx";
const { Sider, Content } = Layout;

export default function Memorize() {
        const keys = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.".split("");
        setTitle("Memorize");
        const [input, setInput] = useState("");
        const focusRef = useRef(null);
        const [isFocused, setIsFocused] = useState(false);
        const [body, setBody] = useState(paragraph);

        const handleFocus = () => {
                setIsFocused(true);
        };

        const handleBlur = () => {
                setIsFocused(false);
                divElement.focus();
        };

        useEffect(() => {
                const divElement = focusRef.current;
                if (divElement) {
                        divElement.addEventListener("focus", handleFocus);
                        divElement.addEventListener("blur", handleBlur);
                        divElement.focus();
                }

                return () => {
                        if (divElement) {
                                divElement.removeEventListener("focus", handleFocus);
                                divElement.removeEventListener("blur", handleBlur);
                        }
                };
        }, [focusRef.current]);

        //TODO: Fix Splitter so that it highlights wrong letters as red
        //TOOD: Add settings so only the next couple words are visible

        return (
                <Flex>
                        <Layout>
                                <Sider width="120px">
                                        <Sidebar />
                                </Sider>
                                <Content>
                                        <h1>{isFocused ? "Start typing..." : "Wait..."}</h1>
                                        <button onClick={clearInput}> Clear </button>
                                        <br /> <br />
                                        <h2 tabIndex={0} className="typing" onKeyUp={handleEvent} ref={focusRef}>
                                                <Splitter />
                                                {body}
                                                <br />
                                        </h2>
                                </Content>
                        </Layout>
                </Flex>
        );

        function clearInput() {
                setInput("");
                setBody(paragraph);
        }

        function handleEvent(event) {
                if (keys.includes(event.key)) {
                        setInput(input + event.key);
                        setBody(body.substring(1));
                } else if (event.key == "Backspace") {
                        setInput(input.slice(0, -1));
                        setBody(paragraph.substring(input.slice(0, -1).length));
                } else {
                        console.log(event.key);
                }
        }

        function Splitter() {
                return (
                        <>
                                {input.split("").map((element, index) => {
                                        return (
                                                <span key={index} style={{ color: "black" }}>
                                                        {element}
                                                </span>
                                        );
                                })}
                        </>
                );
        }
}
