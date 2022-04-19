import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setorderBy, StoreState } from '../Redux/Store'
import { colors, desktopMargin, mobileMargin, mobileWidth } from './Styles'
import Tag from './Tag'

export type orderByType = 'year' | 'title' | 'default'

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

const SortBy = styled.span`
  color: ${colors.gray[800]};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 ${mobileMargin};

  @media only screen and (min-width: ${mobileWidth}) {
    margin: 0 ${desktopMargin};
    flex-direction: row;
    align-items: center;
  }
`

const selectorderBy = (state: StoreState) => state.orderBy

const CardSorting = () => {
  const dispatch = useDispatch()
  const orderBy = useSelector(selectorderBy)

  return (
    <Wrapper>
      <SortBy>ORDER BY:</SortBy>

      <Tags>
        <Tag
          dataTestid='order-by-default'
          content='default'
          size='big'
          active={orderBy === 'default'}
          onClick={() => dispatch(setorderBy('default'))}
        />
        <Tag
          dataTestid='order-by-title'
          content='title'
          size='big'
          active={orderBy === 'title'}
          onClick={() => dispatch(setorderBy('title'))}
        />
        <Tag
          dataTestid='order-by-year'
          content='year'
          size='big'
          active={orderBy === 'year'}
          onClick={() => dispatch(setorderBy('year'))}
        />
      </Tags>
    </Wrapper>
  )
}

export default CardSorting
