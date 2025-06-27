import React from 'react';
import './client.scss'
import ClientOwn from '../../../features/store/client/ClientOwn';
import g1 from '../../../imgs/store/g1.png'
import g2 from '../../../imgs/store/g2.png'
import g3 from '../../../imgs/store/g3.png'
import g4 from '../../../imgs/store/g4.png'
import inst from '../../../imgs/store/instagram.png'

const Client = () => {
    return (
        <section className='cl-con'>
            <h2>Our happy clients</h2>
            <div className="comm">
                <p>I’m so impressed with this online medical store. The product selection is extensive and the prices are great. I found everything i needed in one place. The ordering process was easy, delivery was prompt, and the items arrived in perfect condition. Plus, the customer service team was incredibly helpful.</p>
            </div>
            <div className="owners">
                <ClientOwn 
                    img={g1}
                    text={'James Wilson'}
                    disc={'Manager'}
                />
                <ClientOwn 
                    img={g2}
                    text={'Henry Adams'}
                    disc={'CEO'}
                />
                <ClientOwn 
                    img={g3}
                    text={'Ethan Harris'}
                    disc={'Business manager'}
                />
                <ClientOwn 
                    img={g4}
                    text={'Lily Baker'}
                    disc={'Product manager'}
                />
            </div>

            <div className="insta">
                <img src={inst} alt="" />
            </div>
        </section>
    );
}

export default Client;
