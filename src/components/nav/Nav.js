import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul className='menu'>
                <li role='menu-item'><a href="">Home</a></li>
                <li role='menu-item'><a href="">About</a></li>
                <li role='menu-item'><a href="">Menu</a></li>
                <li role='menu-item'><a href="">Reservations</a></li>
                <li role='menu-item'><a href="">Orer Online</a></li>
                <li role='menu-item'><a href="">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav