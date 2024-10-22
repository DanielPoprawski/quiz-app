import { createContext, useContext, useState } from "react";

const QuizContext = createContext(QuizContextProvider);

export default function QuizContextProvider({ children }) {
  const [map, updateMap] = useState(new Map());

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
