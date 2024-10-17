import { useState } from "react";

function FillInTheBlank(props: any) {
  const [state, update] = useState();

  function handleChange(event: any) {
    update(event.target.value);
    props.questionHandler.questionMatrix.set(
      "question" + props.questionHandler.index,
      state
    );
  }

  return (
    <>
      <h2> {props.title} </h2>
      <p>
        <label>
          <input
            type="text"
            name={"question_" + props.index}
            onChange={handleChange}
            required
          />
          <br />
        </label>
      </p>
    </>
  );
}

export default FillInTheBlank;
