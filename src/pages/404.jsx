import { setTitle } from "../index.jsx";

export default function NotFound() {
        setTitle("404 Not Found");
        return (
                <div className="content">
                        <h1> Error 404</h1>
                        <h3> Page not found :( </h3>
                </div>
        );
}
