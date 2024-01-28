import { useState } from "react";

const Input = () => {
    const [inputData, setInputData] = useState('');
    console.log(inputData);

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };
    return (
        <label className="form-control w-full max-w-xs bg-cyan-500">
            <div className="label">
                <span className="label-text">What`s on your mind?</span>
            </div>
            <input
                type="text" placeholder="Type here" id="inputField" className="input input-bordered w-full max-w-xs "
                value={inputData}
                onChange={handleInputChange}
            />
        </label>
    );
};

export default Input;