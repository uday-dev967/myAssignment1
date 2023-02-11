import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-height: 60vh;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  min-width: 500px;
  width: 600px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-self: center;
  justify-content: center;
`
export const FormButton = styled.button`
  margin-top: 20px;
  font-size: 20px;
  color: #ffffff;
  background-color: #42b0f5;
  background-image: linear-gradient(to right, #42b0f5, #8f61fa);
  border-radius: 5px;
  border-style: none;
  padding: 4px;
  height: 40px;
  width: 400px;
`

export const TextContainer = styled.div`
  border-bottom: 2px solid;
  padding-bottom: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 0px;
  border-color: gray;
  padding-left: 20px;
  padding-right: 20px;
`
export const Label = styled.label``

export const Input = styled.input`
  height: 40px;
  padding-left: 15px;
  border-radius: 3px;
  border-color: gray;
  width: 250px;
  margin: 10px;
`
export const TextArea = styled.textarea``

export const Errmsg = styled.p`
  color: red;
  padding-left: 10px;
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

export const Title = styled.h1`
  margin: 0px;
  font-size: 20px;
  font-weight: 400;
`

export const Tag = styled.p`
  margin: 0px;
`
