import food from './restauranfood.jpg'
import Button from '../../common/button/Button'
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className='row hero'>
            <div className='column'>
                <div className='title'>Little Lemon</div>
                <div className='subTitle'>Chicago</div>
                <div className='text'>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                </div>
                <Link to='/booking'>
                    <Button caption='Reserve a Table' data-testid='btnRes' className="buttonRect buttonRectGrid" />
                </Link>
            </div>
            <div className='column image'>
                <img src={food} alt='Restaurant food' width={200} />
            </div>
        </section>
    )
}

{/* <div className="buttonRect buttonRectGrid">
<a href="" role="button">Reserve a Table</a>
</div> */}


export default Hero