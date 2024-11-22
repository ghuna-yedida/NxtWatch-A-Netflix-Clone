import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  background-color: ${props => (props.dark ? '#0F0F0F' : '#ffffff')};
  border-radius: 5px;
  box-shadow: ${props => (props.dark ? 'none' : '0px 0px 20px 5px #c6c9cc')};
  width: 90%;
  max-width: 450px;
  @media (min-width: 768px) {
    width: 100%;
  }
`
export const WebsiteLogo = styled.img`
  width: 140px;
  @media screen and (min-width: 768px) {
    width: 55%;
    margin-bottom: 10px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 992px) {
    width: 450px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 992px) {
    width: 100%;
  }
`

export const Label = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 992px) {
    font-size: 16px;
  }
`

export const Input = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #94a3b8;
  background-color: #ffffff;
  color: black;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 100%;
  }
  @media screen and (min-width: 992px) {
    font-size: 16px;
    width: 100%;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const CheckBoxInput = styled.input`
  display: flex;
  width: 18px;
  height: 18px;
  cursor: pointer;
`

export const ShowPasswordLabel = styled.label`
  margin-left: 6px;
  margin-top: 2px;
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #3b82f6;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
export const LoginContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  height: 100vh;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginInput = styled.input`
  width: 100%;
  height: 35px;
  padding-left: 10px;
  background-color: ${props => (props.theme === 'dark' ? 'black' : 'white')};
  border: 1px solid;
  border-color: #94a3b8;
  border-radius: 5px;
  margin-top: 5px;
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
  margin-bottom: 10px;
  outline: none;
`
