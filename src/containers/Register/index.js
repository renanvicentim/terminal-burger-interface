import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import RegisterImg from '../../assets/register-image.svg'
import Logo from '../../assets/terminal_burger_2-removebg-preview.png'
import { Button, ErrorMessage } from '../../components'
import api from '../../services/api'
import {
  Container,
  ContainerItens,
  RegisterImage,
  ImageLogo,
  Label,
  Input,
  SignInLink
} from './styles'

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async ClientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: ClientData.name,
          email: ClientData.email,
          password: ClientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro realizado com sucesso')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente')
    }
  }

  return (
    <div>
      <Container>
        <RegisterImage src={RegisterImg} alt="register-image" />
        <ContainerItens>
          {<ImageLogo src={Logo} alt="" />}
          <h1>Cadastre-se</h1>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label error={errors.name?.message}>Nome</Label>
            <Input
              type="text"
              {...register('name')}
              error={errors.name?.message}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>

            <Label error={errors.email?.message}>Email</Label>
            <Input
              type="email"
              {...register('email')}
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label error={errors.password?.message}>Senha</Label>
            <Input
              type="password"
              {...register('password')}
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Label error={errors.confirmPassword?.message}>
              Confirmar Senha
            </Label>
            <Input
              type="password"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

            <Button type="submit" style={{ marginTop: 20, marginBottom: 25 }}>
              Sign Up
            </Button>
          </form>

          <SignInLink>
            Já possui conta ?{' '}
            <Link style={{ color: 'white' }} to="/login">
              Sign In
            </Link>
          </SignInLink>
        </ContainerItens>
      </Container>
    </div>
  )
}
