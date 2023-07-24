import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/'>Reservations</Link>
            <Link to='/'>Order Online</Link>
            <Link to='/'>Login</Link>
        </nav>
    )
}

export default Nav