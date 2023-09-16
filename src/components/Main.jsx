import { useState } from "react";
import Triangle from "./Triangle";

function Control({condition, setConditions}) {
    const addCondition = (condition, value) => {
        if (value) {
            setConditions((conditions) => [
                ...conditions,
                condition,
            ]);
        } else {
            setConditions((conditions) =>
                conditions.filter((o) => o.name !== condition.name)
            );
        }
    }
    return (
        <div className="d-flex flex-row gap-2 align-items-center">
            <div class="form-check form-switch">
                <input
                    onChange={
                        (event) => addCondition(
                            condition,
                            event.target.checked,
                        )
                    }
                    class="form-check-input" type="checkbox" id={condition.name}></input>
                <label class="form-check-label" htmlFor={condition.name}>{condition.name}</label>
            </div>
            <input
                class="form-control-color color-picker" type="color" id={condition.name + "color"}
            ></input>
        </div>
    )
}

function Controls({setNRows, setConditions}) {
    return (
        <div className="d-flex flex-column gap-4">
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
                    <label htmlFor="row-n" class="form-label">Number of Rows</label>
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
            <Control condition={{name: "Multiples of 2", f: (n, _, __) => n % 2 === 0}} setConditions={setConditions}></Control>
            <Control condition={{name: "Multiples of 3", f: (n, _, __) => n % 3 === 0}} setConditions={setConditions}></Control>
            <Control condition={{name: "Multiples of 4", f: (n, _, __) => n % 4 === 0}} setConditions={setConditions}></Control>
            <Control condition={{name: "Multiples of 5", f: (n, _, __) => n % 5 === 0}} setConditions={setConditions}></Control>
            <Control condition={{name: "Triangular numbers", f: (_, n, k) => k === 2 || k === n - 2}} setConditions={setConditions}></Control>
            <Control condition={{name: "Tetrahedral numbers", f: (_, n, k) => k === 3 || k === n - 3}} setConditions={setConditions}></Control>
        </div>
    )
}

export default function Main() {
    const [ nRows, setNRows ] = useState(15);
    const [ conditions, setConditions ] = useState([]);

    return (
        <main class="d-flex flex-column flex-grow-1 justify-content-around">
            <h1 class="display-2 text-center text-white">Pascal's Triangle</h1>
            <div className="flex-wrap d-flex flex-row justify-content-evenly">
                <Triangle nRows={nRows} conditions={conditions}></Triangle>
                <Controls
                    setNRows={(x) => setNRows(x)}
                    setConditions={(x) => setConditions(x)}
                ></Controls>
            </div>
        </main>
    )
}