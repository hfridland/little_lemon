import './BookingPage.css'
import { useState } from "react";
import BookingForm from './bookingForm/BookingForm'

function BookingPage(props) {

    const [data, setData] = useState({
        date: props.curDate,
        time: '17:00',
        guestsNum: 1,
        occasion: 'Birthday'
    })

    return (
        <section className='bookingPage'>
            <BookingForm data={data} setData={setData} availableTimes={props.availableTimes} dispatch={props.dispatch} submitAPI={props.submitAPI} />
        </section>
    )
}

export default BookingPage