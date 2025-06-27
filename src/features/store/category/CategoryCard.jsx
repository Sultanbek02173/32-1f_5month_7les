import React from 'react';
import './categoryCard.scss'

const CategoryCard = ({img, text, disc}) => {
    return (
        <div className='con'>
            <div className="circle-1">
                <div className="circle-2">
                    <img src={img} alt="img" />
                </div>
            </div>
            <div className="texts">
                <h4>{text}</h4>
                <p>{disc}</p>
            </div>
        </div>
    );
}

export default CategoryCard;
