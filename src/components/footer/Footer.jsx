import logo from '../../imgs/store/Group123.svg';
import socials from '../../imgs/footer/socials.svg';
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container footer_links'>
                <div className='links'>
                    <h3>Pages</h3>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Blog</p>
                    <p>Privacy policy</p>
                    <p>FAQs</p>
                </div>
                <div className='links'>
                    <h3>Utility</h3>
                    <p>Style guide</p>
                    <p>Instruction</p>
                    <p>Changelog</p>
                    <p>Licenses</p>
                    <p>Link in bio</p>
                    <p>Error 404</p>
                    <p>Password protected</p>
                </div>
                <div className='footer_links_social'>
                    <h3>
                        <img src={logo} alt="" />
                        Medifit
                    </h3>
                    <p>We provides the ultimate solution for your online store and all the healthcare needs.</p>

                    <div>
                        <img src={socials} alt="" />
                    </div>
                </div>
                <div>

                    <div className='links address'>
                        <h3>Address</h3>
                        <p>1640 Parker Rd. Allentown, New Mexico 31134</p>
                    </div>

                    <div className='links'>
                        <h3>Contact</h3>
                        <p>hello@gmail.com</p>
                        <p>(209) 555-0104</p>
                    </div>
                </div>
            </div> 

            <div className='container poweredBy'>
                <h3>Design By Webestica, Powered By Webflow </h3>
            </div>
        </footer>
    );
}

export default Footer;
