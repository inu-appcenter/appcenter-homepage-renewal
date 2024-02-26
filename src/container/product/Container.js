import React, { useState } from 'react';

export default function Container(props) {
    const parts = props.data;
    const [isDropdownView, setDropdownView] = useState(false);

    const handleClickContainer = () => {
        setDropdownView(!isDropdownView);
        console.log(isDropdownView);
        console.log(parts);
    };

    const handleBlurContainer = () => {
        setTimeout(() => {
            setDropdownView(false);
        }, 200);
    };

    return (
        <div className='container' onBlur={handleBlurContainer}>
            <label onClick={handleClickContainer}>
                <button>Dropdown Menu{isDropdownView ? '▲' : '▼'}</button>
            </label>
            {isDropdownView &&
                parts.map((item, i) => (
                    <>
                        <li onClick={() => console.log(parts)}>{item}</li>
                    </>
                ))}
        </div>
    );
}
