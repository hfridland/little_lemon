import { fetchAPI, submitAPI as submitAPIScript } from '../src/api'
import { Route, Routes, useNavigate } from "react-router-dom"
import { useReducer, useEffect, useState } from "react";
import Hero from './components/main/hero/Hero';
import About from './components/main/about/About';
import Higthlights from './components/main/higthlights/Higthlights';
import BookingPage from './components/main/bookingPage/BookingPage';
import ConfirmedBooking from "./components/main/bookingPage/confirmedBooking/ConfirmedBooking";

function Main(props) {
    const navigate = useNavigate()
    const [confirm, setConfirm] = useState(false)

    const submitAPI = formData => {
        if (submitAPIScript(formData)) {
            setConfirm(true)
        }
    }

    useEffect(() => {
        if (confirm) {
            navigate('/confirmedBooking')
            setConfirm(false)
        }
    }, [confirm])

    useEffect(() => {
        if (props.isBooking) {
            navigate('/booking')
        }
    }, [props.isBooking])

    const reducer = (state, action) => {
        switch (action.type) {
            case 'initializeTimes':
                const sDate = new Date().toISOString().split('T')[0]
                return fetchAPI(new Date(sDate))
            case 'updateTimes':
                const date = new Date(action.date)
                const ret = fetchAPI(date)
                return ret
            default:
                return state
        }
    }

    const [availableTimes, dispatch] = useReducer(reducer, [])
    const [curDate, setCurDate] = useState(new Date().toISOString().split('T')[0])

    useEffect(() => {
        dispatch({type: 'initializeTimes'})
    }, [])

    return (
        <Routes>
          <Route path="/" element={<Hero/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/menu" element={<Higthlights/>}></Route>
          <Route path="/booking" element={<BookingPage submitAPI={submitAPI} 
            availableTimes={availableTimes} dispatch={dispatch} curDate={curDate} />}></Route>
          <Route path="/confirmedBooking" element={<ConfirmedBooking />}></Route>
        </Routes>
    )
}

export default Main