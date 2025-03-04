import { useContext, useState } from "react";
import { QuizContext } from "../Learn";

export const MultipleChoiceQuestion = (props) => {
      const { map, setMap } = useContext(QuizContext);
      const [value, setValue] = useState();

      const { error, changeError } = useContext(QuizContext);
      const index = props.index;

      return (
            <>
                  <h2>
                        <span style={{ color: "red" }} index={index}>
                              {error[index]}
                        </span>
                        {props.title}
                  </h2>
                  <p>
                        {props.choices.map((choice, i) => (
                              <label key={i}>
                                    <input
                                          type="radio"
                                          name={"question_" + props.index}
                                          value={i}
                                          onChange={handleChange}
                                          className="mr-2"
                                    />
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

      function updateMap(event) {
            setMap(map.set(props.index, parseInt(event.target.value)));
      }
};

export const FillInTheBlank = (props) => {
      const { map, setMap } = useContext(QuizContext);
      const [value, setValue] = useState();

      const { error, changeError } = useContext(QuizContext);
      const index = props.index;

      function handleChange(event) {
            setValue(event.target.value);
            updateMap(event);
      }

      function updateMap(e) {
            setMap(map.set(props.index, e.target.value));
      }

      return (
            <>
                  <h2>
                        <span style={{ color: "red" }} index={index}>
                              {error[index]}
                        </span>
                        {props.title}
                  </h2>
                  <p>
                        <label>
                              <input
                                    type="text"
                                    className="border border-gray-300 rounded-md p-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    name={"question_" + props.index}
                                    onChange={handleChange}
                                    required
                              />
                              <br />
                        </label>
                  </p>
            </>
      );
};

export const TrueOrFalse = (props) => {
      const { map, setMap } = useContext(QuizContext);
      const [value, setValue] = useState();

      const { error, changeError } = useContext(QuizContext);
      const index = props.index;

      function handleChange(boolean) {
            setValue(boolean);
            updateMap(boolean);
      }

      function updateMap(boolean) {
            setMap(map.set(props.index, boolean));
      }

      return (
            <>
                  <h2>
                        <span style={{ color: "red" }} index={index}>
                              {error[index]}
                        </span>
                        {props.title}
                  </h2>
                  <p>
                        <label>
                              <input
                                    type="radio"
                                    name={"question_" + props.index}
                                    value="true"
                                    onChange={(e) => handleChange(true)}
                                    className="mr-2"
                              />
                              True
                              <br />
                        </label>
                        <label>
                              <input
                                    type="radio"
                                    name={"question_" + props.index}
                                    value="false"
                                    onChange={(e) => handleChange(false)}
                                    className="mr-2"
                              />
                              False
                              <br />
                        </label>
                  </p>
            </>
      );
};
