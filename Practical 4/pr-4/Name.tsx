import React, { useState, useEffect } from "react";

function Name() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div className="text-center">
            <h1 className="text-4xl mt-6 mb-6 font-bold">Welcome to CHARUSAT!!!!</h1>
            <div>
                <div className="space-x-2 ">
                    <label>
                        First Name:
                    </label>
                    <input
                        className="border px-2 py-1"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="space-x-2 mt-4">
                    <label>
                        Last Name:
                    </label>
                    <input
                        className="border px-2 py-1"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
            </div>
        </div>

    )
}
export default Name;