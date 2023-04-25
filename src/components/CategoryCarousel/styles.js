import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #060606;
    color: #efefef;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #060606;
    background-color: #efefef;
    color: #060606;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImg = styled.img``

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  margin-top: 16px;
  height: 50px;
  background: #060606;
  box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22),
    0px 20px 40px rgba(151, 88, 166, 0.24);
  border-radius: 8px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
