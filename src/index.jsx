import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import Hub from "./Hub.jsx";
import Sidebar from "./Sidebar.jsx";

createRoot(document.getElementById("root")).render(
        <StrictMode>
                <Sidebar />
                {/* <App /> */}
                <Hub />
        </StrictMode>
);
