import './Button.css'

function Button(props) {
    return (
        <div data-testid='btnRes' className='highlightsButton'>
            <p>{props.caption}</p>
        </div>
    )
}

export default Button