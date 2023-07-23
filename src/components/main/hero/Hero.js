import './Hero.css';
import Content from "./content/Content"
import Image from "./image/Image"

function Hero() {
    return (
        <section className='hero'>
            <Content/>
            <Image/>
        </section>
    )
}

export default Hero