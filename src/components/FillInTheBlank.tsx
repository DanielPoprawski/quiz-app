import { useState } from "react";

export default function FillInTheBlank(props: any) {
  const [state, update] = useState();

  function handleChange(event: any) {
    update(event.target.value);
  }

  return (
    <>
      <h2> {props.title} </h2>
      <p>
        <label>
          <input type="text" name={"question_" + props.index} onChange={handleChange} required />
          <br />
        </label>
      </p>
    </>
  );
}
