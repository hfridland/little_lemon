import './Fooditem.css'

function Fooditem(props) {
    return (
        <div className='fooditem'>
            <img src={props.img} alt={props.imgAlt} width={215}/>
            <div className='text'>
                <div className='header'>
                    <span className='hdrText'>{props.foodName}</span>
                    <span className='price'>{props.foodPrice}</span>
                </div>
                <div className='descr'>
                    {props.foodDescr}
                </div>
                <a href='' className='orderDelivery'>Order a delivery</a>
            </div>
        </div>
    )
}

export default Fooditem