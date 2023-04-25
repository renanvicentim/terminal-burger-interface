import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImage = styled.img`
  height: 80%;
`

export const ContainerItens = styled.div`
  background: #373737;
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
  border-radius: 0 10px 10px 0;
  height: 80%;
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin-top: 7px;
    text-align: center;
  }
`
export const ImageLogo = styled.img`
  width: 35%;
  height: 30%;
  margin: 0 auto;
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: ${props => (props.error ? '10px' : '20px')};
  margin-bottom: 5px;
`

export const Input = styled.input`
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  width: 330.42px;
  height: 38.32px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
