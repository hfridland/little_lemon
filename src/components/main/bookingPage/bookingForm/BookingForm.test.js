import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';
import { fetchAPI } from '../../../../api';
import { BrowserRouter } from 'react-router-dom';
import Main from '../../../../Main';
import BookingForm from './BookingForm';
import { act } from 'react-dom/test-utils';
import { formatDate } from '../../../../utils/formatDate';

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

test('Validate return initializeTimes', async () => {
    render(
        <BrowserRouter>
            <Main isBooking={true} />
        </BrowserRouter>
    )
    await waitFor(() => expect(screen.getByTestId("time")).toBeInTheDocument())
    const selResTimes = screen.getByTestId("time")
    await waitFor(() => expect(selResTimes.children.length).toBeGreaterThan(0))

    const screenArray = []
    for (let opt of selResTimes.children) {
        screenArray.push(opt.text)
    }

    const sDate = formatDate(new Date())
    fetchAPI(new Date(sDate))
        .then(response => JSON.parse(response))
        .then(fncArray => {
            expect(fncArray).toEqual(screenArray)
        })
})

test('Validate return updateTimes', async () => {
    const nextDate = formatDate(new Date(new Date().getTime() + 10 * 24 * 60 * 60 *1000))

    render(
        <BrowserRouter>
            <Main isBooking={true} />
        </BrowserRouter>
    )
    await waitFor(() => expect(screen.getByTestId("date")).toBeInTheDocument())

    const resDate = screen.getByTestId("date")
    fireEvent.change(resDate, {target: {value: nextDate}})

    const selResTimes = screen.getByTestId("time")
    await waitFor(() => expect(selResTimes.children.length).toBeGreaterThan(0))

    const screenArray = []
    for (let opt of selResTimes.children) {
        screenArray.push(opt.text)
    }

    fetchAPI(new Date(nextDate))
        .then(response => JSON.parse(response))
        .then(async fncArray => {
            expect(fncArray).toEqual(screenArray)
        })
})

test('Validate date field test', async () => {
    const testWrongValue = async (valDays, errMsg) => {
        const date = valDays != null ? formatDate(new Date(new Date().getTime() - valDays * 24 *60 * 60 * 1000)) : null
        act(() => {
            fireEvent.change(dateFld, {target: {value: date}})
            fireEvent.blur(dateFld)
        })
        expect(dateFld).toHaveValue(date)

        await wait(() => {
            expect(getByTestId("dateError")).not.toBe(null)
            expect(getByTestId("dateError")).toHaveTextContent(errMsg)
            expect(getByTestId('btnSubmit')).toBeDisabled()
        })
    }
    const testRightValue = async (valDays) => {
        const date = formatDate(new Date(new Date().getTime() + valDays * 24 *60 * 60 * 1000))
        act(() => {
            fireEvent.change(dateFld, {target: {value: date}})
        })
        expect(dateFld).toHaveValue(date)
        await wait(() => {
            expect(getByTestId("dateError")).toBe(null)
            expect(getByTestId('btnSubmit')).not.toBeDisabled()
        })
    }

    render(
        <BrowserRouter>
            <Main isBooking={true} />
        </BrowserRouter>
    )
    await waitFor(() => expect(screen.getByTestId("time")).toBeInTheDocument())
    const selResTimes = screen.getByTestId("time")
    await waitFor(() => expect(selResTimes.children.length).toBeGreaterThan(0))

    const dateFld = screen.getByTestId("date")

    testRightValue(0)
    testRightValue(5)

    testWrongValue('', 'Required')
    testWrongValue(-1, 'Date passed')
    testWrongValue(-5, 'Date passed')
})

test('Validate guests number field test', async () => {
    const testWrongValue = async (val, errMsg) => {
        act(() => {
            fireEvent.change(guests, {target: {value: val}})
            fireEvent.blur(guests)
        })
        expect(guests).toHaveValue(val)

        await wait(() => {
            expect(getByTestId("guestsError")).not.toBe(null)
            expect(getByTestId("guestsError")).toHaveTextContent(errMsg)
            expect(getByTestId('btnSubmit')).toBeDisabled()
        })
    }
    const testRightValue = async (val) => {
        act(() => {
            fireEvent.change(guests, {target: {value: val}})
        })
        expect(guests).toHaveValue(val)
        await wait(() => {
            expect(getByTestId("guestsError")).toBe(null)
            expect(getByTestId('btnSubmit')).not.toBeDisabled()
        })
    }

    render(
        <BrowserRouter>
            <Main isBooking={true} />
        </BrowserRouter>
    )
    await waitFor(() => expect(screen.getByTestId("time")).toBeInTheDocument())
    const selResTimes = screen.getByTestId("time")
    await waitFor(() => expect(selResTimes.children.length).toBeGreaterThan(0))

    const guests = screen.getByTestId("guests")

    testRightValue(1)
    testRightValue(5)
    testRightValue(10)

    testWrongValue(0, "Guests number must be between 1 and 10")
    testWrongValue(11, "Guests number must be between 1 and 10")
    testWrongValue(null, "Required")
})