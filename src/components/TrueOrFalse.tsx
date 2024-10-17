function FillInTheBlank(props: any) {
  return (
    <>
      <h2> {props.title} </h2>
      <p>
        <label>
          <input
            type="radio"
            required
            name={"question_" + props.index}
            value="true"
          />
          True
          <br />
        </label>
        <label>
          <input
            type="radio"
            required
            name={"question_" + props.index}
            value="false"
          />
          False
          <br />
        </label>
      </p>
    </>
  );
}

export default FillInTheBlank;
