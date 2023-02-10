import {Component} from 'react'
import {
  MainContainer,
  FormContainer,
  FormButton,
  TextContainer,
  Label,
  Input,
  Star,
  Errmsg,
  SucessMsg,
  SuccessContainer,
} from './styledComponents'

class Form extends Component {
  state = {
    fullName: '',
    email: '',
    mobile: '',
    nameErrmsg: false,
    emailErrmsg: false,
    mobileErrmsg: false,
    finalErr: false,
    errmsg: '',
    showSuccess: false,
  }

  onClickRegister = event => {
    event.preventDefault()
    const {fullName, email, mobile} = this.state
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const phone = mobile.split('')
    const isValidEmail1 = email.includes('@') && email.includes('.com')
    const domianIndex = email.lastIndexOf('@')
    const domainEndIndex = email.lastIndexOf('.com')
    const domainName = email.slice(domianIndex, domainEndIndex)
    const isValidEmail2 = domainName.length > 1
    const isValidPhoneNum = phone.every(each => num.includes(parseInt(each)))
    if (fullName === '') {
      this.onHandleNameBlur(event)
    }
    if (email === '') {
      this.onHandleEmailBlur(event)
    }
    if (mobile === '') {
      this.onHandleMobileBlur(event)
    }

    if (isValidEmail1 && isValidEmail2) {
      if (phone.length === 10 && isValidPhoneNum) {
        this.setState({finalErr: false, errmsg: '', showSuccess: true})
      } else {
        this.setState({
          finalErr: true,
          errmsg: '*Please enter a valid 10 digit mobile number',
        })
      }
    } else {
      this.setState({
        finalErr: true,
        errmsg: '*Please enter a valid email address ex: abc@xyz.com',
      })
    }
  }

  onChangeName = event => {
    this.setState({fullName: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangeMobile = event => {
    const phone = event.target.value
    if (phone.length <= 10) {
      this.setState({mobile: phone})
    }
  }

  onHandleNameBlur = () => {
    const {fullName} = this.state
    if (fullName === '') {
      this.setState({nameErrmsg: true})
    } else {
      this.setState({nameErrmsg: false})
    }
  }

  onHandleEmailBlur = () => {
    const {email} = this.state
    if (email === '') {
      this.setState({emailErrmsg: true})
    } else {
      this.setState({emailErrmsg: false})
    }
  }

  onHandleMobileBlur = () => {
    const {mobile} = this.state
    if (mobile === '') {
      this.setState({mobileErrmsg: true})
    } else {
      this.setState({mobileErrmsg: false})
    }
  }

  onClickNewRegistration = () => {
    this.setState({
      fullName: '',
      email: '',
      mobile: '',
      nameErrmsg: false,
      emailErrmsg: false,
      mobileErrmsg: false,
      finalErr: false,
      errmsg: '',
      showSuccess: false,
    })
  }

  onSuccessfulRegistration = () => (
    <SuccessContainer>
      <SucessMsg>
        YOUR RESPONSE IS SAVED WE WILL GET BACK TO YOU SHORTLY
      </SucessMsg>
      <FormButton type="button" onClick={this.onClickNewRegistration}>
        NEW REGISTRATION
      </FormButton>
    </SuccessContainer>
  )

  render() {
    const {
      fullName,
      email,
      mobile,
      nameErrmsg,
      mobileErrmsg,
      emailErrmsg,
      finalErr,
      errmsg,
      showSuccess,
    } = this.state
    return (
      <>
        <MainContainer>
          <TextContainer>
            <h1>GET IN TOUCH</h1>
            <p>Please complete the form we will get back to you.</p>
          </TextContainer>
          {!showSuccess ? (
            <FormContainer onSubmit={this.onClickRegister}>
              <Label htmlFor="NAME">
                Name<Star>*</Star>
              </Label>
              <Input
                type="text"
                placeholder="Enter Your Name"
                value={fullName}
                onBlur={this.onHandleNameBlur}
                onChange={this.onChangeName}
              />
              {nameErrmsg ? <Errmsg>*This field is required</Errmsg> : null}
              <Label htmlFor="EMAIL">
                Email<Star>*</Star>
              </Label>
              <Input
                type="text"
                placeholder="Enter Your Email"
                value={email}
                onBlur={this.onHandleEmailBlur}
                onChange={this.onChangeEmail}
              />
              {emailErrmsg ? <Errmsg>*This field is required</Errmsg> : null}
              <Label htmlFor="MOBILE">
                Mobile Number<Star>*</Star>
              </Label>
              <Input
                type="text"
                placeholder="Enter Your Mobile Number"
                value={mobile}
                onBlur={this.onHandleMobileBlur}
                onChange={this.onChangeMobile}
              />
              {mobileErrmsg ? <Errmsg>*This field is required</Errmsg> : null}
              <FormButton type="submit">REGISTER NOW</FormButton>
              {finalErr && <Errmsg>{errmsg}</Errmsg>}
            </FormContainer>
          ) : (
            this.onSuccessfulRegistration()
          )}
        </MainContainer>
      </>
    )
  }
}

export default Form
