import './banner.scss';
import firstBg from '../../../imgs/home/Rectangle122.png';
import secondBg from '../../../imgs/home/Maskgroup.png';
import company from '../../../imgs/home/Compnay.svg';

const companys = [company, company, company, company, company, company];

export const Banner = () => {

    const repeatComp = Array(10).fill(companys).flat();
    return (
        <section>
            <div className='home__banner container'>
                <div className='left__banner'>
                    <h2>From wellness to care all in one place</h2>
                    <div className='description'>
                        <div>
                            <img src={firstBg} alt="" />
                        </div>
                        <div className='text'>
                            <p>
                                Your health is in good hands with Medifit. We’re here to provide you with a wide range of healthcare essentials, carefully selected.
                            </p>
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>
                <div className='right__banner'>
                    <img src={secondBg} alt="" />
                </div>
            </div>

            <div className='company'>
                <div className='carusel'>
                    {
                        repeatComp && 
                        repeatComp.map((comp, indx) => (
                            <div key={indx}>
                                <img src={comp} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}