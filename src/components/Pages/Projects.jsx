import { useState } from "react";

export default function Projects() {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [output, setOutput] = useState("");
    const add = () => setOutput(Number(first) + Number(second));
    const subtract = () => setOutput(Number(first) - Number(second));
    const multiply = () => setOutput(Number(first) * Number(second));
    const divide = () => setOutput(Number(first) / Number(second));
    const power = () => setOutput(Number(first) ** Number(second));
    const clearing = () => {
        setFirst(0);
        setSecond(0);
        setOutput("");
    };
    return (
        <main className="project_main">
            <p className="project_text">
                Alright listen up, here is a project that is very important to me. As a serial
                killer, nothing matters more than properly counting the number of kills you've got. If
                you fail to do that, you've failed as a slasher villain. That's why I made this: a calculator tool that can always tell
                you exactly how many victims you have under your belt!
            </p>

            <form>
                <label htmlFor="first">First Number:</label>
                <input type="number" id="first" value={first} onChange={(e) => setFirst(Number(e.target.value))}/> {/* onChange needed so values actually adjust when user inputs */}
                <label htmlFor="second">Second Number:</label>
                <input type="number" id="second" value={second} onChange={(e) => setSecond(Number(e.target.value))}/>
                <input type="button" value="+" onClick={add} />
                <input type="button" value="-" onClick={subtract} />
                <input type="button" value="*" onClick={multiply} />
                <input type="button" value="/" onClick={divide} />
                <input type="button" value="**" onClick={power} />
                <input type="button" value="clear" onClick={clearing} />
            </form>
            <div className="output_row">
                <p className="project_text">Output:</p>
                <p id="output">{output}</p>
            </div>
        </main>
    );
}