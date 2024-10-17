import { useState } from "react";

function MultipleChoiceQuestion(props: any) {
  const [state, update] = useState();

  function handleChange(event: any) {
    update(event.target.value);
    console.log(props.questionHandler.questionMatrix);
    props.questionHandler.questionMatrix.set(
      "question" + props.questionHandler.index,
      state
    );
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
              value={i}
              key={i}
              onChange={handleChange}
              required
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
