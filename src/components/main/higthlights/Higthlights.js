import './Higthlights.css'
import greekSalad from './greekSalad.jpg'
import bruchetta from './bruchetta.png'
import lemonDessert from './lemonDessert.jpg'
import Button from '../../common/button/Button'
import Fooditem from './fooditem/Fooditem'

function Higthlights() {
    const foodItems = [{
        img: greekSalad,
        imgAlt: 'Greek Salad',
        foodName: 'Greek Salad',
        foodPrice: '$12.99',
        foodDescr: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, ' +
                    'garnished with crunchy garlic and rosemary croutons.'
    }, {
        img: bruchetta,
        imgAlt: 'Bruchetta',
        foodName: 'Bruchetta',
        foodPrice: '$5.99',
        foodDescr: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    }, {
        img: lemonDessert,
        imgAlt: 'Lemon Dessert',
        foodName: 'Lemon Dessert',
        foodPrice: '$5.00',
        foodDescr: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }]
    return (
        <main className="higthlights higthlightsFlex">
            <div className='row'>
                <div className='spec'>Specials</div>
                <Button caption='Online Menu' />
            </div>
            <div className='row rowFoodItems'>
                {foodItems.map(foodItem => 
                    <Fooditem img={foodItem.img} imgAlt={foodItem.imgAlt} foodName={foodItem.foodName} foodPrice={foodItem.foodPrice} foodDescr ={foodItem.foodDescr} />)}
            </div>
        </main>
    )
}

export default Higthlights