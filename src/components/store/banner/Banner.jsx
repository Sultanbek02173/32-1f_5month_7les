import './banner.scss';
import bannerBg from '../../../imgs/store/Group220.png';

const Banner = () => {
    return (
        <section className='banner_section'>
            <div className='container banner__cont'>
                <div className='description'>
                    <h1>Your trusted care now and always</h1>
                    <p>For the best results, align your health needs with your medication plan.</p>

                    <button>Shop now</button>
                </div>
                <div className='banner__bg'> 
                    <img src={bannerBg} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Banner;
