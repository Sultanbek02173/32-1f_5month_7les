import './header.scss';
import logo from '../../imgs/store/Group123.svg';
import search from '../../imgs/store/search-2.svg';
import cart from '../../imgs/store/cart.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='container main_header'>

            <Link to={'/'}>
                <div className='logo'>
                    <img src={logo} alt="" />
                    <h4>Medifit</h4>
                </div>
            </Link>
            <nav className='links'>
                <Link to={'/home'}><li>Home</li></Link>
                <Link to={'/shopDetail'}><li>Shop</li></Link>
                <Link to={'/about'}><li>About</li></Link>
                <Link to={'/contact'}><li>Contact</li></Link>
            </nav>

            <div className='shop'>
                <img src={search} alt="" />
                <img src={cart} alt="" />
            </div>
        </header>
    );
}

export default Header;
