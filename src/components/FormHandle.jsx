import React, { useState } from 'react';

const FormHandle = () => {
    const [inputValue, setInputValue] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setIsDisabled(value == "");
        // setIsDisabled(false);
    }


    return (
        <div className='form'>
            <div>Form</div>
            <form>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='type....'
                />
                <button type='submit' disabled={isDisabled}>submit</button>
            </form>
        </div>
    );
};

export default FormHandle;