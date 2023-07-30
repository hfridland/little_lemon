import BookingForm from './bookingForm/BookingForm'

function BookingPage(props) {

    return (
        <section className='bookingPage'>
            <BookingForm
                availableTimes={props.availableTimes}
                setCurDate={props.setCurDate}
                clearAvailableTimes={props.clearAvailableTimes}
                submitForm={props.submitForm} />
        </section>
    )
}

export default BookingPage

