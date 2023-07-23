import food from './restauranfood.jpg'
import './Hero.css'

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
            <div className="buttonRect buttonRectGrid">
                <a href="" role="button">Reserve a Table</a>
            </div>
            <div className='image imageGrid'>
            <img src={food} alt='Restaurant food' width={200} />
            </div>
        </section>
    )
}

export default Hero