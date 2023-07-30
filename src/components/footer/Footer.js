import logo from './logo.png'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className='column'>
                <img src={logo} alt='Restaurant Chef' width={130} />
            </div>
            <nav className='column'>
                <h3>Doormat Navigation</h3>
                <Link aria-label='Home' to='/'>Home</Link>
                <Link aria-label='About Little Lemon' to='/about'>About</Link>
                <Link aria-label='Little Lemon Menu' to='/menu'>Menu</Link>
                <Link to='/booking' aria-label='Reservations'>Reservations</Link>
                <Link to='/testimonials' aria-label='Testimonials'>Testimonials</Link>
            </nav>
            <div className='column'>
                <h3>Contact</h3>
                <p> 123 Main St Seattle WA</p>
                <p>987-654-3210</p>
                <p><a href='mailto:little_lemon@gmail.com'>little_lemon@gmail.com</a></p>
            </div>
            <div className='column'>
                <h3>Social Media Links</h3>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>
        </footer>
    )
}

export default Footer
