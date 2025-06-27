import React from 'react';
import './latestProduct.scss'
import LatestProd from '../../../features/store/latestProd/LatestProd';
import e1 from '../../../imgs/store/e1.png'
import e2 from '../../../imgs/store/e2.png'
import e3 from '../../../imgs/store/e3.png'
import e4 from '../../../imgs/store/e4.png'
import u1 from '../../../imgs/store/u1.png'
import u2 from '../../../imgs/store/u2.png'
import u3 from '../../../imgs/store/u3.png'
import Benefit from '../../../features/store/Benefit/Benefit';

const LatestProduct = () => {
    return (
        <section className='lt-con'>
            <h2>Latest health product</h2>
            <div className="latest-prod">
                <LatestProd 
                    img={e1}
                    text={'Microscope'}
                    price={'$45.00 USD'}
                    disc={<h4>new</h4>}
                />
                
                <LatestProd 
                    img={e2}
                    text={'Pulse oximeter'}
                    price={'$19.00 USD'}
                    disc={<h4>save 10%</h4>}
                    oldPrice={'$25.00 USD'}
                />
                <LatestProd 
                    img={e3}
                    text={'Vitamin serum'}
                    price={'$20.00 USD'}
                    oldPrice={'$30.00 USD'}
                />
                <LatestProd 
                    img={e4}
                    text={'High protein '}
                    price={'$50.00 USD'}
                    disc={<h4>new</h4>}
                />

            </div>
            <div className="benefit">
                <Benefit 
                    img={u1}
                    text={'30 Days warranty'}
                    disc={'Enjoy peace of mind with warranty'}
                />
                <Benefit 
                    img={u2}
                    text={'Exchange policy'}
                    disc={'You’re satisfied with your purchase'}
                />
                <Benefit 
                    img={u3}
                    text={'Secure payment'}
                    disc={'Shop with confidence every time'}
                />
            </div>
        </section>
    );
}

export default LatestProduct;
