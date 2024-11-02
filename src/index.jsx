import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Learn from "./Learn.jsx";
import Home from "./Home.jsx";
import Sidebar from "./Sidebar.jsx";

createRoot(document.getElementById("root")).render(
        <StrictMode>
                <Sidebar />
                <Router>
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/learn" element={<Learn />} />
                        </Routes>
                </Router>
        </StrictMode>
);
