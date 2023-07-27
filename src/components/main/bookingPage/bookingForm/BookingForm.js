import './BookingForm.css'

function BookingForm(props) {
    const setDate = date => {
        props.setData({...props.data, date})
        props.dispatch({type: 'updateTimes', date: date})
    }

    const setTime = time => props.setData({...props.data, time})

    const setGuestsNum = guestsNum => props.setData({...props.data, guestsNum})

    const setOccasion = occasion => props.setData({...props.data, occasion})

    const clearForm = () => props.setData({
        date: '',
        time: '17:00',
        guestsNum: 1,
        occasion: 'Birthday'
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.submitAPI(props.data)
        clearForm()
    }

    return (
        <form className='bookingForm' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" data-testid='resDate' value={props.data.date} onChange={e => setDate(e.target.value)} />
            </div>
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" data-testid='resTimes' value={props.data.time} onChange={e => setTime(e.target.value)} >
                    {props.availableTimes.map((time, ind) => <option key={ind}>{time}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={props.data.guestsNum}
                    onChange={e => setGuestsNum(e.target.value)} />
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={props.data.occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input type="submit" value="Book Now" />
        </form>
    )
}

export default BookingForm
