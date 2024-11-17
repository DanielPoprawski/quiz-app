import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Learn from "./pages/Learn.jsx";
import Home from "./pages/Home.jsx";
import Sidebar from "./pages/components/Sidebar.jsx";
import Settings from "./pages/Settings.jsx";
import NotFound from "./pages/404.jsx";
import Memorize from "./pages/Memorize.jsx";
import { useRef, useEffect } from "react";

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
        {
                path: "/settings",
                element: <Settings />,
        },
]);

export function setTitle(title, prevailOnUnmount = false) {
        const defaultTitle = useRef(document.title);

        useEffect(() => {
                document.title = "Quiz Time :: " + title;
        }, [title]);

        useEffect(
                () => () => {
                        if (!prevailOnUnmount) {
                                document.title = defaultTitle.current;
                        }
                },
                []
        );
}

createRoot(document.getElementById("root")).render(
        <StrictMode>
                <RouterProvider router={router} />
        </StrictMode>
);
