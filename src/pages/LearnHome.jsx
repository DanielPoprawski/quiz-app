export default function LearnHome() {
      const directory = Object.values(import.meta.glob("/public/quizzes/*.json", { eager: true }));
      const files = directory.map((module) => module.default);

      return (
            <div className="flex w-full h-screen flex-col bg-gray-100">
                  <div className="text-5xl font-bold ml-15 my-15">Quizzes</div>
                  <div className="flex flex-col w-96 border border-gray-300 ml-15">
                        <div className="flex border-b-2 border-gray-300">
                              <div className="flex-1 text-left py-2 px-4 font-bold">Name</div>
                              <div className="flex-1 text-left py-2 px-4 font-bold">Questions</div>
                        </div>
                        {files.map((item, index) => (
                              <div key={index} className="flex border-b border-gray-200 hover:bg-gray-50">
                                    <div className="flex-1 py-3 px-4">
                                          <a href={`/learn/${index}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                                                {item.title}
                                          </a>
                                    </div>
                                    <div className="flex-1 py-3 px-4">{item.content.length}</div>
                              </div>
                        ))}
                  </div>
            </div>
      );
}
