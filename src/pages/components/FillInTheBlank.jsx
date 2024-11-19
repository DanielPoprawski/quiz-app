import { useContext, useState } from "react";
import { QuizContext } from "../Learn";

export default function FillInTheBlank(props) {
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
