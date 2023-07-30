import Icon from 'awesome-react-icons/lib/cjs/Icon'

function Testimonial(props) {
    return (
        <div className="testimonial">
            <div className="row rate">
                {Array.from(Array(props.rate).keys()).map(() =>
                    <Icon
                        name="star"
                        size='30'
                        style={{color: '#F4CE14', fill: '#F4CE14'}}
                        className='star' />)
                }
            </div>
            <div className="row person">
                <img src={props.image} alt={props.name + 'image'} width={300} />
                <span>{props.name}</span>
            </div>
            <div className="row text">{props.text}</div>
        </div>
    )
}

export default Testimonial