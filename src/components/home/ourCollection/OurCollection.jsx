import './ourCollection.scss';
import bottle from '../../../imgs/home/bottle.png';
import med from '../../../imgs/home/medic.png';
import { Product } from '../../../features';

export const OurCollection = () => {
    const product = [
        {
            img: bottle,
            title: 'Hair tablets',
            price: '19.00 USD'
        },
        {
            img: med,
            title: 'Pressure measuring',
            price: '25.00 USD'
        },
        {
            img: bottle,
            title: 'Hair tablets',
            price: '19.00 USD'
        },
        {
            img: med,
            title: 'Pressure measuring',
            price: '25.00 USD'
        },
    ]
    return (
        <section className='container our_colection'>
            <div className='collection_item'>
                <h2>Discover our collection</h2>
                <p>Our medical store offers trusted products easy navigation, and fast shipping</p>
                <button>View all products</button>
            </div>

            {
                product && 
                product.map((product, indx) => (
                    <Product key={indx} img={product.img} title={product.title} price={product.price}/>
                ))
            }
        </section>
    );
}

