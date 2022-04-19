import { useMemo } from 'react'
import { debounce } from 'ts-debounce'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setSearch, StoreState } from '../Redux/Store'
import {
  colors,
  desktopMargin,
  fontWeight,
  mobileMargin,
  mobileWidth,
} from './Styles'
import SearchIcon from '../images/search.png'

const SearchInput = styled.input`
  border: 1px solid #e5e5e8;
  box-sizing: border-box;
  border-radius: 1.5rem;
  padding: 1rem 1.5rem;
  font-size: 14px;
  font-weight: ${fontWeight.black};
  position: relative;
  padding-left: 50px;
  text-overflow: ellipsis;
  width: 100%;

  transition: width 0.3s, background-color 0.2s;
  transition-timing-function: ease-out;

  @media only screen and (min-width: ${mobileWidth}) {
    width: 200px;

    &:focus {
      text-align: left;
      width: 250px;
    }

    &:placeholder-shown:not(:focus) {
      text-align: right;
    }
  }

  &:hover {
    background-color: ${colors.gray[300]};
  }

  &::placeholder {
    color: #62636b;
  }
`

const Wrapper = styled.div`
  position: relative;
  margin: 0 ${mobileMargin};

  @media only screen and (min-width: ${mobileWidth}) {
    margin: 0 ${desktopMargin};
  }
`

const Icon = styled.img`
  position: absolute;
  top: 16px;
  left: 20px;
  width: 20px;
  height: 20px;
`

const selectSearch = (state: StoreState) => state.search

const SearchBox = () => {
  const dispatch = useDispatch()
  const search = useSelector(selectSearch)

  const debouncedEventHandler = useMemo(
    () =>
      debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(event.target.value))
      }, 500),
    [dispatch]
  )

  return (
    <Wrapper>
      <SearchInput
        data-testid='movies-search'
        placeholder='SEARCH'
        onChange={debouncedEventHandler}
        defaultValue={search}
      />
      <Icon src={SearchIcon} alt='Search icon' />
    </Wrapper>
  )
}

export default SearchBox
