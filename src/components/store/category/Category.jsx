import React from 'react';
import './category.scss'
import CategoryCard from '../../../features/store/category/CategoryCard';
import q1 from '../../../imgs/store/q1.svg'
import q2 from '../../../imgs/store/q2.svg'
import q3 from '../../../imgs/store/q3.svg'
import q4 from '../../../imgs/store/q4.svg'
import q5 from '../../../imgs/store/q5.svg'
import q6 from '../../../imgs/store/q6.svg'
import r1 from '../../../imgs/store/r1.png'
import r2 from '../../../imgs/store/r2.png'
import r3 from '../../../imgs/store/r3.png'
import Product from '../../../features/store/product/Product';

const Category = () => {
    return (
        <section className='categ-con'>
            <h2>Shop by Category</h2>
            <div className="cards">
                <CategoryCard 
                    img={q1}
                    text={'Medicine'}
                    disc={'32 Items'}
                />
                
                <CategoryCard 
                    img={q2}
                    text={'Health care'}
                    disc={'20 Items'}
                />
                
                <CategoryCard 
                    img={q3}
                    text={'Beauty care'}
                    disc={'30 Items'}
                />
                
                <CategoryCard 
                    img={q4}
                    text={'Fitness'}
                    disc={'35 Items'}
                />
                
                <CategoryCard 
                    img={q5}
                    text={'Lab equipment'}
                    disc={'25 Items'}
                />
                
                <CategoryCard 
                    img={q6}
                    text={'Medkits'}
                    disc={'25 Items'}
                />
                
            </div>

            <div className="product">
                <Product 
                    disc={'Sanitizer'}
                    text={'Hand sanitizer collection '}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#8f7d6a"><path d="M263.72-96Q234-96 213-117.15T192-168v-456q0-29.7 21.15-50.85Q234.3-696 264-696h72v-16q0-60 40.5-106T480-864q60 0 102 42t42 102v24h72q29.7 0 50.85 21.15Q768-653.7 768-624v456q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72Zm.28-72h432v-456h-72v60q0 15.3-10.29 25.65Q603.42-528 588.21-528t-25.71-10.35Q552-548.7 552-564v-60H408v60q0 15.3-10.29 25.65Q387.42-528 372.21-528t-25.71-10.35Q336-548.7 336-564v-60h-72v456Zm144-528h144v-24q0-29.7-21.21-50.85-21.21-21.15-51-21.15T429-770.85Q408-749.7 408-720v24ZM264-168v-456 456Z"/></svg>}
                    btn={'Shop now'}
                    img={r1}
                />
                
                <Product 
                    disc={'Top deals'}
                    text={'Face wash sale collection '}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#8f7d6a"><path d="M480-312q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.6 0-259.8-78.5Q103-349 48-480q55-131 172.2-209.5Q337.4-768 480-768q142.6 0 259.8 78.5Q857-611 912-480q-55 131-172.2 209.5Q622.6-192 480-192Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58Z"/></svg>}
                    btn={'Discover now'}
                    img={r2}
                />

                <Product 
                    disc={'Face mask'}
                    text={'Facial mask deals save up to 50%'}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#8f7d6a"><path d="M480-312q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.6 0-259.8-78.5Q103-349 48-480q55-131 172.2-209.5Q337.4-768 480-768q142.6 0 259.8 78.5Q857-611 912-480q-55 131-172.2 209.5Q622.6-192 480-192Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58Z"/></svg>}
                    btn={'Discover now'}
                    img={r3}
                />
            </div>
        </section>
    );
}

export default Category;
