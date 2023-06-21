import { Field, Formik, Form } from 'formik'
import styled from 'styled-components'

import {
  Styledh1,
  Pordinary,
  Labels,
  Input,
  Buttons,
  LinkS
} from '../components/Components.Styles'

const DivElement = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
`
// const Select = styled.select``

function Payment() {
  return (
    <>
      <Formik
        initialValues={{
          paymentgroup: 'credit'
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ values }) => {
          return (
            <Form>
              <DivElement>
                <h1>Payment</h1>
                <Labels htmlFor="paymentgroup">Choose form of paying:</Labels>
                <Field as="select" name="paymentgroup">
                  <option value="credit">Credit</option>
                  <option value="debitCard">Debit Card</option>
                  <option value="banknames">Bank Transfer</option>
                  <option value="klarna">Klarna</option>
                  <option value="swish">Swish</option>
                </Field>
              </DivElement>

              {values.paymentgroup === 'credit' && (
                <DivElement style={{ paddingTop: '20px' }}>
                  <h1>Credit Card</h1>
                  <Pordinary>Your total will be 1000kr</Pordinary>
                  <Labels htmlFor="name">
                    Please enter your name on the card:
                    <Input type="text" id="name" />
                  </Labels>
                  <Labels htmlFor="cardnumber">
                    Please enter your card number:
                    <Input type="text" id="cardnumber" />
                  </Labels>
                  <Labels htmlFor="threenumbers">
                    Please enter your 3 numbers:
                    <Input type="text" id="threenumbers" />
                  </Labels>
                  <Buttons type="submit">
                    <LinkS to="/confirmation">Pay now</LinkS>
                    <img
                      style={{ width: '40px', height: '40px' }}
                      src="../src/assets/icons/rightarrow2.png"
                      alt=""
                    />
                  </Buttons>
                </DivElement>
              )}
              {values.paymentgroup === 'debitCard' && (
                <DivElement>
                  <Styledh1>Debit Card</Styledh1>
                  <Pordinary>Your total will be 1000kr</Pordinary>
                  <Labels htmlFor="name">
                    Please enter your name on the card:
                    <Input type="text" id="name" />
                  </Labels>
                  <Labels htmlFor="cardnumber">
                    Please enter your card number:
                    <Input type="text" id="cardnumber" />
                  </Labels>
                  <Labels htmlFor="threenumbers">
                    Please enter your 3 numbers:
                    <Input type="text" id="threenumbers" />
                  </Labels>
                  <Buttons type="submit">
                    <LinkS to="/confirmation">Pay now</LinkS>
                    <img
                      style={{ width: '40px', height: '40px' }}
                      src="../src/assets/icons/rightarrow2.png"
                      alt=""
                    />
                  </Buttons>
                </DivElement>
              )}

              {values.paymentgroup === 'banknames' && (
                <DivElement>
                  <Styledh1>Bank Transfer</Styledh1>
                  <p>Your total will be 1000kr</p>
                  <Labels htmlFor="name">
                    Please enter your name:
                    <Input type="text" id="name" />
                  </Labels>
                  <Labels htmlFor="bankname">
                    Please enter your Bank name:
                    <Input type="text" id="bankname" />
                  </Labels>
                  <Labels htmlFor="accountnr">
                    Please enter Account number:
                    <Input type="text" id="accountnr" />
                  </Labels>
                  <Buttons type="submit">
                    <LinkS to="/confirmation">Pay now</LinkS>
                    <img
                      style={{ width: '40px', height: '40px' }}
                      src="../src/assets/icons/rightarrow2.png"
                      alt=""
                    />
                  </Buttons>
                </DivElement>
              )}
              {values.paymentgroup === 'klarna' && (
                <DivElement>
                  <Styledh1>Klarna</Styledh1>
                  <p>Your total will be 1000kr</p>
                  <Labels htmlFor="birthdate">
                    Please enter your birth date:
                    <Input type="text" id="birthdate" />
                  </Labels>
                  <Labels htmlFor="email">
                    Please enter your email:
                    <Input type="text" id="email" />
                  </Labels>
                  <Buttons type="submit">
                    <LinkS to="/confirmation">Pay now</LinkS>
                    <img
                      style={{ width: '40px', height: '40px' }}
                      src="../src/assets/icons/rightarrow2.png"
                      alt=""
                    />
                  </Buttons>
                </DivElement>
              )}
              {values.paymentgroup === 'swish' && (
                <DivElement>
                  <Styledh1>Swish</Styledh1>
                  <p>Your total will be 1000kr</p>
                  <Labels htmlFor="phone">
                    Please enter your phone number:
                    <Input type="text" id="phone" />
                  </Labels>
                  <Buttons type="submit">
                    <LinkS to="/confirmation">Pay now</LinkS>
                    <img
                      style={{ width: '40px', height: '40px' }}
                      src="../src/assets/icons/rightarrow2.png"
                      alt=""
                    />
                  </Buttons>
                </DivElement>
              )}
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
export default Payment
