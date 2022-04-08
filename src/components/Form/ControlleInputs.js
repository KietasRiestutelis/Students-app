import React from "react";
import { useState } from "react";
import {v4 as uuid} from "uuid";

const ControlleInputs = () => {
    const [firstName, setFirstName] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const person = {id:{uuid}, firstName};
        console.log(person)
        setFirstName("")
    };
   
    return (
        <>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="firstName">Name : </label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
        </form>
        </>
    )
}

export default ControlleInputs