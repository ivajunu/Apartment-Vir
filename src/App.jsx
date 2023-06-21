import './App.css'
// import Header from './components/Header'
import Footer from './components/Footer'
import WeatherTemp from './components/WeatherTemp'
// router
import Sightseeing from './views/Sightseeing'
import Home from './views/Home'
import Pictures from './views/Pictures'
import Booking from './views/Booking'
import Contact from './views/Contact'
import Confirmation from './components/Confirmation'

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider
} from 'react-router-dom'

//useContext
import BookingContext from './BookingContext'
import { useState } from 'react'
import { number } from 'yup'
import Touristattraction from './components/touristattraction'
import Payment from './components/Payment'
import ConfirmationContact from './components/ConfirmationContact'

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: '/' },
        { element: <Sightseeing />, path: '/sightseeing' },
        { element: <Touristattraction />, path: '/sightseeing/:id' },
        { element: <Pictures />, path: '/pictures' },
        { element: <Contact />, path: '/contact' },
        { element: <Booking />, path: '/booking' },
        { element: <Payment />, path: '/payment' },
        { element: <Confirmation />, path: '/confirmation' },
        { element: <ConfirmationContact />, path: '/confirmationContact' }
      ],
      element: <Root />
    }
  ])
  return <RouterProvider router={router} />
}

function Root() {
  const [bookingInfo, setBookingInfo] = useState('')
  const [adult, setAdult] = useState(number)
  const [child, setChild] = useState(number)
  return (
    <>
      <BookingContext.Provider
        value={{
          bookingInfo,
          setBookingInfo,
          adult,
          setAdult,
          child,
          setChild
        }}
      >
        <div className="header">
          <div className="container">
            <div className="headerh1">
              <h1>
                <Link to="/">APARTMENT VIR</Link>
              </h1>
              <p className="headerP">
                In the heart of Croatia, just 2 minutes from the beach...
              </p>
            </div>
            <div className="weather">
              <WeatherTemp />
            </div>
          </div>

          <div className="navcontainer">
            <nav className="navbar">
              <ul className="navlist">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/booking">BOOKING</Link>
                </li>
                <li>
                  <Link to="/pictures">PICTURES</Link>
                </li>
                <li>
                  <Link to="/sightseeing">SIGHTSEEING</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <main>
          <Outlet />
        </main>
        <Footer />
      </BookingContext.Provider>
    </>
  )
}

export default App
