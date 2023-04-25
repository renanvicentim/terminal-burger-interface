import React from 'react'

import CartLogo from '../../assets/banner cart.png'
import { CartItems, CartResume } from '../../components'
import { Container, CartImg, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo-carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
