import food from './restauranfood.jpg'
import './Hero.css'
import Button from '../../common/button/Button'
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className='hero heroGrid'>
            <div className='title titleGrid'>Little Lemon</div>
            <div className='subTitle subTitleGrid'>Chicago</div>
            <div className='text textGrid'>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
            </div>
            <Link to='/booking'>
                <Button caption='Reserve a Table' data-testid='btnRes' className="buttonRect buttonRectGrid" />
            </Link>
            <div className='image imageGrid'>
            <img src={food} alt='Restaurant food' width={200} />
            </div>
        </section>
    )
}

{/* <div className="buttonRect buttonRectGrid">
<a href="" role="button">Reserve a Table</a>
</div> */}


export default Hero