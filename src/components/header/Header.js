import logo from './logo.svg';
import './Header.css';
import Nav from '../nav/Nav'

function Header() {
    return (
        <header>
            <img src={logo} alt='Logo' />
            <Nav/>
        </header>
    )
}

export default Header