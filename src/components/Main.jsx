import { useState } from "react";
import Triangle from "./Triangle";
import Controls from "./Controls";
import { Solver } from "./Solver";

export default function Main() {
    const [ nRows, setNRows ] = useState(15);
    const [ conditions, setConditions ] = useState([]);

    return (
        <main class="d-flex flex-column flex-grow-1 justify-content-around gap-5">
            <h1 class="display-2 text-center text-white mt-5">Pascal's Triangle</h1>
            <div className="flex-wrap d-flex flex-row justify-content-evenly gap-5">
                <Triangle nRows={nRows} conditions={conditions}></Triangle>
                <Controls
                    setNRows={(x) => setNRows(x)}
                    setConditions={(x) => setConditions(x)}
                ></Controls>
            </div>
            <Solver></Solver>
        </main>
    )
}