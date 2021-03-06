import styled from "styled-components"

export const PriceTickerStyled = styled.ul`
  border: 4px solid blueviolet;
  border-radius: 4px;
  padding: 2px;
  list-style: none;
`

export const PriceTickerRowStyled = styled.li`
  border: 3px solid gold;
  border-radius: 4px;
  cursor: pointer;
  margin: 2px;
  padding: 10px 20px;
  text-align: left;
  transition: all 0.1s ease;

  :hover {
    border: 3px solid #f9ada5;
  }
`

export const PriceTickerBtnStyled = styled.button`
  background-color: lightseagreen;
  border: 3px solid teal;
  border-radius: 4px;
  color: whitesmoke;
  cursor: pointer;
  font-size: 18px;
  margin: 10px auto;
  padding: 2px 10px;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgb(183, 230, 90);
    border: 3px solid darkslategray;
    color: darkslategray;
  }
`
