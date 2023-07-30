import { fetchAPI, submitAPI } from "./api";
import { Route, Routes, useNavigate } from "react-router-dom"
import { useReducer, useEffect, useState } from "react";
import Hero from './components/main/hero/Hero';
import About from './components/main/about/About';
import Higthlights from './components/main/higthlights/Higthlights';
import BookingPage from './components/main/bookingPage/BookingPage';
import ConfirmedBooking from "./components/main/bookingPage/confirmedBooking/ConfirmedBooking";
import Testimonials from "./components/main/testimonials/Testimonials";
import { formatDate } from "./utils/formatDate";

function Main(props) {
    const navigate = useNavigate()
    const [resData, setResData] = useState({
        date: props.curDate,
        time: '17:00',
        guestsNum: 1,
        occasion: 'Birthday'
    })
    const [toSubmit, setToSubmit] = useState(false)

    useEffect(() => {
        if (toSubmit) {
            submitAPI(resData)
                .then(response => JSON.parse(response))
                .then(toSubmit => {
                    if (toSubmit) {
                        navigate('/confirmedBooking')
                        setToSubmit(false)
                    }
                })
        }
    }, [toSubmit])

    const submitForm = resData => {
        setResData(resData)
        setToSubmit(true)
    }

    useEffect(() => {
        if (props.isBooking) {
            navigate('/booking')
        }
    }, [props.isBooking])

    const reducer = (state, action) => {
        switch (action.type) {
            case 'initializeTimes':
            case 'updateTimes':
                return action.availableTimes
            case 'clear':
                return []
            default:
                return state
        }
    }

    const [availableTimes, dispatch] = useReducer(reducer, [])
    const [curDate, setCurDate] = useState(formatDate(new Date()))

    const clearAvailableTimes = () => {
        dispatch({type: 'clear'})
    }

    useEffect(() => {
        const sDate = formatDate(new Date())
        fetchAPI(new Date(sDate))
            .then(response => JSON.parse(response))
            .then(availableTimes => dispatch({type: 'initializeTimes', availableTimes: availableTimes}))
    }, [])

    useEffect(() => {
        fetchAPI(new Date(curDate))
            .then(response => JSON.parse(response))
            .then(availableTimes => dispatch({type: 'updateTimes', availableTimes: availableTimes}))
    }, [curDate])

    return (
        <main>
            <Routes>
                <Route path="/" element={<Hero/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/menu" element={<Higthlights/>}></Route>
                <Route path="/booking" element={<BookingPage
                                                    availableTimes={availableTimes}
                                                    setCurDate={setCurDate}
                                                    submitForm={submitForm}
                                                    clearAvailableTimes={clearAvailableTimes} />}></Route>
                <Route path="/confirmedBooking" element={<ConfirmedBooking data={resData}/>}></Route>
                <Route path="/testimonials" element={<Testimonials />}></Route>
            </Routes>
        </main>
    )
}

export default Main