import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #9a9a9d;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  width: max-content;
  grid-gap: 10px 15px;

  img {
    border-radius: 10px;
    width: 120px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    align-items: baseline;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
  }
`

export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
