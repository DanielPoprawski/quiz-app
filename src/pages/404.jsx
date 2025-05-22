import { setTitle } from "../main.jsx";

export default function NotFound() {
      setTitle("404 Not Found");
      return (
            <div className="container mx-auto flex flex-col items-center justify-center h-screen">
                  <h1 className="text-5xl font-bold mx-auto py-4"> Error 404 </h1>
                  <br />
                  <h3 className="text-2xl mx-auto"> Page not found :( </h3>
            </div>
      );
}
