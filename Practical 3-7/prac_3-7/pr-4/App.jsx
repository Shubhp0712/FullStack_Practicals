import React from "react";
import Count from "./Counter";
import Name from "./Name";

function App() {
    return (
        <div className="text-center flex flex-col items-center justify-center h-screen">
            <Count />
            <Name />
        </div>
    );
}

export default App;