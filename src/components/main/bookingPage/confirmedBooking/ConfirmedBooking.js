import './ConfirmedBooking.css'
import { Link } from "react-router-dom";
import Button from '../../../common/button/Button'

function ConfirmedBooking(props) {
    return (
        <section className="confirmedBooking column">
            <div className='row title'>
                Your booking confirmed
            </div>
            <div className='row subTitle'>
                <span><strong className='strong'>Date:</strong>{props.data.date}</span>
                <span><strong className='strong'>Time:</strong>{props.data.time}</span>
                <span><strong className='strong'>Guests:</strong>{props.data.guests}</span>
                <span><strong className='strong'>Occasion:</strong>{props.data.occasion}</span>
            </div>
            <div className='row'>
                <Link to='/'>
                    <Button caption='Home' data-testid='btnRes' className="buttonRect buttonRectGrid" />
                </Link>
            </div>
        </section>
    )
}

export default ConfirmedBooking