import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);
`

export const ProductsImg = styled.img`
  width: 100%;
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: ${props => (props.isActiveCategory ? '#060606' : '#9a9a9d')};
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #060606'};
  cursor: pointer;
  background: none;
  padding-bottom: 5px;
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
`
