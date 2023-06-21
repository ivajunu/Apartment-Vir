import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  Styledh2,
  Pordinary,
  Fields,
  Labels,
  Forms,
  Buttons,
  ErrorMessageS
} from '../components/Components.Styles'

function ContactForm({ name, email }) {
  const navigate = useNavigate()
  return (
    <>
      <Styledh2>Contact us at any time!</Styledh2>
      <Pordinary>
        Have a question or need assistance booking the apartment? Fill out the
        form below, and we´ll get back to you soon. If you have any questions or
        need further information about our apartments, amenities, or
        availability, please don´t hesitate to ask. Rest assured that your
        privacy is important to us. Any information you provide will be treated
        confidentially and used solely for the purpose of assisting you with
        your booking. We appreciate your interest and look forward to assisting
        you with your apartment booking.
      </Pordinary>
      <Formik
        initialValues={{
          name: name,
          email: email,
          textarea: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string('Must be letters').required('Required'),
          email: Yup.string()
            .email('Please enter a valid email.')
            .required('Required'),
          textarea: Yup.string('Must be letters').required('Required')
        })}
        onSubmit={() => {
          navigate('/confirmationContact')
        }}
      >
        <Forms>
          <Labels>
            Name:
            <Fields type="text" name="name" />
            <ErrorMessageS component="div" name="name" />
          </Labels>
          <Labels>
            Email:
            <Fields type="text" name="email" />
            <ErrorMessageS component="div" name="email" />
          </Labels>
          <Labels>
            Enter your message here:
            <Field
              as="textarea"
              style={{
                backgroundColor: 'rgb(141, 197, 243)'
              }}
              name="textarea"
              cols="50"
              rows="10"
            />
            <ErrorMessageS component="div" name="textarea" />
          </Labels>
          <Buttons type="submit">
            Send message
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

ContactForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string
}

export default ContactForm
