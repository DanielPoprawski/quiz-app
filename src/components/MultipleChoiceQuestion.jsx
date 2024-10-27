import { useContext, useState } from "react";
import { QuizContext } from "../App";

export default function MultipleChoiceQuestion(props) {
  const {map, setMap} = useContext(QuizContext);
  const [value, setValue] = useState();
  
  return (
    <>
      <h2> {props.title} </h2>
      <p>
        {props.choices.map((choice, i) => (
          <label>
            <input type="radio" name={"question_" + props.index} key={i} value={i} onChange={handleChange} />
            {choice}
            <br />
          </label>
        ))}
      </p>
    </>
  );

  function handleChange(event) {
    setValue(parseInt(event.target.value));
    //I was stuck on this for problem for three days, for some reason the function was
    //always relaying the previous value instead of the updated one to the map and not
    //the latest one, then I told my friend about this problem and for some reason it
    //hit me to just split this into two seperate functions and it worked. Credit goes to Leonard Belz
    updateMap(event);
  }

  function updateMap(event){
    setMap(map.set(props.index, parseInt(event.target.value)));
  }
}


