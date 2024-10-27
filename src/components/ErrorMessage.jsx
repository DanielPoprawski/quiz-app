import { useContext, useState } from "react";
import { QuizContext } from "../App";

export default function Err(props){

    // TODO: Make function to accept error messages from App
    // Add some sort of index
    // Make small list of basic error messages

    const {error, changeError} = useContext(QuizContext);
    const index = props.index;


    return (
    <h6 style={{color: "red"}} index={index} >
        {error[index]}
    </h6>)
}