import { useRef, useState, useEffect } from "react";
import paragraph from "/public/poems/lorem_ipsum.json";
import { setTitle } from "../main.jsx";

export default function Memorize() {
      const keys = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.".split("");
      setTitle("Memorize");
      const [input, setInput] = useState("");
      const focusRef = useRef(null);
      const [isFocused, setIsFocused] = useState(false);
      const [body, setBody] = useState(paragraph);
      //TODO: remove input to only use one state

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
      //TODO: Add settings so only the next couple words are visible

      function clearInput() {
            setInput("");
            setBody(paragraph);
      }

      function handleEvent(event) {
            if (keys.includes(event.key)) {
                  setInput(input + event.key);
                  setBody(body.substring(1));
            } else if (event.key === "Backspace") {
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
                                    <span key={index} className="text-black">
                                          {element}
                                    </span>
                              );
                        })}
                  </>
            );
      }

      return (
            <div className="flex-1 p-8">
                  <h1 className="text-2xl font-bold mb-4">{isFocused ? "Start typing..." : "Wait..."}</h1>

                  <button
                        onClick={clearInput}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                        Clear
                  </button>

                  <div className="my-6"></div>

                  <h2
                        tabIndex={0}
                        className="typing text-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 p-4 bg-gray-50 rounded-lg"
                        onKeyUp={handleEvent}
                        ref={focusRef}
                  >
                        <Splitter />
                        {body}
                        <br />
                  </h2>
            </div>
      );
}
