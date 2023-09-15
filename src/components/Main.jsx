import { useState } from "react";
import Triangle from "./Triangle";

function Controls({setNRows}) {
    return (
        <form id="triForm"
            onSubmit={
                (event) => {
                    event.preventDefault();

                    const elements = event.target.elements;
                    const nRows = elements.nRows.value;
                    if (nRows !== null) {
                        setNRows(Number(nRows));
                    }
                }
            }
        >
            <div class="mb-3">
                <label for="row-n" class="form-label">Number of Rows</label>
                <input
                    type="number"
                    name="nRows"
                    class="form-control"
                    id="row-n"
                    min="1" max="20"
                    placeholder="1 to 20"
                ></input>
            </div>
            <button className="btn btn-success" type="submit">Apply</button>
        </form>
    )
}

export default function Main() {
    const [ nRows, setNRows ] = useState(12);

    return (
        <main class="d-flex flex-column flex-grow-1 justify-content-around">
            <h1 class="display-2 text-center text-white">Pascal's Triangle</h1>
            <div className="d-flex flex-row justify-content-around">
                <Triangle nRows={nRows}></Triangle>
                <Controls setNRows={(x) => setNRows(x)}></Controls>
            </div>
        </main>
    )
}