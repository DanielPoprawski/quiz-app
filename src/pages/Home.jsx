import { setTitle } from "../main.jsx";

export default function Home() {
      const directory = Object.values(import.meta.glob("/public/quizzes/*.json", { eager: true }));
      const files = directory.map((module) => module.default);
      setTitle("Home");

      return (
            <div className="flex w-full h-screen">
                  <div className="flex flex-row w-full">
                        <div className="flex-1 p-8 bg-white">
                              <h1 className="text-3xl font-bold text-gray-800">React quiz app</h1>
                              <h4 className="text-lg text-gray-600">By Daniel Poprawski</h4>

                              <div className="my-8"></div>

                              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available quizzes</h2>

                              <div className="flex flex-col w-96 border border-gray-300">
                                    <div className="flex border-b-2 border-gray-300">
                                          <div className="flex-1 text-left py-2 px-4 font-bold">Name</div>
                                          <div className="flex-1 text-left py-2 px-4 font-bold">Questions</div>
                                    </div>
                                    {files.map((item, index) => (
                                          <div key={index} className="flex border-b border-gray-200 hover:bg-gray-50">
                                                <div className="flex-1 py-3 px-4">
                                                      <a
                                                            href={`/learn/${index}`}
                                                            className="text-blue-600 hover:text-blue-800 hover:underline"
                                                      >
                                                            {item.title}
                                                      </a>
                                                </div>
                                                <div className="flex-1 py-3 px-4">{item.content.length}</div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      );
}
