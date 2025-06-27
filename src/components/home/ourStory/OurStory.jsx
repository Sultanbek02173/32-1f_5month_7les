import './ourStory.scss';
import bgStory from '../../../imgs/home/Maskgroup(1).png';
import med from '../../../imgs/home/fi_2448782.svg';

export const OurStory = () => {

    const medicine = [
        {
            img: med,
            text: 'Thoughtfully Made'
        },
        {
            img: med,
            text: 'Thoughtfully Made'
        },
        {
            img: med,
            text: 'Thoughtfully Made'
        },
        {
            img: med,
            text: 'Thoughtfully Made'
        }
    ]
    return (
        <section className='container'>

            <div className='our__story'>
                <div className='left__story'>
                    <h2>Bringing trusted health solutions to your doorstep focused on 
                    quality care & reliability</h2>
                    <p>
                        Our store offers a comprehensive range of pharmaceuticals, health and wellness products, and medical supplies to meet the diverse needs of our community.
                    </p>

                    <button>Our story</button>
                </div>

                <div className='right__story'>
                    <img src={bgStory} alt="" />
                </div>
            </div>

            <div className='medicine'>
                {
                    medicine &&
                    medicine.map((item, idx) => (
                        <div className='tablet' key={idx}>
                            <img src={item.img} alt="" />
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

