import { useContext, useState } from "react";
import { QuizContext } from "../App";

export default function FillInTheBlank(props) {
        const { map, setMap } = useContext(QuizContext);
        const [value, setValue] = useState();

        function handleChange(event) {
                setValue(event.target.value);
                updateMap(event);
        }

        function updateMap(e) {
                setMap(map.set(props.index, e.target.value));
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
