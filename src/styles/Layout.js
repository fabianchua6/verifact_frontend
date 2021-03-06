import styled from 'styled-components'
import { Form } from 'react-bootstrap'

export const PageWrap = styled.div`
  padding: 0 16.6rem;

  @media (max-width: 767px) {
    padding: 0 2rem;
    margin: 0;
  }
`
export const FormWrap = styled.div`
  width: 50%;
  margin: 45px auto;
  background: #EEF0F2;
  border-radius: 20px;
  padding: 50px;
  font-weight: 600;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  height: 450px;

  @media only screen and (max-width: 1199px){
    width: 75%;
  }

  @media only screen and (max-width: 767px){
    width: 96%;
  }
  
`
export const FormControl = styled(Form.Control)`
  height: 45px;
  background: #FFFFFF !important;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 15px;
  font-family: 'Open Sans', sans-serif;
  color: #464646;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
`
