import restaurant from './restaurant.jpg'
import marioAdrian from './MarioAdrian.jpg'


function About() {
    return (
        <section className='row about'>
            <div className='column'>
                <div className='title'>Little Lemon</div>
                <div className='subTitle'>Chicago</div>
                <div className='text'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
                    deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </div>
            </div>
            <div className='column image'>
                <div className='divImages divImagesGrid'>
                    <img src={restaurant} alt='Inside Restaurant' width={200} className='restaurantImg' />
                    <img src={marioAdrian} alt='Mario and Adrian' width={200} className='marioAdrianImg' />
                </div>
            </div>
        </section>
    )
}

export default About