import { useRef, useEffect, useState } from "react";

var katex = require('katex');

function Latex({content}) {
    const container = useRef();

    useEffect(() => {
        katex.render(content, container.current, { throwOnError: false });
    }, [content]);

    return <span ref={container} />
}

function factorial(n) {
    let x = 1;
    for (let i = 1; i <= n; i++) {
        x *= i;
    }
    return x;
}

export function nk(n, k) {
    return factorial(n) / (factorial(n - k) * factorial(k));
}

export function Solver() {
    const [ n, setN ] = useState("n");
    const [ k, setK ] = useState("k");
    const [ _nk, setNK ] = useState(undefined);

    return (
        <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
            <hr></hr>
            <h5 className="text-center mx-5">Calculate the <Latex key={1} content="k"></Latex>-th number
                on the <Latex content="n"></Latex>-th row of Pascal's Triangle
            </h5>
            <form id="nkForm" className="d-flex flex-row gap-2 justify-content-center flex-wrap"
                onSubmit={
                    (event) => {
                        event.preventDefault();
                        setNK((n > 0 || n === 0) && (k > 0 || k === 0) ? nk(n, k) : undefined);
                    }
                }
            >
                <input
                    onChange={(e) => setN(e.target.value > 0 || e.target.value === "0" ? Number(e.target.value) : "n")}
                    placeholder="n" type="number"
                    class="form-control calc-input" name="inputN"
                    min="0" max="1000"
                ></input>
                <input
                    onChange={(e) => setK(e.target.value > 0 || e.target.value === "0" ? Number(e.target.value) : "k")}
                    placeholder="k" type="number"
                    class="form-control calc-input" name="inputK"
                    min="0" max="1000"
                ></input>
                <button type="submit" className="btn btn-success">Enter</button>
                <Latex content={`\\longrightarrow\\binom{${n}}{${k}}=\\frac{${n}!}{${k}!(${n} - ${k})!}`}></Latex>
                {
                    _nk > 0 || _nk === 0
                        ? <span className="d-flex flex-row gap-2">
                            <Latex content="="></Latex>
                            <span className="d-flex justify-content-center align-items-center p-2 nk-ans rounded-3">
                                {Math.round(_nk)}
                            </span>
                        </span>
                        : ""
                }
            </form>
            <i className="text-white-50">(Binomial coefficient / combinations formula)</i>
        </div>
    )
}