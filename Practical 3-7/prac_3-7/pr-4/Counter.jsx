import React, { useState, useEffect } from "react";

function Count() {
    const [count, setCount] = useState(0);

    return (
        <div className="text-center">
            <h1 className="text-6xl mb-4 font-bold">Count: {count}</h1>
            <div className="space-x-1">
                <button className="border px-3 py-1" onClick={() => setCount(0)}>Reset</button>
                <button className="border px-3 py-1" onClick={() => setCount(count + 1)}>Increment</button>
                <button className="border px-3 py-1" onClick={() => setCount(count - 1)}>Decrement</button>
                <button className="border px-3 py-1" onClick={() => setCount(count + 5)}>Increment 5</button>
            </div>
        </div>
    )
}

export default Count;