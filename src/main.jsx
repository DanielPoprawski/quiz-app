import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Routes, Route, Outlet } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Learn from "./pages/Learn.jsx";
import Home from "./pages/Home.jsx";
import Settings from "./pages/Settings.jsx";
import NotFound from "./pages/404.jsx";
import Memorize from "./pages/Memorize.jsx";
import { useRef, useEffect } from "react";
import Sidebar from "./pages/components/Sidebar.jsx";
import LearnHome from "./pages/LearnHome.jsx";

export function setTitle(title, prevailOnUnmount = false) {
      const defaultTitle = useRef(document.title);

      useEffect(() => {
            document.title = `Quiz Time :: ${title}`;
      }, [title]);

      useEffect(() => {
            if (!prevailOnUnmount) {
                  document.title = defaultTitle.current;
            }
      }, []);
}

// Layout component that includes the sidebar
function AppLayout() {
      return (
            <div className="flex h-screen bg-gray-50">
                  <Sidebar />

                  <div className="flex-1 overflow-auto">
                        <Outlet />
                  </div>
            </div>
      );
}

createRoot(document.getElementById("root")).render(
      <StrictMode>
            <BrowserRouter>
                  <Routes>
                        <Route element={<AppLayout />}>
                              <Route element={<Home />} path="/" />
                              <Route element={<Learn />} path="/learn/:questionSet" />
                              <Route element={<LearnHome />} path="/learn" />
                              <Route element={<Memorize />} path="/memorize" />
                              <Route element={<Memorize />} path="/memorize/:poem" />
                              <Route element={<Settings />} path="/settings" />
                              <Route element={<NotFound />} path="*" />
                        </Route>
                  </Routes>
            </BrowserRouter>
      </StrictMode>
);
