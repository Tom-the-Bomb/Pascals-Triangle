import { nk } from "./Solver";

function Number({n, k}) {
    return (
        <div className="text-center p-2 rounded-2 number">
            {nk(n, k)}
        </div>
    )
}

function Row({n}) {
    return (
        <div id="row" className="d-flex gap-2 flex-row justify-content-center">
            {
                [...Array(n + 1)].map(
                    (_, i) => <Number n={n} k={i}></Number>
                )
            }
        </div>
    )
}

export default function Triangle({nRows}) {
    return (
       <div id="triangle" className="d-flex gap-2 flex-column">
            {
                [...Array(nRows)].map(
                    (_, i) => <Row n={i}></Row>
                )
            }
       </div>
    )
}