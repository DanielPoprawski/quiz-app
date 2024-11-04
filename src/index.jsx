import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Learn from "./pages/Learn.jsx";
import Home from "./pages/Home.jsx";
import Sidebar from "./pages/Sidebar.jsx";
import NotFound from "./pages/404.jsx";
import Memorize from "./pages/Memorize.jsx";

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
        {
                path: "/memorize",
                element: <Memorize />,
        },
]);

createRoot(document.getElementById("root")).render(
        <StrictMode>
                <Sidebar />
                <RouterProvider router={router} />
        </StrictMode>
);
