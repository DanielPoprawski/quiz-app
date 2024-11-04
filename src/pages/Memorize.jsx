import { useState } from "react";
import paragraph from "../assets/directory/lorem_ipsum.json";
import { setTitle } from "../index.jsx";

export default function Memorize() {
        const [input, setInput] = useState("");
        const keys = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.".split("");
        const [body, setBody] = useState(paragraph);
        setTitle("Memorize");

        //TODO: Fix Splitter so that it highlights wrong letters as red
        //TOOD: Add settings so only the next couple words are visible

        return (
                <div className="content" onKeyDown={handleEvent}>
                        <h1>Start typing...</h1>
                        <button onClick={clearInput}> Clear </button>
                        <br /> <br />
                        <h2 tabIndex={0} className="typing">
                                <Splitter />
                                {body}
                                <br />
                        </h2>
                </div>
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
