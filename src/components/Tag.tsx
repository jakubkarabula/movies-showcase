import { MouseEventHandler } from 'react'
import styled from 'styled-components'
import { colors, fontWeight } from './Styles'

type contentSize = 'small' | 'big'

type TagProps = {
  content: string
  size: contentSize
  key?: string
  onClick?: MouseEventHandler<HTMLSpanElement>
  active?: boolean
  dataTestid?: string
}

const TagWrapper = styled.button<{ size: contentSize; active?: boolean }>`
  background-color: ${colors.gray[400]};
  text-transform: uppercase;
  padding: ${(props) => (props.size === 'big' ? '14px 1.5rem' : '0.5rem 1rem')};
  border-radius: 24px;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  line-height: 1em;
  font-weight: ${fontWeight.black};
  color: ${(props) => (props.active ? colors.blue : '#62636B')};
  cursor: pointer;
  border: 0;

  transition: background-color 0.2s;
  transition-timing-function: ease-out;

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.gray[300]};
  }
`

const Tag = ({ content, size, onClick, active, dataTestid }: TagProps) => {
  return (
    <TagWrapper
      size={size}
      onClick={onClick}
      active={active}
      data-testid={dataTestid}
    >
      {content}
    </TagWrapper>
  )
}

export default Tag
