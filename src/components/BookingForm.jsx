// Källor:
// https://stackoverflow.com/questions/55331515/how-to-preventdefault-on-form-onsubmit-in-react-redux-project
// https://www.youtube.com/watch?v=uXk62ZgPH-4
// Källor för kalender
// https://www.npmjs.com/package/react-date-range
// https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/

import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/bookingform.css'
import '../css/calender.css'

import Calendar from 'react-calendar'
// Tillståndshantering med useContext
import BookingContext from '../BookingContext'

function Calender() {
  const { bookingInfo, setBookingInfo } = useContext(BookingContext)
  return (
    <>
      <Calendar
        onChange={setBookingInfo}
        value={bookingInfo}
        selectRange={true}
        minDate={new Date()}
      />
    </>
  )
}

function BookingForm() {
  const [showcalender, setShowcalender] = useState(false)
  const [showguest, setShowguest] = useState(false)
  const { setAdult, setChild } = useContext(BookingContext)
  // const { setChild} =useContext(BookingContext)

  return (
    <>
      <h2>Want to book the apartment? Check to see if it´s available!</h2>
      <div>
        <div className="containerbooking">
          <button
            className="containerform1"
            onClick={() => setShowcalender(!showcalender)}
          >
            <p>When</p>
          </button>
          <button
            className="containerform2"
            onClick={() => setShowguest(!showguest)}
          >
            Adult Children
          </button>
          <button>
            <Link to="/booking">Check availability</Link>
          </button>
        </div>
        <div className="gridpopups">
          <div className="calender">
            {showcalender && <Calender className="theCalender" />}
          </div>
          {showguest && (
            <div className="guests">
              <p>How many guests will be staying?</p>
              <label htmlFor="adult" min="1" max="8" />
              Adults:
              <input
                type="number"
                id="adult"
                onChange={(inputAdult) => {
                  setAdult(inputAdult.target.value)
                }}
              />
              <label htmlFor="child" />
              Children:
              <input
                type="number"
                id="child"
                onChange={(inputChild) => {
                  setChild(inputChild.target.value)
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BookingForm
