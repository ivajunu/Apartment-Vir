// // Källor:
// // https://formik.org/docs/tutorial
// // https://www.youtube.com/watch?v=7Ophfq0lEAY
// // https://stackoverflow.com/questions/70742216/react-js-react-router-dom-navigate-not-working
// // https://github.com/jquense/yup/issues/415

import { Formik } from 'formik'
import * as Yup from 'yup'
import Calendar from 'react-calendar'
import { useContext } from 'react'
import '../css/booking.css'

// Tillståndshantering med useContext
import BookingContext from '../BookingContext'
import { useNavigate } from 'react-router-dom'

import {
  Styledh1,
  Pordinary,
  Fields,
  Labels,
  Forms,
  Buttons,
  ErrorMessageS
} from '../components/Components.Styles'

function Booking() {
  const { bookingInfo, setBookingInfo } = useContext(BookingContext)
  const { adult, setAdult } = useContext(BookingContext)
  const { child, setChild } = useContext(BookingContext)
  const navigate = useNavigate()
  return (
    <>
      <Styledh1 className="headlinebooking">
        Want to book the apartment?
      </Styledh1>
      <Pordinary>
        Planning your next stay? Look no further! Experience the ultimate
        comfort and convenience by booking one of our exceptional apartments.
        Our carefully curated selection offers a home-away-from-home atmosphere,
        ensuring a memorable and enjoyable stay.{' '}
      </Pordinary>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          birthdate: '',
          adress: '',
          city: '',
          postcode: '',
          email: '',
          phone: '',
          arrival: '',
          timeperiod: bookingInfo,
          adults: String(adult),
          kids: String(child),
          termsandconditions: false
        }}
        validationSchema={Yup.object({
          firstname: Yup.string('Must be letters').required('Required'),
          lastname: Yup.string('Must be letters').required('Required'),
          birthdate: Yup.number()
            .min(6)
            .integer()
            .required('Required')
            .typeError('Must be 6 numbers'),
          adress: Yup.string().required('Required'),
          city: Yup.string().required('Required'),
          postcode: Yup.number()
            .min(5)
            .integer()
            .required('Required')
            .typeError('Must be 5 numbers'),
          email: Yup.string()
            .email('Please enter a valid email.')
            .required('Required'),
          phone: Yup.number()
            .min(8)
            .integer()
            .required('Required')
            .typeError('Must be at least 8 numbers'),
          // adults: Yup.number()
          //   .integer()
          //   .min(1)
          //   .required('Required')
          //   .typeError('Must be a number'),
          // kids: Yup.number('Must be a number')
          //   .integer()
          //   .required('Required')
          //   .min(0)
          //   .typeError('Must be a number'),
          //Dessa två värdena valideras inte vad jag än gör
          termsandconditions: Yup.bool(true).oneOf(
            [true],
            'You must accept the terms and conditions'
          )
        })}
        onSubmit={() => {
          navigate('/payment')
        }}
        validateOnChange={true}
      >
        <Forms className="completebookingform">
          <Labels>
            Firstname:
            <Fields type="text" name="firstname" />
            <ErrorMessageS
              className="errormessage"
              component="div"
              name="firstname"
            />
          </Labels>
          <Labels>
            Lastname:
            <Fields type="text" name="lastname" />
            <ErrorMessageS
              className="errormessage"
              component="div"
              name="lastname"
            />
          </Labels>
          <Labels>
            Birth Date:
            <Fields type="text" name="birthdate" />
            <ErrorMessageS
              className="errormessage"
              component="div"
              name="birthdate"
            ></ErrorMessageS>
          </Labels>
          <Labels>
            Adress:
            <Fields type="text" name="adress" />
            <ErrorMessageS
              className="errormessage"
              component="div"
              name="adress"
            />
          </Labels>
          <Labels>
            City:
            <Fields type="text" name="city" />
            <ErrorMessageS
              className="errormessage"
              component="div"
              name="city"
            />
          </Labels>
          <Labels>
            Postcode:
            <Fields type="text" name="postcode" />
            <ErrorMessageS
              className="errormessage"
              component="div"
              name="postcode"
            />
          </Labels>
          <Labels>
            Email:
            <Fields type="email" name="email" />
            <ErrorMessageS
              className="errormessage"
              component="div"
              name="email"
            />
          </Labels>
          <Labels>
            Phone number:
            <Fields type="text" name="phone" />
            <ErrorMessageS
              className="errormessage"
              component="div"
              name="phone"
            />
          </Labels>
          {/* kalendern är här nere */}
          <Labels>
            Arrival:
            <Calendar
              onChange={setBookingInfo}
              value={bookingInfo}
              selectRange={true}
              minDate={new Date()}
            />
          </Labels>
          <Labels>
            Number of adults:
            <Fields
              type="number"
              name="adults"
              value={adult}
              onChange={(inputAdult) => {
                setAdult(inputAdult.target.value)
              }}
            />
            <ErrorMessageS
              className="errormessage"
              component="div"
              name="adults"
            />
          </Labels>
          <Labels>
            Number of kids:
            <Fields
              type="number"
              name="kids"
              value={child}
              onChange={(inputChild) => {
                setChild(inputChild.target.value)
              }}
            />
            <ErrorMessageS
              className="errormessage"
              component="div"
              name="kids"
            />
          </Labels>
          <Labels style={{ width: '400px' }}>
            I understand that my data is only used for the sake of booking this
            apartment and will be deleted whitin a year:
            <Fields type="checkbox" id="terms" name="termsandconditions" />
            <ErrorMessageS
              className="errormessage"
              component="div"
              name="termsandconditions"
            />
          </Labels>
          <Buttons type="submit">
            Continue to payment
            <img
              style={{ width: '40px', height: '40px' }}
              src="../src/assets/icons/rightarrow2.png"
              alt=""
            />
          </Buttons>
        </Forms>
      </Formik>
    </>
  )
}

export default Booking
