import { useState } from "react";
import Triangle from "./Triangle";

function addCondition(condition, value, conditions, setConditions) {
    const index = conditions.indexOf(condition);
    if (value === 'on') {
        if (index <= -1) {
            conditions.push(condition);
        }
    } else {
        if (index > -1) {
            conditions.splice(index, 1);
        }
    }
    setConditions(conditions);
}

function Controls({setNRows, conditions, setConditions}) {
    return (
        <div>
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
            <div class="form-check form-switch">
                <input 
                    onChange={
                        (event) => addCondition(
                            [(n) => n % 2 === 0, "#ffffff"],
                            event.target.value, conditions, setConditions,
                        )
                    }
                    class="form-check-input" type="checkbox" id="evenNumbers"></input>
                <label class="form-check-label" for="evenNumbers">Even numbers</label>
            </div>
        </div>
    )
}

export default function Main() {
    const [ nRows, setNRows ] = useState(12);
    const [ conditions, setConditions ] = useState([]);

    return (
        <main class="d-flex flex-column flex-grow-1 justify-content-around">
            <h1 class="display-2 text-center text-white">Pascal's Triangle</h1>
            <div className="d-flex flex-row justify-content-around">
                <Triangle nRows={nRows} conditions={conditions}></Triangle>
                <Controls
                    conditions={conditions}
                    setNRows={(x) => setNRows(x)}
                    setConditions={(x) => setConditions(x)}
                ></Controls>
            </div>
        </main>
    )
}