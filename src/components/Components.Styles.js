// Källa
// https://www.youtube.com/watch?v=-FZzPHSLauc
// https://stackoverflow.com/questions/58658901/styled-components-putting-styling-in-a-separate-file-and-import-it-in-to-compo

import styled from 'styled-components'
import { Field, Form, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'

export const Styledh1 = styled.h1`
  text-align: center;
  font-size: 32px;
  margin-top: 70px;
`

export const Styledh2 = styled.h2`
  font-size: 20px;
  margin-top: 70px;
`

export const Pordinary = styled.p`
  text-align: center;
  font-size: 20px;
`
export const ErrorMessageS = styled(ErrorMessage)`
  color: rgb(221, 40, 40);
  text-decoration: underline;
`
export const CaroselDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Forms = styled(Form)`
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Fields = styled(Field)`
  border-radius: 5px;
  width: 300px;
  background-color: rgb(141, 197, 243);
  box-shadow: rgba(141, 197, 243, 0.25) 0px 2px 5px -1px;
  color: #182c6d;
  font-weight: 800;
  font-size: 16px;
  border: none;
  font-size: inherit;
  margin: 10px;
`
export const Labels = styled.label`
  font-size: 18px;
  font-weight: 700;
  margin: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const Buttons = styled.button`
  background-color: rgb(141, 197, 243);
  border-radius: 10px;
  box-shadow: rgb(141, 197, 243, 0.25) 0px 2px 5px -1px;
  border: 2px solid rgb(27, 145, 243);
  color: #182c6d;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: rgb(199, 223, 243);
  }
`

export const Input = styled.input`
  border-radius: 5px;
  width: 300px;
  background-color: rgb(141, 197, 243);
  box-shadow: rgba(141, 197, 243, 0.25) 0px 2px 5px -1px;
  color: #182c6d;
  font-weight: 800;
  font-size: 16px;
  border: none;
  font-size: inherit;
  margin: 10px;
`
export const LinkS = styled(Link)`
  text-decoration: none;
  color: #182c6d;
  &:hover {
    background-color: rgb(199, 223, 243);
  }
  &:visited {
    color: #182c6d;
  }
`
