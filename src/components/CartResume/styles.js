import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 30px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;

      color: #222222;
    }
    .items {
      grid-area: items;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: #222222;
    }
    .items-price {
      grid-area: items-price;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #222222;
    }
    .delivery-tax {
      grid-area: delivery-tax;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: #222222;
    }
    .delivery-tax-price {
      grid-area: delivery-tax-price;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #222222;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
  }
`
