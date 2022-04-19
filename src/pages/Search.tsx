import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useSearch } from '../Api'
import { CardContainer, CardSorting, SearchBox } from '../components'
import { maxWidth, mobileWidth } from '../components/Styles'
import { StoreState } from '../Redux/Store'

const CardsControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto 20px;
  width: 100%;
  max-width: ${maxWidth};
  gap: 2rem;

  @media only screen and (min-width: ${mobileWidth}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px auto 60px;
  }
`

const selectsearch = (state: StoreState) => state.search

const SearchPage = () => {
  const search = useSelector(selectsearch)
  const { loading, error } = useSearch(search)

  return (
    <>
      <CardsControl>
        <CardSorting />
        <SearchBox />
      </CardsControl>

      <CardContainer loading={loading} error={error} />
    </>
  )
}

export default SearchPage
