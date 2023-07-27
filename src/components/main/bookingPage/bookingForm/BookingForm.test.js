import { render, screen, fireEvent } from '@testing-library/react';
import { fetchAPI } from '../../../../api';
import { BrowserRouter } from 'react-router-dom';
import Main from '../../../../Main';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    const data = {
        date: '',
        time: '17:00',
        guestsNum: 1,
        occasion: 'Birthday'
    }
    const availableTimes = ['17:00', '18:00']
    const setData = newData => newData = data

    render(<BookingForm data={data} setData={setData} availableTimes={availableTimes}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Validate return initializeTimes', () => {
    render(
        <BrowserRouter>
            <Main isBooking={true} />
        </BrowserRouter>
    )

    const selResTimes = screen.getByTestId("resTimes")
    const screenArray = []
    for (let opt of selResTimes.children) {
        screenArray.push(opt.text)
    }

    const sDate = new Date().toISOString().split('T')[0]
    const fncArray = fetchAPI(new Date(sDate))

    expect(screenArray).toEqual(fncArray)
})

test('Validate return updateTimes', () => {
    const nextDate = new Date(new Date().getTime() + 10 * 24 *60 * 60 *1000).toISOString().split('T')[0]

    render(
        <BrowserRouter>
            <Main isBooking={true} />
        </BrowserRouter>
    )

    const resDate = screen.getByTestId("resDate")
    fireEvent.change(resDate, {target: {value: nextDate}})

    const selResTimes = screen.getByTestId("resTimes")
    const screenArray = []
    for (let opt of selResTimes.children) {
        screenArray.push(opt.text)
    }
    const fncArray = fetchAPI(new Date(nextDate))

    expect(screenArray).toEqual(fncArray)
})