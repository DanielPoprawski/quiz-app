import { useState } from "react";

export default function Err(props){
    

    //Make function to accept error messages from App

    const [message, setMessage] = useState("");

    return (
    <h6 style={{color: "red"}} key={props.index}>
        {message}
    </h6>)
}