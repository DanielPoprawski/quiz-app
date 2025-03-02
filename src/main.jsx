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

// Layout component that includes the sidebar
function AppLayout() {
      return (
            <div className="flex h-screen bg-gray-50">
                  {/* Fixed width sidebar */}
                  <div className="w-[120px] h-screen bg-gray-100 shadow-md">
                        <Sidebar />
                  </div>

                  {/* Main content area */}
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
                              <Route element={<Learn />} path="/learn" /> {/* Default Learn route */}
                              <Route element={<Memorize />} path="/memorize" />
                              <Route element={<Settings />} path="/settings" />
                        </Route>
                        <Route element={<NotFound />} path="*" />
                  </Routes>
            </BrowserRouter>
      </StrictMode>
);
