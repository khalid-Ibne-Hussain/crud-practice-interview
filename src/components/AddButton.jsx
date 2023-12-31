import React, { useState } from 'react';

const AddButton = () => {
    const [count, setCount] = useState(0);
    const [buttons, setButtons] = useState([]);

    const handleAddButtonClick = () => {
        setCount(count + 1);
        setButtons([...buttons, count + 1]);
    }

    return (
        <div>
            <button onClick={handleAddButtonClick}>Add</button>
            <span>
                {
                    buttons.map(buttonN => (
                        <button key={buttonN}>{buttonN}</button>
                    ))
                }
            </span>
        </div>
    );
};

export default AddButton;