import { useState } from "react";

function MultipleChoiceQuestion(props: any) {
  const [value, setValue] = useState("blank");

  function handleChange(event: any) {
    setValue(event.target.value);
  }

  return (
    <>
      <h2> {props.title} </h2>
      <p>
        {props.choices.map((choice: any, i: number) => (
          <label>
            <input
              type="radio"
              name={"question_" + props.index}
              key={i}
              value={i}
              onChange={handleChange}
            />
            {choice}
            <br />
          </label>
        ))}
      </p>
    </>
  );
}

export default MultipleChoiceQuestion;
