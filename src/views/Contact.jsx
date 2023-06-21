import ContactForm from '../components/ContactForm'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import {
  Styledh1,
  Styledh2,
  Fields,
  Labels,
  Forms,
  Buttons,
  ErrorMessageS
} from '../components/Components.Styles'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [showforms, setShowforms] = useState(false)

  function showform() {
    setShowforms(true)
  }

  return (
    <>
      <Styledh1>Want to get in contact with us?</Styledh1>
      <div style={{ display: showforms ? 'none' : 'block' }}>
        <Styledh2>Please enter your name, and email!</Styledh2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            textarea: ''
          }}
          validationSchema={Yup.object({
            name: Yup.string('Must be letters').required('Required'),
            email: Yup.string()
              .email('Please enter a valid email.')
              .required('Required')
          })}
        >
          <Forms onSubmit={(event) => event.preventDefault()}>
            <Labels>
              Name:
              <Fields
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <ErrorMessageS component="div" name="name" />
            </Labels>
            <Labels>
              Email:
              <Fields
                name="email"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <ErrorMessageS component="div" name="email" />
            </Labels>
            <Buttons onClick={showform}>
              Continue
              <img
                style={{ width: '40px', height: '40px' }}
                src="../src/assets/icons/rightarrow2.png"
                alt=""
              />
            </Buttons>
          </Forms>
        </Formik>
      </div>
      {showforms ? <ContactForm name={name} email={email} /> : null}
    </>
  )
}

Contact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string
}

export default Contact

// En komponent som skickar prop från denna sidan till en komponent med formulär som sätter namn???
