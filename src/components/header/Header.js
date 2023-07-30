import logo from './logo.svg';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <Link aria-label='Home' to='/'><img src={logo} alt='Logo' /></Link>
                <Link aria-label='Home' to='/'>Home</Link>
                <Link aria-label='About Little Lemon' to='/about'>About</Link>
                <Link aria-label='Little Lemon Menu' to='/menu'>Menu</Link>
                <Link to='/booking' aria-label='Reservations'>Reservations</Link>
                <Link to='/testimonials' aria-label='Testimonials'>Testimonials</Link>
            </nav>
        </header>
    )
}

export default Header