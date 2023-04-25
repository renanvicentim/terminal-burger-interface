import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/cropped-800-800-1112338.jpg'
import Logo from '../../assets/terminal_burger_2-removebg-preview.png'
import { Button, ErrorMessage } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles'

export function Login() {
  const history = useHistory()
  const { putUserData, userData } = useUser()

  console.log(userData)

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async ClientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: ClientData.email,
        password: ClientData.password
      }),
      {
        pending: 'Verificando dados',
        success: 'Seja bem-vindo(a)',
        error: 'Verifique seu e-mail e senha 🤯'
      }
    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    }, 1000)
  }

  return (
    <div>
      <Container>
        <LoginImage src={LoginImg} alt="login-image" />
        <ContainerItens>
          <img src={Logo} alt="" style={{ width: '60%', marginBottom: 20 }} />
          <h1>Login</h1>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label>Email</Label>
            <Input
              type="email"
              {...register('email')}
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Senha</Label>
            <Input
              type="password"
              {...register('password')}
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button type="submit" style={{ marginTop: 50, marginBottom: 35 }}>
              Sign In
            </Button>
          </form>

          <SignInLink>
            Não possui conta ?{' '}
            <Link style={{ color: 'white' }} to="/cadastro">
              Sign Up
            </Link>
          </SignInLink>
        </ContainerItens>
      </Container>
    </div>
  )
}
