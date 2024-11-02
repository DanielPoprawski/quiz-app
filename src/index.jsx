import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Learn from "./Learn.jsx";
import Home from "./Home.jsx";
import Sidebar from "./Sidebar.jsx";
import NotFound from "./components/404.jsx";

const router = createBrowserRouter([
        {
                path: "/",
                element: <Home />,
                errorElement: <NotFound />,
        },
        {
                path: "/learn/:questionSet",
                element: <Learn />,
        },
]);

createRoot(document.getElementById("root")).render(
        <StrictMode>
                <Sidebar />
                <RouterProvider router={router} />
        </StrictMode>
);
