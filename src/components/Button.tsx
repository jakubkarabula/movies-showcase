import styled from 'styled-components'
import { colors, fontWeight } from './Styles'

const Button = styled.button`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: ${fontWeight.black};
  background-color: ${colors.gray[300]};
  color: ${colors.gray[800]};
  text-align: center;
  border: 0;
  border-radius: 12px;
  padding: 22px 0;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;
  transition-timing-function: ease-out;

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.gray[400]};
  }
`

export default Button
