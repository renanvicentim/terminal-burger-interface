import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`

export const LoginImage = styled.img`
  height: 100%;
  width: 50%;
`

export const ContainerItens = styled.div`
  background: #373737;
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
  height: 100%;
  width: 100%;
  padding: 20px 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 28px;
    color: #ffffff;
    margin-top: 0px;
    text-align: center;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 28px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  width: 400.42px;
  height: 45.32px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-right: 36%;
  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
