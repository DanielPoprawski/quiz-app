import { useState } from "react";

export default function Err(props){

    // TODO: Make function to accept error messages from App
    // Add some sort of index
    // Make small list of basic error messages

    const [message, setMessage] = useState("");

    return (
    <h6 style={{color: "red"}} key={props.index}>
        {message}
    </h6>)
}