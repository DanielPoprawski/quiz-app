import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowRight, Brain, Settings } from "lucide-react";
import DLogoCurvy from "/public/assets/DLogoCurvy.jsx";

export default function Sidebar() {
      const [hidden, setHidden] = useState(true);

      function toggleHidden() {
            setHidden(!hidden);
      }

      return (
            <div
                  className={`flex flex-col items-center py-6 h-screen bg-gray-100 shadow-md ${
                        hidden ? "w-[60px]" : "w-[120px]"
                  }`}
            >
                  <div className="flex flex-col gap-6">
                        {/* Logo */}
                        <div className="flex justify-center mb-2">
                              <DLogoCurvy />
                        </div>

                        {/* Navigation Links */}
                        <Link to="/" className="block">
                              <button className="w-12 h-12 rounded-lg bg-white hover:bg-blue-100 flex items-center justify-center shadow-sm transition-colors">
                                    <Home size={24} className="text-gray-700" />
                              </button>
                        </Link>

                        <Link to="/learn/0" className="block">
                              <button className="w-12 h-12 rounded-lg bg-white hover:bg-blue-100 flex items-center justify-center shadow-sm transition-colors">
                                    <ArrowRight size={24} className="text-gray-700" />
                              </button>
                        </Link>

                        <Link to="/memorize" className="block">
                              <button className="w-12 h-12 rounded-lg bg-white hover:bg-blue-100 flex items-center justify-center shadow-sm transition-colors">
                                    <Brain size={24} className="text-gray-700" />
                              </button>
                        </Link>

                        <Link to="/settings" className="block">
                              <button className="w-12 h-12 rounded-lg bg-white hover:bg-blue-100 flex items-center justify-center shadow-sm transition-colors">
                                    <Settings size={24} className="text-gray-700" />
                              </button>
                        </Link>
                  </div>

                  {/* Toggle button for mobile */}
                  <div className="mt-auto">
                        <button
                              onClick={toggleHidden}
                              className="w-12 h-12 rounded-lg bg-white hover:bg-blue-100 flex items-center justify-center shadow-sm transition-colors"
                        >
                              {hidden ? (
                                    <ArrowRight size={24} className="text-gray-700" />
                              ) : (
                                    <ArrowRight size={24} className="text-gray-700 transform rotate-180" />
                              )}
                        </button>
                  </div>
            </div>
      );
}
