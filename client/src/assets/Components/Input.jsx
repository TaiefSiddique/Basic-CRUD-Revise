import { useState } from "react";

const Input = () => {
    const [inputData, setInputData] = useState('');
    //console.log(inputData);

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };

    const handleInputData = (event) => {
        event.preventDefault();
        console.log(inputData);
        const inputDataObj = { inputData }

        fetch('http://localhost:5000/texts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputDataObj),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

    }
    return (
        <form onSubmit={handleInputData}>
            <label className="form-control w-full max-w-xs bg-cyan-500">
                <div className="label">
                    <span className="label-text">What`s on your mind?</span>
                </div>
                <input
                    type="text" placeholder="Type here" id="inputField" className="input input-bordered w-full max-w-xs "
                    value={inputData}
                    onChange={handleInputChange}
                />
                <button className="btn btn-outline btn-primary" type="submit">Submit</button>
            </label>
        </form>
    );
};

export default Input;

/*
import React, { useState } from "react";

const Input = () => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        console.log(inputData); // Do something with the input data
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">What's on your mind?</span>
                </div>
                <input
                    type="text"
                    placeholder="Type here"
                    id="inputField"
                    className="input input-bordered w-full max-w-xs"
                    value={inputData}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit" className="btn">Submit</button>
        </form>
    );
};

export default Input;
*/