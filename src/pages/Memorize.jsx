import { useRef, useState, useEffect } from "react";
import paragraph from "/public/poems/lorem_ipsum.json";
import { setTitle } from "../main.jsx";

export default function Memorize() {
	setTitle("Memorize");
	const [input, setInput] = useState("");
	const focusRef = useRef(null);
	const [isFocused, setIsFocused] = useState(false);
	const [body, setBody] = useState(paragraph);
	//TODO: remove input to only use one state

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
		divElement.focus();
	};

	useEffect(() => {
		const divElement = focusRef.current;
		if (divElement) {
			divElement.addEventListener("focus", handleFocus);
			divElement.addEventListener("blur", handleBlur);
			divElement.focus();
		}
		return () => {
			if (divElement) {
				divElement.removeEventListener("focus", handleFocus);
				divElement.removeEventListener("blur", handleBlur);
			}
		};
	}, [focusRef.current]);

	//TODO: Fix Splitter so that it highlights wrong letters as red
	//TODO: Add settings so only the next couple words are visible

	function clearInput() {
		setInput("");
		setBody(paragraph);
	}

	function handleEvent(event) {
		//	if (keys.includes(event.key)) {
		//		setInput(input + event.key);
		//		setBody(body.substring(1));
		//	} else if (event.key === "Backspace") {
		//		event.preventDefault();
		//		setInput(input.slice(0, -1));
		//		setBody(paragraph.substring(input.slice(0, -1).length));
		//	} else {
		//		console.log(event.key);
		//	}
		if (event.key === "Backspace" || event.key === "Escape") {
			event.preventDefault();

		}
		if (event.key === "Backspace") {
			setInput(input.slice(0, -1));
			setBody(paragraph.substring(input.slice(0, -1).length));
		}
		if (event.key.length === 1) {
			setInput(input + event.key);
			setBody(body.substring(1));
		}

	}

	function Splitter() {
		return (
			<div className="animate-blink inline">
				{input.split("").map((element, index) => {
					return (
						<span key={index} className="text-black">
							{element}
						</span>
					);
				})}
			</div>
		);
	}

	return (
		<div className="flex-1 p-8 container mx-auto">
			<div className="text-4xl font-bold mb-4 p-8 flex justify-between">{isFocused ? "Start typing..." : "Wait..."}<br />
				<button
					onClick={clearInput}
					className="cursor-pointer bg-red-500 hover:bg-red-700 text-amber-100 text-lg font-lg py-2 px-4 rounded transition-colors border-red-600 border-2"
				>
					Clear
				</button>
			</div>



			<h2
				tabIndex={0}
				className="typing text-xl font-medium font-mono relative text-gray-300 focus:outline-none p-4"
				onKeyDown={handleEvent}
				ref={focusRef}
			>
				<Splitter />
				{body}
				<br />
			</h2>
		</div>
	);
}
