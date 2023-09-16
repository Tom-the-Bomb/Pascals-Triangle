import React, { useEffect, useRef } from "react";

export default function Tooltip({children, text, placement}) {
    const childRef = useRef(undefined);

    useEffect(() => {
        const t = new window.bootstrap.Tooltip(childRef.current, {
            title: text,
            placement: placement ? placement : "right",
            trigger: "hover",
        });
        return () => t.dispose();
    }, [text]);

    return React.cloneElement(children, { ref: childRef });
}