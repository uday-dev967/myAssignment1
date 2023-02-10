import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-height: 60vh;
  justify-content: space-between;
  width: 60%;
  border-style: solid;
  border-radius: 10px;
  align-items: center;
  padding: 50px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%;
`
export const FormButton = styled.button`
  margin-top: 20px;
  font-size: 20px;
  color: #ffffff;
  background-color: #021357;
  border-radius: 5px;
  border-style: none;
  padding: 4px;
`

export const TextContainer = styled.div`
  border-right: 2px solid;
  height: 70%;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Label = styled.label``

export const Input = styled.input`
  height: 40px;
  padding-left: 15px;
  border-radius: 3px;
  border-color: gray;
`
export const Star = styled.span`
  color: red;
`
export const Errmsg = styled.p`
  color: red;
`
export const SucessMsg = styled.p`
  color: green;
`
export const SuccessContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
`
