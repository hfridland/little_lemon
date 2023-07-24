import './About.css'
import restaurant from './restaurant.jpg'
import marioAdrian from './MarioAdrian.jpg'


function About() {
    return (
        <main className='about aboutGrid'>
            <div className='title titleGrid'>Little Lemon</div>
            <div className='subTitle subTitleGrid'>Chicago</div>
            <div className='text textGrid'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </div>
            <div className='divImages divImagesGrid'>
                <img src={restaurant} alt='Inside Restaurant' width={200} className='restaurantImg' />
                <img src={marioAdrian} alt='Mario and Adrian' width={200} className='marioAdrianImg' />
            </div>
        </main>
    )
}

export default About