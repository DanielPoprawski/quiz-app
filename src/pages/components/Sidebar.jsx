import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowRight, Brain, Settings } from "lucide-react";
import DLogoCurvy from "/public/assets/DLogoCurvy.jsx";

export default function Sidebar() {
      const [hidden, setHidden] = useState(true);

      return (
            <div
                  onMouseOverCapture={() => setHidden(false)}
                  onMouseLeave={() => setHidden(true)}
                  className={`flex flex-col items-center py-6 h-screen bg-gray-200 shadow-md ${hidden ? "w-[60px]" : "w-[120px]"} transition-all`}
            >
                  <div className="flex flex-col gap-6">
                        {/* Logo */}
                        <div className="flex justify-center mb-2">
                              <DLogoCurvy />
                        </div>

                        {/* Navigation Links */}
                        <Link to="/" className="block">
                              <button
                                    type="button"
                                    className={`${
                                          hidden ? "w-6 h-6" : "w-12 h-12"
                                    }  rounded-lg bg-white mx-auto hover:bg-blue-100 flex items-center justify-center shadow-sm transition-all delay-150`}
                              >
                                    <Home size={hidden ? 12 : 24} className="text-gray-700 transition-all" />
                              </button>
                        </Link>

                        <Link to="/learn/0" className="block">
                              <button
                                    type="button"
                                    className={`${
                                          hidden ? "w-6 h-6" : "w-12 h-12"
                                    }  rounded-lg bg-white mx-auto hover:bg-blue-100 flex items-center justify-center shadow-sm transition-all delay-150`}
                              >
                                    <ArrowRight size={hidden ? 12 : 24} className="text-gray-700 transition-all" />
                              </button>
                        </Link>

                        <Link to="/memorize" className="block">
                              <button
                                    type="button"
                                    className={`${
                                          hidden ? "w-6 h-6" : "w-12 h-12"
                                    }  rounded-lg bg-white mx-auto hover:bg-blue-100 flex items-center justify-center shadow-sm transition-all delay-150`}
                              >
                                    <Brain size={hidden ? 12 : 24} className="text-gray-700 transition-all" />
                              </button>
                        </Link>

                        <Link to="/settings" className="block">
                              <button
                                    type="button"
                                    className={`${
                                          hidden ? "w-6 h-6" : "w-12 h-12"
                                    }  rounded-lg bg-white mx-auto hover:bg-blue-100 flex items-center justify-center shadow-sm transition-all delay-150`}
                              >
                                    <Settings size={hidden ? 12 : 24} className="text-gray-700 transition-all" />
                              </button>
                        </Link>
                  </div>
            </div>
      );
}
