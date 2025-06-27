import React from 'react';
import './latestProd.scss'

const LatestProd = ({img, disc, text, price, oldPrice}) => {
    return (
        <div className='latest-con'>
            <div className="img-latest">
                <div className='absol'>{disc}</div>
                <img src={img} alt="" />
            </div>
            <div className="texts">
                <h3>{text}</h3>
                <div className="prices">
                    <p>{price}</p>
                    <p className="old">{oldPrice}</p>
                </div>
            </div>
        </div>
    );
}

export default LatestProd;
