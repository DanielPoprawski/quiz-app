import { setTitle } from "../main.jsx";
import { useNavigate } from "react-router-dom";
import { BookOpen, Brain } from "lucide-react";

export default function Home() {
      const navigate = useNavigate();
      setTitle("Home");

      return (
            <div className="flex w-full h-screen flex-col bg-gray-100">
                  <div className="text-5xl font-bold ml-15 mt-15"> QuizMe</div>
                  <div className="text-3xl mb-5 ml-15 mt-2"> Resources: </div>
                  <div className="grid grid-cols-2 mx-auto container gap-4 w-5xl mt-[10vh]">
                        <div
                              className="shadow-gray-300 shadow-md rounded-lg cursor-pointer"
                              onMouseUpCapture={() => {
                                    navigate("/learn");
                              }}
                        >
                              <div className="p-8 bg-white rounded-t-lg">
                                    <BookOpen className="mx-auto w-24 h-24 text-gray-700" />
                              </div>
                              <div className="bg-gray-100 p-8 py-6 rounded-b-lg border-t border-t-gray-300">
                                    <div className="font-bold text-3xl text-gray-700">Learn</div>
                                    <div> Practice test from any subject with my easy to use quiz app</div>
                              </div>
                        </div>
                        <div
                              className="shadow-gray-300 shadow-md rounded-lg cursor-pointer"
                              onMouseUpCapture={() => {
                                    navigate("/memorize");
                              }}
                        >
                              <div className="p-8 bg-white rounded-t-lg">
                                    <Brain className="mx-auto w-24 h-24 text-gray-700" />
                              </div>
                              <div className="bg-gray-100 p-8 py-6 rounded-b-lg border-t border-t-gray-300">
                                    <div className="font-bold text-3xl text-gray-700">Memorize</div>
                                    <div>Memorize any piece of text with my memorization app</div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
