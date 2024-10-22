import { useState } from "react";
import { UserCount } from "./QuizContext.jsx";

export default function MultipleChoiceQuestion(props: any) {
  const [map, updateMap] = UserCount;
  const [value, setValue] = useState(0);

  //TODO: Update MCQ, FTB and TOF to use the global context hashmap to store its data

  function handleChange(event: any) {
    setValue(event.target.value);
  }

  return (
    <>
      <h2> {props.title} </h2>
      <p>
        {props.choices.map((choice: any, i: number) => (
          <label>
            <input type="radio" name={"question_" + props.index} key={i} value={i} onChange={handleChange} />
            {choice}
            <br />
          </label>
        ))}
      </p>
    </>
  );
}
