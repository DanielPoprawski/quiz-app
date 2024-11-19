import { useContext, useState } from "react";
import { QuizContext } from "../Learn";

export default function FillInTheBlank(props) {
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
                                        />
                                        False
                                        <br />
                                </label>
                        </p>
                </>
        );
}
