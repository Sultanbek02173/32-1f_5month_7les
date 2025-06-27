import React from 'react';
import './product.scss'

const Product = ({text, disc, icon, btn, img}) => {
    return (
        <div className='prod-con'>
            <div className="texts">
                <h5>{disc}</h5>
                <h4>{text}</h4>
                <div className="btn">
                    <span>{icon}</span>
                    <a href="https://media.tenor.com/RaMeHQMP7DQAAAAi/among-us-sus.gif"><p>{btn}</p></a>
                    <div className="line"></div>
                </div>
            </div>
            <div className="p-img">
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default Product;
