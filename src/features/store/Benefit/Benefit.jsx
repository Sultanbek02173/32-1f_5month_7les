import React from 'react';
import './benefit.scss'

const Benefit = ({img, text, disc}) => {
    return (
        <div className='ben-con'>
            <img src={img} alt="" />
            <div className="texts">
                <h3>{text}</h3>
                <p>{disc}</p>
            </div>
        </div>
    );
}

export default Benefit;
