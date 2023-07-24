import './Footer.css'
import restaurantChef from './restaurantChefB.jpg'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className='footer footerGrid'>
            <div className='divImages divImagesGrid'>
                <img src={restaurantChef} alt='Restaurant Chef' width={200} />
            </div>
            <nav className='navGrid'>
                <h3>Doormat Navigation</h3>
                <Link to='/' className='link'>Home</Link>
                <Link to='/about' className='link'>About</Link>
                <Link to='/menu' className='link'>Menu</Link>
                <Link to='/' className='link'>Reservations</Link>
                <Link to='/' className='link'>Order Online</Link>
                <Link to='/' className='link'>Login</Link>
            </nav>
            <div className='contact contactGrid'>
                <h3>Contact</h3>
                <p> 123 Main St Seattle WA</p>
                <p>987-654-3210</p>
                <p><a href='mailto:little_lemon@gmail.com'>little_lemon@gmail.com</a></p>
            </div>
            <div className='social socialGrid'>
                <h3>Social Media Links</h3>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>
        </footer>
    )
}

export default Footer