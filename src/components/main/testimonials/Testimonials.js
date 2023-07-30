import linda from './linda.jpeg'
import sarah from './sarah.jpeg'
import jakob from './jakob.jpeg'
import Testimonial from './testimonial/Testimonial'

function Testimonials() {
    const testimonialsData = [{
        rate: 3,
        image: linda,
        name: 'Linda',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et fringilla est. ' +
                'Quisque fermentum massa eget lectus ullamcorper tempor et sit amet lacus. Suspendisse ' +
                'posuere convallis ipsum, non ullamcorper arcu elementum vitae. Aenean eget viverra odio. ' +
                'Nunc iaculis fringilla ante, et dictum tortor porttitor eget.'
    }, {
        rate: 5,
        image: sarah,
        name: 'Sarah',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et fringilla est. ' +
            'Quisque fermentum massa eget lectus ullamcorper tempor et sit amet lacus. Suspendisse ' +
            'posuere convallis ipsum, non ullamcorper arcu elementum vitae. Aenean eget viverra odio. ' +
            'Nunc iaculis fringilla ante, et dictum tortor porttitor eget.'
    }, {
        rate: 4,
        image: jakob,
        name: 'Jakob',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et fringilla est. ' +
            'Quisque fermentum massa eget lectus ullamcorper tempor et sit amet lacus. Suspendisse ' +
            'posuere convallis ipsum, non ullamcorper arcu elementum vitae. Aenean eget viverra odio. ' +
            'Nunc iaculis fringilla ante, et dictum tortor porttitor eget.'
    }]
    return (
        <section className='testimonials'>
            <div className="row titleRow">
                <div className='title'>Testimonials</div>
            </div>
            <div className="row persons">
                {testimonialsData.map(item => <Testimonial rate={item.rate} image={item.image} name={item.name} text={item.text} />)}
            </div>
        </section>
    )
}

export default Testimonials