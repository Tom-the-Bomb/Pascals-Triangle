import Tooltip from "./Tooltip";

function Control({condition, setConditions, defaultColor}) {
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
            <Tooltip text="Select a highlight color">
                <input
                    defaultValue={defaultColor}
                    class="form-control-color color-picker" type="color" id={condition.name + "color"}
                ></input>
            </Tooltip>
        </div>
    )
}

export default function Controls({setNRows, setConditions}) {
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
            <Control condition={{name: "Multiples of 2", f: (n, _, __) => n % 2 === 0}}
                setConditions={setConditions} defaultColor="#373DEB"></Control>
            <Control condition={{name: "Multiples of 3", f: (n, _, __) => n % 3 === 0}}
                setConditions={setConditions} defaultColor="#43AFE5"></Control>
            <Control condition={{name: "Multiples of 4", f: (n, _, __) => n % 4 === 0}}
                setConditions={setConditions} defaultColor="#31D334"></Control>
            <Control condition={{name: "Multiples of 5", f: (n, _, __) => n % 5 === 0}}
                setConditions={setConditions} defaultColor="#B62020"></Control>
            <Control condition={{name: "Triangular numbers", f: (_, n, k) => k === 2 || k === n - 2}}
                setConditions={setConditions} defaultColor="#AFA216"></Control>
            <Control condition={{name: "Tetrahedral numbers", f: (_, n, k) => k === 3 || k === n - 3}}
                setConditions={setConditions} defaultColor="#CD47C8"></Control>
            <Control condition={{name: "Pentahope numbers", f: (_, n, k) => k === 4 || k === n - 4}}
                setConditions={setConditions} defaultColor="#611EA9"></Control>
        </div>
    )
}