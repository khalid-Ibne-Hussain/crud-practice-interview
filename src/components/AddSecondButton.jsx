import React, { useState } from 'react';

const AddSecondButton = () => {

    const [add, setAdd] = useState(-1);
    const [buttons, setButtons] = useState([]);

    const add2ndButtonClick = () => {
        setAdd(add + 1);
        setButtons([...buttons, add + 1]);
    }

    return (
        <div className='button2'>
            <button onClick={add2ndButtonClick}>add2</button>
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

export default AddSecondButton;