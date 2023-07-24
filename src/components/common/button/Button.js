import './Button.css'

function Button(props) {
    return (
        <div className='highlightsButton'>
            <p>{props.caption}</p>
        </div>
    )
}

export default Button