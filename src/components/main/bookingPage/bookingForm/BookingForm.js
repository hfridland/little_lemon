import { useFormik } from 'formik';
import { formatDate } from '../../../../utils/formatDate'

const validate = values => {
    const errors = {}
    if (!values.date) {
        errors.date = 'Required'
    } else {
        const date = new Date(values.date)
        const today = new Date(formatDate(new Date()))
        if (date < today) {
            errors.date = 'Date passed'
        }
    }
    if (!values.guests) {
        errors.guests = 'Required'
    } else if (values.guests < 1 || values.guests > 10) {
        errors.guests = "Guests number must be between 1 and 10"
    }
    return errors
}


function BookingForm(props) {
    const setDate = (e) => {
        formik.handleChange('date')(e)
        props.clearAvailableTimes()
        props.setCurDate(e.target.value)
    }

    const formik = useFormik({
        initialValues: {
            date: formatDate(new Date()),
            time: '17:00',
            guests: 1,
            occasion: 'Birthday'
        },
        validate,
        onSubmit: values => {
            props.submitForm(values)
        },
      });

    return (
        <form className='bookingForm' onSubmit={formik.handleSubmit}>
            <div className='title'>Book Now</div>
            <div>
                <label htmlFor="date" className='subTitle'>Choose date</label>
                <input
                    id="date"
                    name='date'
                    type="date"
                    data-testid='date'
                    onChange={setDate}
                    onBlur={formik.handleBlur}
                    value={formik.values.date}  />
                    {formik.errors.date ? <div data-testid='dateError' className='text error'>{formik.errors.date}</div> : null}
            </div>
            <div>
                <label htmlFor="time" className='subTitle'>Choose time</label>
                <select
                    id="time"
                    name='time'
                    data-testid='time'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.time} >
                    {props.availableTimes.map((time, ind) => <option key={ind}>{time}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="guests" className='subTitle'>Number of guests</label>
                <input
                    id="guests"
                    name="guests"
                    data-testid='guests'
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.guests} />
                {formik.errors.guests ? <div data-testid='guestsError' className='text error'>{formik.errors.guests}</div> : null}
            </div>
            <div>
                <label htmlFor="occasion" className='subTitle'>Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.occasion} >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <button aria-label="Submit" type="submit" data-testid='btnSubmit' disabled={Object.keys(formik.errors).length > 0} >
                Make Your Reservation
            </button>
        </form>
    )
}

export default BookingForm
