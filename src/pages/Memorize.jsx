import { useRef, useState, useEffect } from "react";
import { setTitle } from "../main.jsx";
import { Loader2 } from "lucide-react";
import { useParams } from "react-router-dom";

const fileDirectory = import.meta.glob("/public/poems/*.json");

export default function Memorize() {
      setTitle("Memorize");

      const [input, setInput] = useState("");
      const params = useParams().poem;

      const focusRef = useRef(null);
      const [isFocused, setIsFocused] = useState(false);

      const [isLoading, setLoading] = useState(true);

      const [selectedPoem, updatePoem] = useState("");
      const [body, setBody] = useState(null);

      const [loadedData, setLoadedData] = useState([]);

      useEffect(() => {
            const loadPoems = async () => {
                  const data = await loadData();
                  setLoadedData(data);
                  setLoading(false);
            };
            loadPoems();
      }, [params]);

      const handleFocus = () => {
            setIsFocused(true);
      };

      const handleBlur = () => {
            setIsFocused(false);
            divElement.focus();
      };

      async function loadData() {
            const allData = [];
            for (const path in fileDirectory) {
                  const module = await fileDirectory[path]();
                  const fileName = path.split("/").pop().replace(".json", "");
                  allData[fileName] = module.default;
            }
            return allData;
      }

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

      function clearInput() {
            setInput("");
            setBody(paragraph);
      }

      function handleEvent(event) {
            if (event.key === "Backspace" || event.key === "Escape") {
                  event.preventDefault();
            }
            if (event.key === "Backspace") {
                  setInput(input.slice(0, -1));
                  setBody(paragraph.substring(input.slice(0, -1).length));
            }
            if (event.key.length === 1) {
                  setInput(input + event.key);
                  setBody(body.substring(1));
            }
      }

      return (
            <div className="flex-1 p-8 container mx-auto">
                  {isLoading && <Loader2 className="animate-spin mx-auto justify-center h-screen w-24 text-gray-600" />}

                  {!isLoading && (
                        <>
                              {selectedPoem && selectedPoem != "" && (
                                    <>
                                          <div className="text-4xl font-bold mb-4 p-8 flex justify-between">
                                                {isFocused ? "Start typing..." : "Wait..."}
                                                <button
                                                      type="button"
                                                      onClick={clearInput}
                                                      className="cursor-pointer bg-red-500 hover:bg-red-700 text-amber-100 text-lg font-lg py-2 px-4 rounded transition-colors border-red-600 border-2"
                                                >
                                                      Clear
                                                </button>
                                          </div>
                                          <h2
                                                tabIndex={0}
                                                className="typing text-xl font-medium font-mono relative text-gray-300 focus:outline-none p-4 text-center"
                                                onKeyDown={handleEvent}
                                                ref={focusRef}
                                          >
                                                <div className="animate-blink inline">
                                                      {input.split("").map((element, index) => {
                                                            return (
                                                                  <span key={index} className="text-black">
                                                                        {element}
                                                                  </span>
                                                            );
                                                      })}
                                                </div>

                                                {body}
                                                <br />
                                          </h2>
                                    </>
                              )}
                              {!selectedPoem ||
                                    (selectedPoem == "" && (
                                          <>
                                                <div>No Poem Selected</div>
                                                <div>Select one of the available poems:</div>
                                          </>
                                    ))}
                        </>
                  )}
            </div>
      );
}
