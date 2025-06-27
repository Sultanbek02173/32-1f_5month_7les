import React from 'react';
import './client.scss'

const Client = ({img, text, disc}) => {
    return (
        <div className='con-sss'>
            <div className="own">
                <img src={img} alt="" />
            </div>
            <div className="texts">
                <h3>{text}</h3>
                <p>{disc}</p>
            </div>
        </div>
    );
}

export default Client;
