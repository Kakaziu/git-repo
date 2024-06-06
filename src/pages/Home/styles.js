import { styled } from 'styled-components'

export const Container = styled.section`
  margin: auto;
  width: 640px;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  margin-top: 40px;
`

export const Title = styled.h1`
  font-size: 20px;
  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
    margin-top: 3px;
  }
`

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
`

export const InputForm = styled.input`
  width: 93%;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
`

export const Button = styled.button`
  padding: 9px 12px;
  background-color: #171738;
  color: white;
  border: none;
  font-size: 16px;
  margin-left: 5px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #1d1d47;
  }
`

export const ReposContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`

export const Repo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  button {
      border: none;
      background-color: transparent;
      margin-right: 5px;
      cursor: pointer;
  }
`