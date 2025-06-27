import React from 'react';
import './collection.scss'
import d1 from '../../../imgs/store/d1.png'
import d2 from '../../../imgs/store/d2.png'
import d3 from '../../../imgs/store/d3.png'
import d4 from '../../../imgs/store/d4.png'
import d5 from '../../../imgs/store/d5.png'
import d6 from '../../../imgs/store/d6.png'
import d7 from '../../../imgs/store/d7.png'
import d8 from '../../../imgs/store/d8.png'
import pj from '../../../imgs/store/ooo1.png'
import LatestProd from '../../../features/store/latestProd/LatestProd';

const Collection = () => {
    return (
        <section className='col-con'>
            <div className="main-con">
                <h2>Explore Our store Collection</h2>
            <div className="col-cards">
                <LatestProd 
                    img={d1}
                    text={'B12 medicine'}
                    price={'$19.00 USD'}
                    oldPrice={'$25.00 USD'}
                />
                <LatestProd 
                    img={d2}
                    text={'Tonometer'}
                    price={'$19.00 USD'}
                />
                <LatestProd 
                    img={d3}
                    text={'ECG cardiograph'}
                    price={'$20.00 USD'}
                    oldPrice={'$35.00 USD'}
                />
                <LatestProd 
                    img={d4}
                    text={'Blood glucose meter'}
                    price={'$15.00 USD'}
                />
                <LatestProd 
                    img={d5}
                    text={'Lab hand gloves'}
                    price={'$20.00 USD'}
                    oldPrice={'$35.00 USD'}
                />
                <LatestProd 
                    img={d6}
                    text={'Stethoscope'}
                    price={'$20.00 USD'}
                    oldPrice={'$35.00 USD'}
                />
                <LatestProd 
                    img={d7}
                    text={'Inhaler pressure drop '}
                    price={'$35.00 USD'}
                />
                <LatestProd 
                    img={d8}
                    text={'Multi vitamin'}
                    price={'$20.00 USD'}
                />
            </div>
                <div className="join">
                    <img src={pj} alt="" />
                    <div className="sign">
                        <p>Join our newsletter</p>
                        <h3>Sign Up for an Instant 15% Discount</h3>
                        <div className="reg">
                            <input type="text" placeholder='✉️ Enter Email'/>
                            <button>{<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>} Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Collection;
