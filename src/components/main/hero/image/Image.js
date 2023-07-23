import './Image.css'
import food from './restauranfood.jpg';

function Image() {
    return (
        <div className='image'>
            <img src={food} alt='Restaurant food' width={200}/>
        </div>
    )
}

export default Image