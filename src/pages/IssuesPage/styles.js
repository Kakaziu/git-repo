import { styled } from 'styled-components'

export const Container = styled.div`
  margin: auto;
  width: 560px;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  margin-top: 40px;
  position: relative;
  margin-bottom: 30px;

  hr {
    margin-top: 20px;
    background-color: #e8e8e8;
    border: none;
    height: 1px;
  }
`

export const Title = styled.h1`
  text-align: center;
  color: #0d0f38;
  margin-top: 20px;
`

export const SubTitle = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
`

export const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  width: 43%;
`

export const Button = styled.button`
  padding: 5px 12px;
  background-color: #e8e8e8;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #2e8cff;
    color: white;
  }
`

export const Issues = styled.div`
  margin-top: 25px;
`

export const Issue = styled.a`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  color: black;
  text-decoration: none;

  img {
    width: 40px;
    height: 40px;
    border-radius: 23px;
    border: 2px solid #2e8cff;
  }

  p {
    font-weight: bold;
    font-size: 15px;
  }

  span {
    display: block;
    margin-top: 7px;
    color: #4f4f4f;
    font-size: 14px;
  }
`

export const ReturnButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  left: 15px;
  top: 15px;
  cursor: pointer;
`

export const PaginationButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  button {
    padding: 5px 10px;
    background-color: #0d0f38;
    color: #FFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`