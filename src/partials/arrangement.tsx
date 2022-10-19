import React from "react";

function Arrangement() {
    const array = [40, 30, 20, 10];
    var loop = () => {
        return (
        <ul className="output-arrangement">
            {array.map((number) =>
                <li>{number}</li>
            )}
        </ul>
        )
    };

    return (
        <section className="output-arrangement">
            <h2>配列操作</h2>
            {loop()}
        </section>
    )
};

export default Arrangement;