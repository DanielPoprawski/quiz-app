import { createContext, useContext, useState } from "react";

//TODO: Could not find a declaration file for module "./QuizContext.jsx" <--- fix this

const QuizContext = createContext(QuizContextProvider);

export default function QuizContextProvider({ children }) {
  const [map, updateMap] = useState(new Map());

  //TODO: Create a functioning HashMap - assign each question a key and set each value to its current value

  return (
    <QuizContext.Provider
      value={{
        map,
        updateMap,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const QuizMatrix = () => {
  return useContext(QuizContext);
};
