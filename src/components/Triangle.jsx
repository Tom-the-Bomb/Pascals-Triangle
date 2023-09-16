import { nk } from "./Solver";
import Tooltip from "./Tooltip";

function Number({n, k, conditions}) {
    const number = nk(n, k);
    const hl = conditions.filter((o) => o.f(number, n, k))[0];

    const inner =
        <div style={hl ? {backgroundColor: document.getElementById(hl.name + "color").value} : null}
            className="d-flex justify-content-center align-items-center p-2 rounded-2 number"
        >
            {number}
        </div>;
    return (
        number === 1
            ? inner
            : <Tooltip placement="top" text={number === 1 ? 1 : `${nk(n - 1, k - 1)} + ${nk(n - 1, k)}`}>
                {inner}
            </Tooltip>
    )
}

function Row({n, conditions}) {
    return (
        <div id="row" className="d-flex gap-2 flex-row justify-content-center">
            {
                [...Array(n + 1)].map(
                    (_, i) => <Number n={n} k={i} conditions={conditions}></Number>
                )
            }
        </div>
    )
}

export default function Triangle({nRows, conditions}) {
    return (
       <div id="triangle" className="d-flex gap-2 flex-column">
            {
                [...Array(nRows)].map(
                    (_, i) => <Row n={i} conditions={conditions}></Row>
                )
            }
       </div>
    )
}